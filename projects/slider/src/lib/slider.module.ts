import {NgModule} from '@angular/core';
import {SliderComponent} from './slider.component';
import {SliderItemDirective} from './slider-item.directive';

@NgModule({
  declarations: [
    SliderComponent,
    SliderItemDirective,
  ],
  imports: [
  ],
  exports: [
    SliderComponent,
    SliderItemDirective,
  ]
})
export class SliderModule { }
