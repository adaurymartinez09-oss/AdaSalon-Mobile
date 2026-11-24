
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  AlertController
} from '@ionic/angular';

import { IonButtons } from '@ionic/angular/ion-buttons';
import { IonMenuButton } from '@ionic/angular/ion-menu-button';

interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonList,
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonLabel,
    IonRefresher,
    IonRefresherContent
  ],
})
export class ClientesPage {

  clientes: Cliente[] = [
    { id: 1, nombre: 'María Rodríguez', telefono: '809-555-1001' },
    { id: 2, nombre: 'Ana Martínez', telefono: '809-555-1002' },
    { id: 3, nombre: 'Carolina Pérez', telefono: '809-555-1003' },
    { id: 4, nombre: 'Laura Sánchez', telefono: '809-555-1004' }
  ];

  clienteSeleccionado: number | null = null;

  private temporizador: ReturnType<typeof setTimeout> | null = null;

  constructor(private alertController: AlertController) {}

  eliminarCliente(id: number) {
    this.clientes = this.clientes.filter(
      cliente => cliente.id !== id
    );
  }

  async actualizarClientes(event: CustomEvent) {
    await new Promise(resolve => setTimeout(resolve, 700));
    (event.target as HTMLIonRefresherElement).complete();
  }

  iniciarPulsacion(cliente: Cliente) {
    this.cancelarPulsacion();

    this.temporizador = setTimeout(() => {
      this.mostrarOpciones(cliente);
      this.temporizador = null;
    }, 800);
  }

  cancelarPulsacion() {
    if (this.temporizador !== null) {
      clearTimeout(this.temporizador);
      this.temporizador = null;
    }
  }

  async mostrarOpciones(cliente: Cliente) {
    const alert = await this.alertController.create({
      header: cliente.nombre,
      message: 'Teléfono: ' + cliente.telefono,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }
}
