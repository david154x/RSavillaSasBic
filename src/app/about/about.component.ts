import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  first:number=0;
  rows: number=0;

  onPageChange(event:any) {
    this.first = event.first;
    this.rows = event.rows;
  }

}
