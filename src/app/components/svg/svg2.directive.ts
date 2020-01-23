import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSvg2]'
})
export class Svg2Directive implements OnInit {

  constructor(private el: ElementRef) { }
  
  ngOnInit() {
    let element: HTMLCollection = this.el.nativeElement.getElementsByTagName('path');

    console.log("Directive", element);

    // loop through HTMLCollection (all <path> tags in svg) and add event listener function
    for (let i =0; i < element.length; i++) {
      let currEl = element[i];
      currEl.addEventListener('click', this.clickEvent.bind("$event"))
    }
  }

  // click event to tap into clicked element and get/set appropriate attributes
  clickEvent(areaClicked: any): void {
    console.log(areaClicked);
    console.log(areaClicked.toElement.id);
    let id: string = areaClicked.toElement.id;
    let el: HTMLElement = document.getElementById(id);
    
    if (el.classList.contains("selected")) {
      el.classList.remove("selected");
    } else {
      el.classList.add("selected");
    }
    console.log(areaClicked.toElement.className);
  }
}
