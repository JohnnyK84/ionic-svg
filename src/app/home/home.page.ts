import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
    let htmlEl = document.getElementById("svgImg");
    console.log(htmlEl);
  }

  addFunction(id: any):void {
    console.log("Clicked" + id);
}

}
