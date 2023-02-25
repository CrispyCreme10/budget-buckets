import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { LineItemComponent } from './components/line-item/line-item.component';
import { AddTemplateComponent } from './components/add-template/add-template.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateDetailComponent } from './components/template-detail/template-detail.component';


// const appRoutes: Routes = [
//   {
//     path: '',
//     component: TemplatesComponent,
//     children: [
//       {
//         path: 'template/:name',
//         component: TemplateDetailComponent
//       }
//     ]
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    BucketComponent,
    LineItemComponent,
    AddTemplateComponent,
    HomeComponent,
    TemplateDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    // RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
