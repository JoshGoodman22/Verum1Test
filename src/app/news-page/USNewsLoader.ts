import { HttpClient } from "@angular/common/http";
import { NewsSecData } from "./news-page.component";
import * as xml2js from 'xml2js';

export class USNewsLoader {
  apRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/US%20News/APUS2.xml";
  reutersRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/US%20News/ReutersUS22.xml";
  axRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/US%20News/AxiosUS2.xml";
  nnRss: string= "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/US%20News/NewsNation2.xml";

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

    // this.getBBC(data);
    this.getReuters(data);
    this.getAxios(data);
    this.getNewsNation(data);
    this.getAP(data)

    return data;
  }

  getReuters(newsData: NewsSecData) {
    this.http.get(this.reutersRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline3 = "(Reuters) " + result.RSS.CHANNEL[0].ITEM[1].TITLE[0];
        newsData.Subheadline3link= result.RSS.CHANNEL[0].ITEM[1].LINK[0];
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


  getAxios(newsData: NewsSecData) {
    this.http.get(this.axRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline2 = "(Axios) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline2link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }

  getNewsNation(newsData: NewsSecData) {
    this.http.get(this.nnRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.mainImgDec = "(News Nation) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.mainImgDeclink = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }
}