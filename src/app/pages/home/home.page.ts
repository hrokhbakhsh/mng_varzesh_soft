import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  presentNumber = 0 ;
  exitNumber = 0 ;
  SumTotalAmount_Receipt = 0 ;
  functionTotalAmount = 0;
  constructor(private service: AppServiceService) { }

  ngOnInit() {
    const res = this.service.getAllReport().subscribe(
        res => {
          if (res.status){
            this.presentNumber = res.Result.PresentMemberCount ;
            this.exitNumber = res.Result.ExitedMemberCount ;
              this.SumTotalAmount_Receipt = res.Result.SumTotalAmount_Receipt ;
              this.functionTotalAmount= res.Result.SumTotalAmount_Creditor ;
          }
        } ,
        err => {
        }
    )
  }


    logout() {
        this.service.logout();
    }
}
