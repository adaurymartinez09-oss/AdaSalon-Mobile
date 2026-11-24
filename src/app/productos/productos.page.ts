
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent
} from '@ionic/angular';

import { IonButtons } from '@ionic/angular/ion-buttons';
import { IonMenuButton } from '@ionic/angular/ion-menu-button';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent
  ],
})
export class ProductosPage {

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Shampoo Reparador',
      categoria: 'Cuidado capilar',
      precio: 850,
      imagen: '🧴',
      descripcion: 'Limpieza y cuidado del cabello'
    },
    {
      id: 2,
      nombre: 'Acondicionador',
      categoria: 'Hidratación',
      precio: 950,
      imagen: '🧴',
      descripcion: 'Suavidad e hidratación'
    },
    {
      id: 3,
      nombre: 'Mascarilla Capilar',
      categoria: 'Tratamiento',
      precio: 1200,
      imagen: '🫙',
      descripcion: 'Nutrición profunda'
    },
    {
      id: 4,
      nombre: 'Sérum Capilar',
      categoria: 'Brillo',
      precio: 1100,
      imagen: '✨',
      descripcion: 'Brillo y acabado profesional'
    }
  ];

  productoZoomId: number | null = null;
  zoomScale = 1;

  private distanciaInicial = 0;
  private escalaInicial = 1;

  private calcularDistancia(event: TouchEvent): number {
    const x = event.touches[0].clientX - event.touches[1].clientX;
    const y = event.touches[0].clientY - event.touches[1].clientY;

    return Math.sqrt(x * x + y * y);
  }

  iniciarZoom(event: TouchEvent, producto: Producto) {
    if (event.touches.length === 2) {
      event.preventDefault();

      this.productoZoomId = producto.id;
      this.distanciaInicial = this.calcularDistancia(event);
      this.escalaInicial = this.zoomScale;
    }
  }

  moverZoom(event: TouchEvent) {
    if (event.touches.length === 2 && this.distanciaInicial > 0) {
      event.preventDefault();

      const distanciaActual = this.calcularDistancia(event);

      const nuevaEscala =
        this.escalaInicial * (distanciaActual / this.distanciaInicial);

      this.zoomScale = Math.min(2.5, Math.max(1, nuevaEscala));
    }
  }

  finalizarZoom() {
    this.distanciaInicial = 0;
  }

  restablecerZoom() {
    this.zoomScale = 1;
    this.productoZoomId = null;
    this.distanciaInicial = 0;
  }
}
