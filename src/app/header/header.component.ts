import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() app?: AppComponent;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("Starting timeout.");
    setTimeout(() => this.openModal(), 5000);

  }

  changePage(targetPage: string): void {
    this.app!.page = targetPage;
  }

  openModal()
  {
    console.log("Trying to open modal.");
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
