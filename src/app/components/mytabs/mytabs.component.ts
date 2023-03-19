import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mytabs',
  templateUrl: './mytabs.component.html',
  styleUrls: ['./mytabs.component.scss'],
})
export class MytabsComponent implements OnInit {

  tabId: any;
  constructor(
    private navCtrl: NavController
  ) {
    const id = localStorage.getItem('tabIndex');
    console.log(id);
    if (id && id != null && id !== 'null') {
      this.tabId = id;
    } else {
      this.tabId = 2;
    }
  }

  ngOnInit() { }

}
