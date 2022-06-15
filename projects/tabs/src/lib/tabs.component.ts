import {
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import {TabComponent} from './tab/tab.component';

@Component({
  selector: 'sa-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentInit {
  tabs: TabComponent[] = [];
  activeTabIndex: number = 0;
  @ContentChildren(TabComponent)
  tabComponents: QueryList<TabComponent> = new QueryList<TabComponent>();

  @Output()
  readonly selectedTabIndexChanged = new EventEmitter<number>();

  constructor(private readonly cdr: ChangeDetectorRef) {
  }

  ngAfterContentInit(): void {
    this.tabs = this.tabComponents.toArray();
    setTimeout(() => {
      this.selectTabByIndex(this.activeTabIndex);
      this.cdr.markForCheck();
    }, 10);
  }

  tabClick(index: number): void {
    this.selectTabByIndex(index);
  }

  selectTabByIndex(index: number): void {
    this.activeTabIndex = index;
    this.selectedTabIndexChanged.emit(index);
  }
}
