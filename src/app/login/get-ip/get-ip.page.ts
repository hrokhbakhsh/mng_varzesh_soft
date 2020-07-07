import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppServiceService} from '../../services/app-service.service';

@Component({
    selector: 'app-get-ip',
    templateUrl: './get-ip.page.html',
    styleUrls: ['./get-ip.page.scss'],
})
export class GetIpPage implements OnInit {

    private getFormIP : FormGroup;


    constructor( private formBuilder: FormBuilder , private service: AppServiceService) {
        this.getFormIP = this.formBuilder.group({
            codeIp: [null, [Validators.required , Validators.max(9999) , Validators.min(1000)]]
        });
    }

    ngOnInit() {

    }

   async checkIp() {
        let res = await this.service.getIp().toPromise() ;
        console.log(res.data);
    }
}
