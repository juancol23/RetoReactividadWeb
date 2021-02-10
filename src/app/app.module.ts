import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListarProstitutaComponent } from './components/listar-prostituta/listar-prostituta.component';
import { ProstitutasService } from '../app/service/prostitutas.service'
@NgModule({
  declarations: [
    AppComponent,
    ListarProstitutaComponent, 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
  ],
  providers: [ProstitutasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
