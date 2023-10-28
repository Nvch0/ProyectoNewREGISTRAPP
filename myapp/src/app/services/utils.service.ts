import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  modalCtrl = inject(ModalController)
  router = inject(Router)


  //================LOADING=================

  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }

  //===========Mensaje Toast===================
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }


  //============Enruta a cualquier pagina disponible==========
  routerLink(url: string){
    return this.router.navigateByUrl(url)
  }

  //============Guardar elementos en el localStorage==========
  saveInLocalStorage(key: string, value: any){
    return localStorage.setItem(key, JSON.stringify(value))
  }

  //============OBTENER elementos en el localStorage==========

  getFromLocalStorage(key: string){
    return JSON.parse (localStorage.getItem(key))
  }

  //============Modal 1==========
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();

    const {data} = await modal.onWillDismiss();
    if(data) return data;
  
  }
  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }


}
