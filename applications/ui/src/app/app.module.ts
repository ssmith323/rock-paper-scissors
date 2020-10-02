import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormFieldModule } from './shared/form-field/form-field.module';
import { TableModule } from './shared/table/table.module';

@NgModule({
  declarations: [AppComponent, AppRoutingModule.components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormFieldModule,
    MatButtonModule,
    TableModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
