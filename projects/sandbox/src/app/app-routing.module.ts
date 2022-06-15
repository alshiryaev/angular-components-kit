import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import
{TabExampleComponent}
  from '../components/tab-example/tab-example.component';
import {SliderExampleComponent} from '../components/slider-example/slider-example.component';

const routes: Routes = [{
  path: 'tabs',
  component: TabExampleComponent,
}, {
  path: 'slider',
  component: SliderExampleComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
