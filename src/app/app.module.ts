import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExploradorSeriesModule } from './explorador-series/explorador-series.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './core/barra-navegacion/barra-navegacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExploradorSeriesModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
