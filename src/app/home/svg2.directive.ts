import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSvg2]'
})
export class Svg2Directive implements OnInit {
  svg: HTMLCollection;
  svgEl: Element;

  listOfPathsWithDefTag: Element[] = [];

  constructor(private el: ElementRef) { }
  
  ngOnInit() {
    let pathElements: HTMLCollection = this.el.nativeElement.getElementsByTagName('path');
    this.svg = document.getElementsByTagName("svg");

    this.svgEl = this.svg[0];
    console.log(this.svgEl);    

    console.log("From Directive, all paths: ", pathElements);

    // loop through HTMLCollection (all <path> tags in svg) and add event listener function
    for (let i =0; i < pathElements.length; i++) {
      let defTag = document.createElement("defs");
      let currEl: Element = pathElements[i];

      this.listOfPathsWithDefTag.push(currEl);
      console.log(i);
      // console.log(i + " " + this.listOfPathsWithDefTag);

      currEl.addEventListener('click', this.clickEvent.bind("$event"));            
      // console.log(defTag);
    }
    console.log(this.listOfPathsWithDefTag);
  }

  // click event to access properties of clicked element and get/set appropriate attributes
  clickEvent(areaClicked: any): void {
    console.log(areaClicked);
    // console.log(areaClicked.toElement.id);    

    let id: string = areaClicked.toElement.id;
    let el: HTMLElement = document.getElementById(id);      

    // click functionality to add css on selected
    if (el.classList.contains("selected")) {
      el.classList.remove("selected");
    } else {
      el.classList.add("selected");
      alert("Selected: " + areaClicked.toElement.attributes[3].nodeValue)
    }
    // console.log(areaClicked.toElement.className);

    
  }
}
