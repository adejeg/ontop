import { Component, OnInit } from '@angular/core';
import * as Popper from "@popperjs/core"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbars = [
    {
      title: 'Contracts',
      icon: 'assets/img/icons/user.svg',
      status: 'active'
    },
    {
      title: 'Documents',
      icon: 'assets/img/icons/document.svg',
      status: ''
    },
    {
      title: 'Payout',
      icon: 'assets/img/icons/wallet.svg',
      status: ''
    },
    {
      title: 'Time',
      icon: 'assets/img/icons/date.svg',
      status: ''
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
