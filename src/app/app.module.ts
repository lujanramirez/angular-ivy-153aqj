import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IncrementarDecrementarComponent } from './incrementar-decrementar/incrementar-decrementar.component';
import { MultiplicarDividirComponent } from './multiplicar-dividir/multiplicar-dividir.component';
import { ResetearComponent } from './resetear/resetear.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    IncrementarDecrementarComponent,
    MultiplicarDividirComponent,
    ResetearComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
