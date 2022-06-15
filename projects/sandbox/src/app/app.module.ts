import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TabsModule} from '../../../tabs/src/lib/tabs.module';
import {AccordionModule} from '../../../accordion/src/lib/accordion.module';
import {TabExampleComponent} from '../components/tab-example/tab-example.component';
import { SliderExampleComponent } from '../components/slider-example/slider-example.component';
import {SliderModule} from "../../../slider/src/lib/slider.module";

@NgModule({
  declarations: [
    AppComponent,
    TabExampleComponent,
    SliderExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TabsModule,
    SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
