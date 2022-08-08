import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrendingLoader } from './TrendingLoader';
import { PoliticsLoader } from './PoliticsLoader';
import { ClimateLoader } from './ClimateLoader';
import { HealthLoader } from './HealthLoader';
import { USNewsLoader } from './USNewsLoader';
import { StoriesLoader } from './StoriesLoader';

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
  data: NewsSecData[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<NewsData>(this.dataUrl).subscribe((data: NewsData) => {
      // this.data = data.news;
    });
    let trending : TrendingLoader = new TrendingLoader(this.http);
    let politics : PoliticsLoader = new PoliticsLoader(this.http);
    let Climate : ClimateLoader = new ClimateLoader(this.http);
    let Health : HealthLoader = new HealthLoader(this.http);
    let USNews: USNewsLoader = new USNewsLoader(this.http);
    let Stories: StoriesLoader = new StoriesLoader(this.http);
    this.data.push(trending.loadData());
    this.data.push(politics.loadData());
    this.data.push(Climate.loadData());
    this.data.push(Health.loadData());
    this.data.push(USNews.loadData());
    this.data.push(Stories.loadData());

  }

  

  




}
