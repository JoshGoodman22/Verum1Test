import { HttpClient } from "@angular/common/http";
import { NewsSecData } from "./news-page.component";
import * as xml2js from 'xml2js';

export class ClimateLoader {
  apRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Climate/APclimate.xml";
  reutersRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Climate/reutersClimate2.xml";
  nbcRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Climate/ncbClimate2.xml";
  nyRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/1cab3f26db9668906ca6c691384b0bb85f11d37b/nyRss.xml";
  natureRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Climate/nature2.xml"; 

  constructor(private http: HttpClient) { }

  loadData() {
    let data: NewsSecData = {
      title: "Climate",
      mainImgDec: "Loading...",
      mainImgDeclink: "Loading...",
      image: "",
      Subheadline1: "Loading...",
      Subheadline1link: "Loading...",
      Subheadline2: "Loading...",
      Subheadline2link: "Loading...",
      Subheadline3: "Loading...",
      Subheadline3link: "Loading..."
    }

    this.getAP(data);
    this.getReuters(data);
    this.getNBC(data);
    // this.getNY(data);
    this.getNature(data);

    return data;
  }

  getReuters(newsData: NewsSecData) {
    this.http.get(this.reutersRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline2 = "(Reuters) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline2link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }

  getAP(newsData: NewsSecData) {
    this.http.get(this.apRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline1 = "(AP) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline1link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }


  getNBC(newsData: NewsSecData) {
    this.http.get(this.nbcRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.mainImgDec = "(NBC) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.mainImgDeclink = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
        newsData.Subheadline3 = "(NBC) " + result.RSS.CHANNEL[0].ITEM[1].TITLE[0];
        newsData.Subheadline3link = result.RSS.CHANNEL[0].ITEM[1].LINK[0];
      });
    });
  }

  // getNY(newsData: NewsSecData) {
  //   this.http.get(this.nyRss, { responseType: "text" }).subscribe((data) => {
  //     const parser = new xml2js.Parser({ strict: false, trim: true });
  //     parser.parseString(data, (err, result) => {
  //       newsData.Subheadline3 = "(NY Times) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
  //       newsData.Subheadline3link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
  //     });
  //   });
  // }

  getNature(newsData: NewsSecData) {
    this.http.get(this.natureRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline1 = "(Nature) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline1link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
        //  build program to get headline for this one
      });
    });
  }
}