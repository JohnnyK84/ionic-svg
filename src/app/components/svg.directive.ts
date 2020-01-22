import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[svg]'
})
export class HighlightDirective implements OnInit{
    constructor(private el: ElementRef) {
       
    }

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
}