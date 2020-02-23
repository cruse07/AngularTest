import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { VirtualListModule } from 'angular-virtual-list';
import { VirtuallistComponent } from './virtuallist/virtuallist.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    VirtuallistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    VirtualListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
