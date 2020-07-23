import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
import {AppServiceService} from '../../services/app-service.service';
import {AlertController} from '@ionic/angular';




@Component({
  selector: 'app-recive-report',
  templateUrl: './recive-report.page.html',
  styleUrls: ['./recive-report.page.scss'],
})
export class ReciveReportPage implements OnInit {
    m = moment().locale('fa').format('YYYY-MM-DD');
    data = {
        from_date: '1397-1-1' ,
        to_date: this.m ,
        organization_unit: ''
    };
    filterActive = false;
    untilPickerOptions: any;
    fromPickerOptions: any;
    customYearValues = [1395 , 1396, 1397 , 1398, 1399, 1400];
    unitName = '';
    input = {data: []};
    constructor(private service: AppServiceService , public alertController: AlertController ) {
        this.service.getAllUnite().subscribe(
            res => {
                if (res.status){
                    for (const entry of res.Result) {
                        // console.log(entry.Name);
                        this.input.data.push({name: entry.ID, type: 'radio', label: entry.Name, value:  entry});
                    }
                }
            }
        );
        this.untilPickerOptions = {
            buttons: [{
                text: 'ذخیره',
                handler: (e) => {
                    this.data.to_date = e.year.value + '-' + e.month.value + '-' + e.day.value ;
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
                    this.data.from_date = e.year.value + '-' + e.month.value + '-' + e.day.value ;
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
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: (e) => {
                        this.unitName = e.Name;
                        this.data.organization_unit = e.ID ;
                    }
                }
            ]
        });

        await alert.present();
    }
  ngOnInit() {
  }

    filterAction() {
    }

    filter() {
        this.filterActive = !this.filterActive ;
    }
}
