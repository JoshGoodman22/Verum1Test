import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';

interface NewsData {
  news: NewsSecData[];
}

interface NewsSecData {
  title: string;
  mainImgDec: string;
  image: string;
  Subheadline1: string;
  Subheadline2: string;
  Subheadline3: string;
}

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  dataUrl: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/news.json";
  bbcRss: string = "https://raw.githubusercontent.com/JoshGoodman22/Verum1Test/master/src/assets/bbcrss.xml";
  data: NewsSecData[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<NewsData>(this.dataUrl).subscribe((data: NewsData) => {
      // this.data = data.news;
    });
    this.http.get(this.bbcRss, { responseType: "text" }).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(data, (err, result) => {
        // console.log(result);
        console.log(result.RSS.CHANNEL[0].ITEM);
        // This will actually be a loop here not "3"
        let item = result.RSS.CHANNEL[0].ITEM[2]; 
        // TODO: Write a loop over result.RSS.CHANNEL[0].ITEM
        // for each ITEM, you need to extract Data
        // such that you can create a NewsSecData
        let row: NewsSecData = {
          title: item.TITLE[0],
          mainImgDec: "",
          image: "",
          Subheadline1: "",
          Subheadline2: "",
          Subheadline3: ""
        }
        this.data.push(row);

      });
    });
  }


}
