import { HttpClient } from "@angular/common/http";
import { NewsSecData } from "./news-page.component";
import * as xml2js from 'xml2js';

export class StoriesLoader {
  hrRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Global%20Stories/HR.xml";
  migrantsRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Global%20Stories/Migrants.xml";
  unRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/3468250383fe7198881f2bc0ef3909a993bc2aa5/src/assets/RSSFeeds/Trending/unRss.xml";
  womenRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Global%20Stories/Women.xml";

  constructor(private http: HttpClient) { }

  loadData() {
    let data: NewsSecData = {
      title: "Global Stories",
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

    this.getHumanRights(data);
    this.getMigrants(data);
    this.getUN(data);
    this.getWomen(data);

    return data;
  }

  getMigrants(newsData: NewsSecData) {
    this.http.get(this.migrantsRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.mainImgDec = "(Migrants & Refugees) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.mainImgDeclink = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }

  getHumanRights(newsData: NewsSecData) {
    this.http.get(this.hrRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline1 = "(Human Rights) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
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

  getWomen(newsData: NewsSecData) {
    this.http.get(this.womenRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline3 = "(Womens News) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline3link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }
}