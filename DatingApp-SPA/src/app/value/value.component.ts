import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  values: [{}];
  constructor(private http: HttpClient) {
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values')
    .subscribe(data => {
      // @ts-ignore
      this.values = data;
      console.log(this.values);
    });
  }

  ngOnInit() {
    this.getValues();
  }

}
