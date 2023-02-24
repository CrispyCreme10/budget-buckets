import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { LineItemComponent } from './components/line-item/line-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BucketComponent,
    LineItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
