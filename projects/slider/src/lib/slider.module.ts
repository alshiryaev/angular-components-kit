import {NgModule} from '@angular/core';
import {SliderComponent} from './slider.component';
import {SliderItemDirective} from './slider-item.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SliderComponent,
    SliderItemDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SliderComponent,
    SliderItemDirective,
  ],
})
export class SliderModule { }
