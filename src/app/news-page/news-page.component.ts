import { Component, OnInit } from '@angular/core';

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

  data: NewsSecData[] = [
    { 
      title: "Trending",
      mainImgDec: "Man was found alive hours before he was found dead",
      image: "CrimeEx.jpg",
      Subheadline1: "(BBC) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at.",
      Subheadline2: "(AP) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at.",
      Subheadline3: "(AP) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at."
    },
    { 
      title: "Politics",
      mainImgDec: "Boris Johnson has trouble in class",
      image: "BorisSample.jpg",
      Subheadline1: "(BBC) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at.",
      Subheadline2: "(AP) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at.",
      Subheadline3: "(AP) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewSection(): void {
    let newSec = { 
      title: "Politics",
      mainImgDec: "Boris Johnson has trouble in class",
      image: "BorisSample.jpg",
      Subheadline1: "(BBC) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at.",
      Subheadline2: "(AP) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at.",
      Subheadline3: "(AP) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at."
    };
    this.data.push(newSec);
  }

}
