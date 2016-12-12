import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {
//declare and initialise string 
clickMessage: string = "";

  constructor() { }

//handle the button click
onClickMe(){
  //message
  this.clickMessage = "Converting! ";

}

  ngOnInit() {
  }

}
