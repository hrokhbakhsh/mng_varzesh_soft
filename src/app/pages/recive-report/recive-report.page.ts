import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../../services/app-service.service";

@Component({
  selector: 'app-recive-report',
  templateUrl: './recive-report.page.html',
  styleUrls: ['./recive-report.page.scss'],
})
export class ReciveReportPage implements OnInit {
    allReceive = 21000000;
    input={data:[]};
  constructor(private service: AppServiceService) {
    this.service.getAllUnite().subscribe(
        res => {
          if (res.status){

            for (let i = 1; i < 21; i++) {
              this.input.data.push({name:"radio"+i,type: 'radio',label:"Radio"+i,value: "value"+i});
            }
            console.log(res.Result);
          }
        }
    );
  }

  ngOnInit() {
  }

    selectPackage() {

    }
}
