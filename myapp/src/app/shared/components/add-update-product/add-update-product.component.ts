import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss'],
})
export class AddUpdateProductComponent  implements OnInit {
  form = new FormGroup({
    id: new FormControl (''),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    asignatura: new FormControl('', [Validators.required, Validators.minLength(4)]),
    fecha: new FormControl('', [Validators.required, Validators.min(0)]),
  })


  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor (private router: Router){}


  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/profesorqr']);
  }


  async submit() {
    if (this.form.valid){

      const loading = await this.utilsSvc.loading();
      await loading.present();


      this.firebaseSvc.signUp(this.form.value as User).then(async res => {


        await this.firebaseSvc.updateUser(this.form.value.name)

        let uid = res.user.uid


      }).catch (error => {
        console.log(error);

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })

      }).finally(() => {
        loading.dismiss();

      })

    }

  }

  async asis() {
    if (this.form.valid){

      const loading = await this.utilsSvc.loading();
      await loading.present();


      this.firebaseSvc.signUp(this.form.value as User).then(async res => {


        await this.firebaseSvc.updateUser(this.form.value.name)



      }).catch (error => {
        console.log(error);

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })

      }).finally(() => {
        loading.dismiss();

      })

    }

  }
}


