import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'NewsSec',
  templateUrl: './news-sec.component.html',
  styleUrls: ['./news-sec.component.css']
})
export class NewsSecComponent implements OnInit {

  @Input() title: string = "title not known";
  @Input() mainImgDec: string = "Description unknown";
  @Input() image: string = "Image not found for genre"
  @Input() Subheadline1: string = "Headline not found"
  @Input() Subheadline2: string = "Headline not found"
  @Input() Subheadline3: string = "Headline not found"
  constructor() { }

  ngOnInit(): void {
  }


}
