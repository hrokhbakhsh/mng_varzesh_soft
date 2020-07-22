import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import {AlertController} from '@ionic/angular';
import * as moment from 'jalali-moment';


@Component({
  selector: 'app-recive-report',
  templateUrl: './recive-report.page.html',
  styleUrls: ['./recive-report.page.scss'],
})
export class ReciveReportPage implements OnInit {
    allReceive = 21000000;
    filterAll = false ;
    unitName = 'سازمان';
    m = moment().locale('fa').format('YYYY-MM-DD');
    input = {data: []};
    customYearValues = [1395 , 1396, 1397 , 1398, 1399, 1400];
    fromPickerOptions: any;
    untilPickerOptions: any;
    data ={
        from_date: '1397-1-1' ,
        to_date: this.m ,
        organization_unit: ''
    };
  constructor(private service: AppServiceService , public alertController: AlertController) {
      this.untilPickerOptions = {
          buttons: [{
              text: 'Save',
              handler: (e) => {
                  this.data.to_date = e.year.value + '-' + e.month.value + '-' + e.day.value ;
              }
          }, {
              text: 'لغو',
              handler: () => {
                  console.log('Clicked Log. Do not Dismiss.');
                  return false;
              }
          }]
      };
      this.fromPickerOptions = {
          buttons: [{
              text: 'Save',
              handler: (e) => {
                  this.data.from_date =e.year.value + '-' + e.month.value + '-' + e.day.value ;
              }
          }, {
              text: 'لغو',
              handler: () => {
                  console.log('Clicked Log. Do not Dismiss.');
                  return false;
              }
          }]
      };
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

  }

  ngOnInit() {

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

    filter() {
        this.filterAll = !this.filterAll ;
        console.log(this.filterAll);
    }

    filterAction() {
        console.log(this.data);
    }
}
