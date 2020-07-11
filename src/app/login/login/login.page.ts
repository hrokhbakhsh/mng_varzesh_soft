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
            user_name: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit() {

    }


     login() {
        // localStorage('url');
        this.sSubmit = true;
        if (this.form.valid) {
                this.loading = true;
                const res =  this.service.authUser(this.form.value).subscribe(
                    res => {
                        if (res.status){
                            console.log(res.SystemUserID) ;
                            this.service.storeUserId(res.SystemUserID);
                        }
                        else {
                            console.log(res.errmessage)
                        }
                    } ,
                    err => console.log(err)
                );
        }
    }
}
