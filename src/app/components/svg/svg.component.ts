import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    let y = this.elRef.nativeElement.querySelector('path').addEventListener('(click)', this.addFunction());
    console.log(y);
    let x = document.getElementsByTagName('svg');
    console.log(x[0].children);

    let children = x[0].children;

    console.log("Children", children);

  
  }

  addFunction():void {
      console.log("Clicked" );
  }
}
