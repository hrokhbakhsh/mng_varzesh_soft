import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
import {AppServiceService} from '../../services/app-service.service';
import {AlertController, ToastController} from '@ionic/angular';
import {FunctinalityModel} from '../../services/functinality-model';

@Component({
  selector: 'app-functionality',
  templateUrl: './functionality.page.html',
  styleUrls: ['./functionality.page.scss'],
})
export class FunctionalityPage implements OnInit {
  m = moment().locale('fa').format('YYYY-MM-DD');
  input = {data: []};
  customYearValues = [1395 , 1396, 1397 , 1398, 1399, 1400];
  fromPickerOptions: any;
  untilPickerOptions: any;
  dataFromModel: FunctinalityModel[] = [];
  data = {
    from_date: '1397-1-1' ,
    to_date: this.m ,
    organization_unit: ''
  };
  filterActive = false;
  unitName: string;
  constructor(private service: AppServiceService , public alertController: AlertController , private toastController: ToastController) {
    this.service.getCreditorAmounDay(this.data).subscribe(res => {
      if (res.status){
        if (res.Result.length !== 0){
          console.log(res.Result.length);
          this.dataFromModel = res.Result ;
        }
        else {
          this.presentToast('اطلاعاتی وجود ندارد');
          this.dataFromModel = res.Result ;
        }
      }
      else {
        this.presentToast('خطای ارتباط با سرور');
      }
    })
    this.untilPickerOptions = {
      buttons: [{
        text: 'ذخیره',
        handler: (e) => {
          this.data.to_date = e.year.value + '-' + e.month.value + '-' + e.day.value ;
        }
      }, {
        text: 'لغو',
        handler: () => {
          this.fromPickerOptions.dismiss();
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
          // console.log(this.data);
        }
      }, {
        text: 'لغو',
        handler: () => {
          return false;
        }
      }]
    };
  }

  ngOnInit() {
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
            // console.log(this.data);
            this.unitName = e.Name;
            this.data.organization_unit = e.ID ;
          }
        }
      ]
    });

    await alert.present();

  }
  filterAction() {
    this.service.getCreditorAmountLimit(this.data).subscribe(res => {
      if (res.status){

        if (res.Result.length !== 0){
          console.log(res.Result.length);
          this.dataFromModel = res.Result ;
        }
        else {
          this.presentToast('اطلاعاتی وجود ندارد');
        }
      }
      else {
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
