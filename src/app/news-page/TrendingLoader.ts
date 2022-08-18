import { HttpClient } from "@angular/common/http";
import { NewsSecData } from "./news-page.component";
import * as xml2js from 'xml2js';

export class TrendingLoader {
  bbcRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/BBCTrend.xml";
  reutersRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/RuetersTrend2.xml";
  apRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/APtrend2.xml";
  nbcRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/RSSFeeds/Trending/NBCTrend2.xml";


  constructor(private http: HttpClient) { }

  loadData() {
    let data: NewsSecData = {
      title: "Trending",
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
    this.getAP(data);
    this.getNBC(data);

    return data;
  }

  getReuters(newsData: NewsSecData) {
    this.http.get(this.reutersRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.mainImgDec = "(Reuters) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.mainImgDeclink = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }

  getBBC(newsData: NewsSecData) {
    this.http.get(this.bbcRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline1 = "(BBC) " + result.RSS.CHANNEL[0].ITEM[1].TITLE[0];
        newsData.Subheadline1link = result.RSS.CHANNEL[0].ITEM[1].LINK [0];
      });
    });
  }


  getAP(newsData: NewsSecData) {
    this.http.get(this.apRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline2 = "(AP) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        newsData.Subheadline2link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }

  getNBC(newsData: NewsSecData) {
    this.http.get(this.nbcRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        newsData.Subheadline3 = "(NBC) " + result.RSS.CHANNEL[0].ITEM[2].TITLE[0];
        newsData.Subheadline3link = result.RSS.CHANNEL[0].ITEM[2].LINK[0];
      });
    });
  }
}