import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { RowDetailStreamComponent } from './componnents/row-detail-stream/row-detail-stream.component';
import { RowDetailStreamPreloadComponent } from './componnents/row-detail-stream-preload/row-detail-stream-preload.component';

@NgModule({
  declarations: [
    AppComponent,
    RowDetailStreamComponent,
    RowDetailStreamPreloadComponent
  ],
  imports: [
    BrowserModule,
    AngularSlickgridModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    RowDetailStreamComponent,
    RowDetailStreamPreloadComponent
  ]
})
export class AppModule { }
