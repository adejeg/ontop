import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor-mobile',
  templateUrl: './contractor-mobile.component.html',
  styleUrls: ['./contractor-mobile.component.scss']
})
export class ContractorMobileComponent implements OnInit {
  @Input() contractor: any;
  constructor() { }

  ngOnInit(): void {
  }

}
