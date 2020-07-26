import {Component, OnInit} from '@angular/core';
import * as moment from 'jalali-moment';
import {AppServiceService} from '../../services/app-service.service';
import {AlertController, ToastController} from '@ionic/angular';
import {FunctinalityModel} from '../../services/functinality-model';
import {Router} from '@angular/router';


@Component({
    selector: 'app-recive-report',
    templateUrl: './recive-report.page.html',
    styleUrls: ['./recive-report.page.scss'],
})
export class ReciveReportPage implements OnInit {
    m = moment().locale('fa').format('YYYY-MM-DD');
    dataFromModel: FunctinalityModel[] = [];
    data = {
        from_date: '1397-1-1',
        to_date: this.m,
        organization_unit: ''
    };
    filterActive = false;
    untilPickerOptions: any;
    fromPickerOptions: any;
    customYearValues = [1395, 1396, 1397, 1398, 1399, 1400];
    unitName = '';
    input = {data: []};

    constructor(private service: AppServiceService, public alertController: AlertController,
                private toastController: ToastController, private router: Router) {
        this.service.getDebtorAmountsDay(this.data).subscribe(res => {
            if (res.status) {
                if (res.Result.length !== 0) {

                    this.dataFromModel = res.Result;
                } else {
                    this.presentToast('اطلاعاتی وجود ندارد ');
                    console.log(res);
                    this.dataFromModel = [{
                        TotalAmount: 0,
                        OperationTitle: 'اطلاعاتی یافت نشد',
                        OperationCount: 0
                    }];
                }
            } else {
                this.presentToast('اطلاعاتی وجود ندارد ');
            }
        });
        this.service.getAllUnite().subscribe(
            res => {
                if (res.status) {
                    for (const entry of res.Result) {
                        // console.log(entry.Name);
                        this.input.data.push({name: entry.ID, type: 'radio', label: entry.Name, value: entry});
                    }
                }
            }
        );
        this.untilPickerOptions = {
            buttons: [{
                text: 'ذخیره',
                handler: (e) => {
                    this.data.to_date = e.year.value + '-' + e.month.value + '-' + e.day.value;
                    // console.log(this.data);
                }
            }, {
                text: 'لغو',
                handler: () => {
                    this.untilPickerOptions.dismiss();
                    return false;
                }
            }]
        };
        this.fromPickerOptions = {
            buttons: [{
                text: 'ذخیره',
                handler: (e) => {
                    this.data.from_date = e.year.value + '-' + e.month.value + '-' + e.day.value;
                    // console.log(this.data);
                }
            }, {
                text: 'لغو',
                handler: () => {
                    this.fromPickerOptions.dismiss();
                    return false;
                }
            }]
        };
    }

    async selectPackage() {

        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Radio',
            inputs: this.input.data,
            buttons: [
                {
                    text: 'لغو',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'ثبت',
                    handler: (e) => {
                        this.unitName = e.Name;
                        this.data.organization_unit = e.ID;
                    }
                }
            ]
        });

        await alert.present();
    }

    ngOnInit() {

    }

    filterAction() {
        this.service.getDebtorAmountsLimit(this.data).subscribe(res => {
            if (res.status) {
                if (res.Result.length !== 0) {
                    this.dataFromModel = res.Result;
                } else {
                    this.presentToast('اطلاعاتی وجود ندارد ');
                    this.dataFromModel = [{
                        TotalAmount: 0,
                        OperationTitle: 'اطلاعاتی یافت نشد',
                        OperationCount: 0
                    }];
                }
            } else {
                this.presentToast('اطلاعاتی وجود ندارد ');
                this.dataFromModel = [{
                    TotalAmount: 0,
                    OperationTitle: 'اطلاعاتی یافت نشد',
                    OperationCount: 0
                }];
                this.presentToast('خطای ارتباط  ');
            }
        });
    }

    filter() {
        this.filterActive = !this.filterActive;
    }


    async presentToast(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000,
            position: 'middle',
            cssClass: 'secondary'
        });
        await toast.present();
    }

    back() {
        this.router.navigate(['/home']);
    }
}
