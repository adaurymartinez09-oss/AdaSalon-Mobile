
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular';

import { IonButtons } from '@ionic/angular/ion-buttons';
import { IonMenuButton } from '@ionic/angular/ion-menu-button';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
  CommonModule,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol

  ],
})
export class HomePage {
  nombreSalon = 'AdaSalon';
  nombreUsuario = 'Administrador';

  totalClientes = 128;
  totalProductos = 36;
  ventasDelDia = 8500;

  constructor() {}
}
