import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-new',
  templateUrl: './test-new.component.html',
  styleUrls: ['./test-new.component.css']
})
export class TestNewComponent implements OnInit {

msg: string;

  constructor() {
    this.msg = "New Component";
   }

  ngOnInit() {
  }

}
