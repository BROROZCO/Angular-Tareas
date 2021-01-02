import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TareasComponent } from './Components/tareas/tareas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Se importa pra poder usar la directiva ngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
