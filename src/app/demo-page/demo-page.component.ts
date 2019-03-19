import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {

  public payload = '';
  public parsedObject: any;

  constructor() { }

  ngOnInit() {
  }

  parsePayload() {
    // this.parsedObject = ;
  }
}
