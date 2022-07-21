import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() app?: AppComponent;

  constructor() { }

  ngOnInit(): void {
  }

  changePage(targetPage: string): void {
    this.app!.page = targetPage;
  }

}
