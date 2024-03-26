// Ensure to import NgModule from @angular/core and other required components and modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Import your components
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // This tells Angular to start the application with the AppComponent
})
export class AppModule { }
