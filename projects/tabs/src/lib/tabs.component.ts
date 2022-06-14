import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
  Output, EventEmitter,
} from '@angular/core';
import {TabComponent} from './tab/tab.component';

@Component({
  selector: 'sa-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.components.scss'],
})
export class TabsComponent implements AfterViewInit {
  tabs: TabComponent[] = [];
  activeTabIndex: number = 0;
  @ContentChildren(TabComponent)
  tabComponents: QueryList<TabComponent> = new QueryList<TabComponent>();

  @Output()
  readonly selectedTabIndexChanged = new EventEmitter<number>();

  ngAfterViewInit(): void {
    this.tabs = this.tabComponents.toArray();
  }

  tabClick(index: number): void {
    this.selectTabByIndex(index);
  }

  selectTabByIndex(index: number): void {
    this.activeTabIndex = index;
    this.selectedTabIndexChanged.emit(index);
  }
}
