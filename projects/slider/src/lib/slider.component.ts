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

enum Direcition {
  Left = -1,
  Right = 1,
}

@Component({
  selector: 'sa-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(SliderItemDirective, {read: TemplateRef})
  slidersContent!: QueryList<TemplateRef<ElementRef>>;

  readonly enums = {
    Direcition,
  };

  @Input()
  interval = 5000;

  activeSlideIndex = 0;
  slides: TemplateRef<ElementRef>[] = [];

  ngAfterContentInit(): void {
    this.slides = this.slidersContent.toArray();
    this.startInterval();
  }

  navigate(direction: Direcition): void {
    this.stopInterval();
    this.activeSlideIndex = this.getNextSlideIndex(
      this.activeSlideIndex,
      direction,
      this.slides.length - 1,
    );
    this.startInterval();
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  private intervalId!: number;

  private startInterval(): void {
    this.intervalId = setInterval(() => {
      this.activeSlideIndex =
        this.getNextSlideIndex(
          this.activeSlideIndex,
          Direcition.Right,
          this.slides.length - 1);
    }, this.interval);
  }

  private stopInterval(): void {
    clearInterval(this.intervalId);
  }

  private getNextSlideIndex(currentIndex: number, direction: Direcition, count: number): number {
    const nextSlideIndex = currentIndex + direction;
    if (nextSlideIndex > count) {
      return 0;
    } else if (nextSlideIndex <= 0) {
      return count;
    }

    return nextSlideIndex;
  }
}
