import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {
  @Input() contractor: any;
  constructor() { }

  ngOnInit(): void {
  }

}
