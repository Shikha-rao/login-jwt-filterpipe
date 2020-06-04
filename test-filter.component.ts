import { Component, OnInit } from '@angular/core';
import { FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-test-filter',
  templateUrl: './test-filter.component.html',
  styleUrls: ['./test-filter.component.css']
})
export class TestFilterComponent implements OnInit {
  public searchText : string;
  public customerData : any;

  constructor() { }

  ngOnInit() {
    this.customerData = [
      {"name": 'samuel ', "Age": 34, "blog" :'https://code-view.com'},
      {"name": 'Ana fernandez', "Age": 28, "blog" :'https://code-sample.xyz'},
      {"name": 'Sushil Kumar', "Age": 24, "blog" :'https://code-sample.com'},
      {"name": 'Aradhya jose', "Age": 5, "blog" :'https://code-sample.com'},
      {"name": 'jackie ', "Age": 28, "blog" :'https://code-sample.com'},
      {"name": 'Alok kapoor', "Age": 35, "blog" :'https://code-sample.com'},
      {"name": 'Dilip kapoor', "Age": 34, "blog" :'https://code-sample.com'}];
  }
}
