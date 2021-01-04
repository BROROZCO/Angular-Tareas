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

    // este arreglo es una copia de listaTareas.nombre[n]
    this.auxilar.push(tarea_.nombre);


    // Resear formulario
    this.nombreTarea = '';
  }

  // Eliminar tarea
  eliminarTarea(index: number): void
  {
    // splice -> desde donde va a eliminar, cantidad de elementos a eliminar
    this.listaTareas.splice(index,1);
    this.auxilar.splice(index,1);
  }

  // Actualizar Tarea
  actualizarTarea( index: number): void{
    this.listaTareas[index].estado = !this.listaTareas[index].estado;
  }

}
