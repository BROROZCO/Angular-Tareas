import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/models/Tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tareas[] = []

  // BIDING DATA
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {

    alert(this.nombreTarea);
    // Crear objeto
  

    // Agregar objeto al array

    // Resear formulario

  }


}
