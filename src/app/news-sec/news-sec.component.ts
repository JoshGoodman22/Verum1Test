import { Component, Input, OnInit } from '@angular/core';
import { NewsSecData } from '../news-page/news-page.component';

@Component({
  selector: 'NewsSec',
  templateUrl: './news-sec.component.html',
  styleUrls: ['./news-sec.component.css']
})
export class NewsSecComponent implements OnInit {

  @Input() newsData: NewsSecData = undefined!;
  constructor() { }

  ngOnInit(): void {
  }


}
