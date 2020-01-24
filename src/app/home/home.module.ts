import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SvgComponent } from '../components/svg/svg.component';
import { Svg2Directive } from './svg2.directive';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]), PinchZoomModule
  ],
  declarations: [HomePage, SvgComponent, Svg2Directive]
})
export class HomePageModule {}
