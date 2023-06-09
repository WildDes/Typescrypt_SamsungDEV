
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

    private apellidos: string;
    private edad: number;
    private dni: {
        nif: number;
        letra: string;
    };
    private fechanac: {
        dia: number;
        guion: string;
        mes: number;
        guion2: string;
        ano: number;
    };
    private color: string;
    private sexo: string;
    private direccion: Direccion;
    private mail: Mail;
    private telefono: Telefono;
    private notas: string;

    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        dni: { nif: number, letra: string },
        fechanac: { dia: number, guion: string, mes: number, guion2: string, ano: number },
        color: string,
        sexo: string,
        direccion: Direccion,
        mail: Mail,
        telefono: Telefono,
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.fechanac = fechanac;
        this.color = color;
        this.sexo = sexo;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono = telefono;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public getEdad(): number {
        return this.edad;
    }

    public getDni(): string {
        return `${this.dni.nif}${this.dni.letra}`
    }

    public getFechanac(): string {
        return `${this.fechanac.dia}${this.fechanac.guion}${this.fechanac.mes}${this.fechanac.guion2}${this.fechanac.ano}`
    }

    public getColor(): string {
        return this.color;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setDireccion(direccion: Direccion) {
        this.direccion = direccion;
      }
    
      public setMail(mail: Mail) {
        this.mail = mail;
      }
    
      public setTelefono(telefono: Telefono) {
        this.telefono = telefono;
      }
}
