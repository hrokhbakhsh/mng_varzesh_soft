import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import {AlertController} from '@ionic/angular';
import {AllUnit} from '../../services/all-unit';

@Component({
  selector: 'app-recive-report',
  templateUrl: './recive-report.page.html',
  styleUrls: ['./recive-report.page.scss'],
})
export class ReciveReportPage implements OnInit {
    allReceive = 21000000;
    filterAll = false ;
    input = {data: []};
  constructor(private service: AppServiceService , public alertController: AlertController) {
      this.service.getAllUnite().subscribe(
          res => {
              if (res.status){
                  for (const entry of res.Result) {
                      // console.log(entry.Name);
                      this.input.data.push({name: entry.ID, type: 'radio', label: entry.Name, value:  entry.ID});
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
                        console.log(e);
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
}
