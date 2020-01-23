import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent implements OnInit {
  @ViewChild('map',{static:true}) map: ElementRef;

  private readonly minZoom: number = 0.5;
  private readonly maxZoom: number = 2.0;
  private readonly zoomVelocity: number = 0.008;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // console.log(this.map);
    // this.addPinchToMap();
  }

  addPinchToMap(): void {
    const hammerTime = new Hammer.Manager(this.map.nativeElement, { touchAction: 'pan-x pan-y' });
    const pinch = new Hammer.Pinch();
    let lastZoom: number = 1; // Default original zoom

    hammerTime.add(pinch);

    hammerTime.on('pinchin', (event: MSGestureEvent) => {
      let newZoom = lastZoom - this.zoomVelocity;
      newZoom = newZoom < this.minZoom ? this.minZoom : newZoom;
      this.renderer.setStyle(this.map.nativeElement, 'zoom', newZoom);
      lastZoom = newZoom;
    });

    hammerTime.on('pinchout', (event: MSGestureEvent) => {
      let newZoom = lastZoom + this.zoomVelocity;
      newZoom = newZoom > this.maxZoom ? this.maxZoom : newZoom;
      this.renderer.setStyle(this.map.nativeElement, 'zoom', newZoom);
      lastZoom = newZoom;
    });
  }
}
