import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import {AlertController, ToastController} from '@ionic/angular';
import * as moment from 'jalali-moment';
@Component({
  selector: 'app-reciption-situation',
  templateUrl: './reciption-situation.page.html',
  styleUrls: ['./reciption-situation.page.scss'],
})
export class ReciptionSituationPage implements OnInit {
    m = moment().locale('fa').format('YYYY-MM-DD');
    input = {data: []};
    customYearValues = [1395 , 1396, 1397 , 1398, 1399, 1400];
    fromPickerOptions: any;
    untilPickerOptions: any;
    data = {
        from_date: '1397-1-1' ,
        to_date: this.m ,
        organization_unit: ''
    };
  constructor(private service: AppServiceService , public alertController: AlertController , private toastController: ToastController) {
      this.untilPickerOptions = {
          buttons: [{
              text: 'ذخیره',
              handler: (e) => {
                  this.data.to_date = e.year.value + '-' + e.month.value + '-' + e.day.value ;
              }
          }, {
              text: 'لغو',
              handler: () => {
                  this.untilPickerOptions.dismiss();
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
      this.fromPickerOptions = {
          buttons: [{
              text: 'ذخیره',
              handler: (e) => {
                  this.data.from_date = e.year.value + '-' + e.month.value + '-' + e.day.value ;
                  console.log(this.data);
              }
          }, {
              text: 'لغو',
              handler: () => {
                  return false;
              }
          }]
      };
  }

  presentNumber = 0 ;
  exitNumber = 0 ;
  all = 0 ;
    filterActive = false;
    unitName = 'سازمان';
  ngOnInit() {
     this.service.getAllReport().subscribe(
        res => {
          if (res.status){
            this.presentNumber = res.Result.PresentMemberCount ;
            this.exitNumber = res.Result.ExitedMemberCount ;
            this.all = Number(this.exitNumber) + Number(this.presentNumber) ;
            if (this.all === 0){
                this.presentToast('ورودی و خروجی امروز صفر است ');
            }
          }
        } ,
        err => {
            this.presentToast('خطای ارتباط با سرور');
            console.log(err);
        }
    );
  }

    filter() {
        this.filterActive = ! this.filterActive ;
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

    filterAction() {
        this.service.getPoolReceptionLimit(this.data).subscribe(res => {
            if (res.status){
                this.all = Number(res.AllReceptionedMemberCount);
            }else {
                console.log('can not voonect');
                this.presentToast('خطای ارتباط با سرور');
            }
        });
    }
    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000 ,
            cssClass : 'secondary'
        });
        await toast.present();
    }
}
