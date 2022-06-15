import {AfterContentInit, Component, ContentChildren, OnInit, QueryList, TemplateRef} from '@angular/core';
import {SliderItemDirective} from './slider-item.directive';

@Component({
  selector: 'sa-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterContentInit {
  @ContentChildren(SliderItemDirective, {read: TemplateRef})
  readonly slidersContent!: QueryList<TemplateRef<SliderItemDirective>>;

  slides: TemplateRef<SliderItemDirective>[] = [];

  constructor() {
  }

  ngAfterContentInit(): void {
    this.slides = this.slidersContent.toArray();
  }
}
