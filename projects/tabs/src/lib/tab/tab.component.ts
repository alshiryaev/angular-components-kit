import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'sa-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input()
  header = ''

  @ViewChild('template')
  template!: TemplateRef<any>

  ngOnInit(): void {
  }
}
