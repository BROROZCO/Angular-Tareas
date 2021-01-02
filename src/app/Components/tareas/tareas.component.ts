import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/models/Tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tareas[] = [];

  // BIDING DATA
  nombreTarea = '';
  // 
  auxilar: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {

    // Crear objeto
    const tarea_: Tareas ={
      nombre: this.nombreTarea,
      estado: false
    }

    // Agregar objeto al array

    this.listaTareas.push(tarea_);


    // Resear formulario
    this.nombreTarea = '';

  }


}
