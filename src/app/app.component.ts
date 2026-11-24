
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle,
  MenuController
} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonMenuToggle
  ],
})
export class AppComponent {

  constructor(
    private router: Router,
    private menuController: MenuController
  ) {}

  async navegar(ruta: string) {
    await this.menuController.close('first-menu');
    await this.router.navigateByUrl(ruta);
  }
}
