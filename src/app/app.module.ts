import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot([
    {path: '', component: MenuComponent},
    {path: 'about', component: AboutComponent},
  ])],
  declarations: [ AppComponent, HelloComponent, MenuComponent, AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
