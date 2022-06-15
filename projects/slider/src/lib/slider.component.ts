import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  TemplateRef,
} from '@angular/core';
import {SliderItemDirective} from './slider-item.directive';

@Component({
  selector: 'sa-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(SliderItemDirective, {read: TemplateRef})
  slidersContent!: QueryList<TemplateRef<ElementRef>>;

  @Input()
  interval = 5000;

  @Input()
  loop = false;

  activeSlideIndex = 0;
  slides: TemplateRef<ElementRef>[] = [];

  ngAfterContentInit(): void {
    this.slides = this.slidersContent.toArray();
    this.startInterval();
  }

  ngOnDestroy(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }

  private intervalId : number | null = null;

  private startInterval(): void {
    this.intervalId = setInterval(() => {
      const nextSlideIndex = this.activeSlideIndex + 1;
      this.activeSlideIndex = nextSlideIndex > this.slides.length - 1 ? 0 : nextSlideIndex;
    }, this.interval);
  }
}
