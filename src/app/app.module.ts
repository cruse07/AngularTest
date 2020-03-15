import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { VirtualListModule } from 'angular-virtual-list';
import { VirtuallistComponent } from './virtuallist/virtuallist.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './shared/interceptor';
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
    VirtualListModule,
    HttpClientModule,
    FormsModule
  ],
  schemas:[ NO_ERRORS_SCHEMA ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
