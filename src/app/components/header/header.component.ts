import { Component, OnInit } from '@angular/core';
import { AnnounceFreightComponent } from '../announce-freight/announce-freight.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public formDialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openFromDialog() {
    this.formDialog.open(AnnounceFreightComponent);
  }


}
