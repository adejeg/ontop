import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ontop';
  client = 'Adekunle'
  contractors: any;
  constructor(private crud: CrudService, private spinner: NgxSpinnerService){

  }

  ngOnInit(){
    this.pullContractors();
  }

  async pullContractors(){
    try {
      this.spinner.show();
      this.contractors = await this.crud.getData('json/contractors.json')
      console.log(this.contractors);
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    } catch (error) {
      
    }
  }
}
