
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
  IonIcon,
  IonSplitPane,
  MenuController
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  sparklesOutline,
  homeOutline,
  peopleOutline,
  cubeOutline
} from 'ionicons/icons';

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
    IonIcon,
    IonSplitPane
  ],
})
export class AppComponent {

  constructor(
    private router: Router,
    private menuController: MenuController
  ) {
    addIcons({
      sparklesOutline,
      homeOutline,
      peopleOutline,
      cubeOutline
    });
  }

  async navegar(ruta: string) {
    await this.menuController.close('first-menu');
    await this.router.navigateByUrl(ruta);
  }
}
