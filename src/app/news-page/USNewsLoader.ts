import { HttpClient } from "@angular/common/http";
import { NewsSecData } from "./news-page.component";
import * as xml2js from 'xml2js';

export class USNewsLoader {
  bbcRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/bbcrss.xml";
  reutersRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/3468250383fe7198881f2bc0ef3909a993bc2aa5/src/assets/RSSFeeds/Trending/reutersrss.xml";
  unRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/3468250383fe7198881f2bc0ef3909a993bc2aa5/src/assets/RSSFeeds/Trending/unRss.xml";
  econRss: string= "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/US%20News/USecon.xml";

  constructor(private http: HttpClient) { }

  loadData() {
    let data: NewsSecData = {
      title: "U.S News",
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
    this.getEcon(data)

    return data;
  }

  getReuters(newsData: NewsSecData) {
    this.http.get(this.reutersRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline3 = "Reuters" + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline3= result.RSS.CHANNEL[0].ITEM[0].LINK[0];
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

  getEcon(newsData: NewsSecData) {
    this.http.get(this.econRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.mainImgDec = "(The Economist) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.mainImgDeclink = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
        newsData.Subheadline2 = "(The Economist) " + result.RSS.CHANNEL[0].ITEM[1].TITLE[0];
        newsData.Subheadline2link = result.RSS.CHANNEL[0].ITEM[1].LINK[0];
      });
    });
  }
}