import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  first1 = 10;
  rows1 = 10;
  options = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '30', value: 30 },
    { label: '40', value: 40 },
    { label: '50', value: 50 },
    { label: '60', value: 60 },
  ];
  rows2 = 10;
  first2 = 0;
  rows3 = 10;
  first3 = 0;
  rows4 = 10;
  first4 = 0;
  rows5 = 10;
  first5 = 0;
  rows6 = 10;
  first6 = 0;
  totalRecords = 120;

  onPageChange1(event:any) {
    this.first1 = event.first;
    this.rows1 = event.rows;
  }

  onPageChange2(event:any) {
    this.first2 = event.first;
    this.rows2 = event.rows;
  }

  onPageChange3(event:any) {
    this.first3 = event.first;
    this.rows3 = event.rows;
  }

  onPageChange4(event:any) {
    this.first4 = event.first;
    this.rows4 = event.rows;
  }

  onPageChange5(event:any) {
    this.first5 = event.first;
    this.rows5 = event.rows;
  }

  onPageChange6(event:any) {
    this.first6 = event.first;
    this.rows6 = event.rows;
  }

}
