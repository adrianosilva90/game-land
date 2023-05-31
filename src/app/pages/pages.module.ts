import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HeroImgComponent } from '../shared/hero-img/hero-img.component';


@NgModule({
  declarations: [
    MainPageComponent,
    RegisterPageComponent,
    HeroImgComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
