import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';

interface NewsData {
  news: NewsSecData[];
}

export interface NewsSecData {
  title: string;
  mainImgDec: string;
  mainImgDeclink: string;
  image: string;
  Subheadline1: string;
  Subheadline1link: string;
  Subheadline2: string;
  Subheadline2link: string;
  Subheadline3: string;
  Subheadline3link: string;
}

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  dataUrl: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/news.json";
  bbcRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/bbcrss.xml";
  reutersRss: string ="https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/reutersrss.xml";
  data: NewsSecData[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<NewsData>(this.dataUrl).subscribe((data: NewsData) => {
      // this.data = data.news;
    });
    let trending: NewsSecData = {
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

    this.data.push(trending);
    this.getBBC(trending);
    this.getReuters(trending);
    // TODO: Add 2 more sources get??? get???
    // TODO: Add 2 more sections

    // You can download an RSS feed using the curl command
    // curl "URL HERE" > reutersrss.xml
  }

  getReuters(trending: NewsSecData) {
    this.http.get(this.reutersRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        console.log(result);

        trending.mainImgDec = "Reuters" + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
        trending.mainImgDeclink = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }

  getBBC(trending: NewsSecData) {
    this.http.get(this.bbcRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
          trending.Subheadline1 = "(BBC) " + result.RSS.CHANNEL[0].ITEM[0].TITLE[0];
          trending.Subheadline1link = result.RSS.CHANNEL[0].ITEM[0].LINK[0];
      });
    });
  }


}
