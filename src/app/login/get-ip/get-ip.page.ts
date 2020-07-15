import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppServiceService} from '../../services/app-service.service';
import {IpModel} from '../../services/ip-model';
import {Router} from '@angular/router';
import {MenuController, ViewWillEnter} from "@ionic/angular";

@Component({
    selector: 'app-get-ip',
    templateUrl: './get-ip.page.html',
    styleUrls: ['./get-ip.page.scss'],
})
export class GetIpPage implements OnInit, ViewWillEnter {

    private getFormIP: FormGroup;
    loading = false;
    isSubmit = false;
    err = false;


    constructor(public menuCtrl: MenuController, private router: Router, private formBuilder: FormBuilder, private service: AppServiceService) {
        this.getFormIP = this.formBuilder.group({
            codeIp: [null, [Validators.required, Validators.max(9999), Validators.min(1001)]]
        });
    }

    ngOnInit() {

    }


    ionViewWillEnter() {

        this.menuCtrl.enable(false);

    }

    async checkIp() {

        this.isSubmit = true;
        if (this.getFormIP.valid) {
            try {
                let ipModel: IpModel;
                this.loading = true;
                const id = this.getFormIP.value.codeIp - 1001;
                const res = await this.service.getIp().toPromise();

                if (res.settings.success) {
                    ipModel = res.data[id];
                    if (ipModel) {
                        await this.service.storeUrl(id);
                        await this.router.navigate(['/login']);
                        this.err = false
                        this.loading = false
                    } else {
                        this.loading = false;
                        this.err = true;
                    }

                } else {
                    this.loading = false;
                }
                this.isSubmit = true;


            } catch (e) {
                console.log(e);
                this.loading = false;
            }
        }

    }
}
