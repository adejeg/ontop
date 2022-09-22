import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  searchData: string = '';
  date: string[] = [
    'Jan/1/21 - Jan/31/21',
    'Jan/1/21 - Jan/31/21',
    'Jan/1/21 - Jan/31/21',
    'Jan/1/21 - Jan/31/21',
  ];

  form: FormGroup<any>;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      name: [''],
      contractor_type: [''],
      status: [''],
      date: [''],
    })
  }

  get fd(){
    return this.form.controls;
  }
}
