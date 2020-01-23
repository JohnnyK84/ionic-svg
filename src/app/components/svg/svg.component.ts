import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent implements OnInit {
  @ViewChild('map',{static:true}) map: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.map);
  }

  addFunction() {
      
  }
}
