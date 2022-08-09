import { HttpClient } from "@angular/common/http";
import { NewsSecData } from "./news-page.component";
import * as xml2js from 'xml2js';

export class ClimateLoader {
  bbcRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/bbcrss.xml";
  reutersRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/reutersrss.xml";
  unRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/3468250383fe7198881f2bc0ef3909a993bc2aa5/src/assets/RSSFeeds/Trending/unRss.xml";
  nyRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/1cab3f26db9668906ca6c691384b0bb85f11d37b/nyRss.xml";

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

    this.getBBC(data);
    this.getReuters(data);
    this.getUN(data);
    this.getNY(data);

    return data;
  }

  getReuters(newsData: NewsSecData) {
    this.http.get(this.reutersRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.mainImgDec = "Reuters" + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.mainImgDeclink = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }

  getBBC(newsData: NewsSecData) {
    this.http.get(this.bbcRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline1 = "(BBC) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline1link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }


  getUN(newsData: NewsSecData) {
    this.http.get(this.unRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline2 = "(UN) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline2link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }

  getNY(newsData: NewsSecData) {
    this.http.get(this.nyRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline3 = "(NY Times) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline3link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }
}