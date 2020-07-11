import {Component, OnInit} from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private form: FormGroup;
    loading: boolean = false;
    sSubmit = false;

    constructor(private service: AppServiceService, private fb: FormBuilder) {

        this.form = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit() {

    }


    async login() {
        // localStorage('url');
        this.sSubmit = true;
        if (this.form.valid) {
            try {
                this.loading = true;
                const res = await this.service.authUser(this.form).toPromise();
                if (res.status) {
                    console.log(res.status);
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
}
