import { HttpClient } from "@angular/common/http";
import { NewsSecData } from "./news-page.component";
import * as xml2js from 'xml2js';

export class HealthLoader {
  axRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Health/AxiosHealth2.xml";
  reutersRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Health/ReutersHealth2.xml";
  unRss: string = "";
  cbsRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/Health/CBShealth.xml";

  constructor(private http: HttpClient) { }

  loadData() {
    let data: NewsSecData = {
      title: "Health",
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

    this.getAxios(data);
    this.getReuters(data);
    this.getUN(data);
    this.getCBS(data);

    return data;
  }

  getReuters(newsData: NewsSecData) {
    this.http.get(this.reutersRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.mainImgDec = "(Reuters) " + result.RSS.CHANNEL[0].ITEM[1].TITLE[0];
        newsData.mainImgDeclink = result.RSS.CHANNEL[0].ITEM[1].LINK[0];
      });
    });
  }

  getAxios(newsData: NewsSecData) {
    this.http.get(this.axRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline1 = "(Axios) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
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

  getCBS(newsData: NewsSecData) {
    this.http.get(this.cbsRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline3 = "(CBS) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline3link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }
}