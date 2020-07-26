import {Component, OnInit} from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    faSign = faSignInAlt;
    form: FormGroup;
    loading = false;
    sSubmit = false;

    constructor(private toastController: ToastController, private service: AppServiceService, private fb: FormBuilder, private router: Router) {

        this.form = this.fb.group({
            user_name: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit() {

    }

    login() {
        this.sSubmit = true;
        if (this.form.valid) {
            this.loading = true;
            const res = this.service.authUser(this.form.value).subscribe(
                res => {
                    if (res.status) {

                        this.service.storeUserId(res.SystemUserID, res.Name);
                        this.router.navigate(['/home']);
                        this.loading = false;
                    } else {
                        this.loading = false;
                        this.presentToast('اطلاعات وارده اشتباه هست');
                    }
                },
                err => {
                    this.loading = false;
                    this.presentToast('خطای ارتباط با سرور');

                }
            );
        }
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000,
            cssClass: 'secondary'
        });
        await toast.present();
    }
}
