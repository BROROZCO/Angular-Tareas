// Clase modelo


export class Tareas{
    nombre: string;
    estado: boolean;

    constructor(nombre_: string, estado_: boolean){
        this.nombre = nombre_;
        this.estado = estado_;
    }
}