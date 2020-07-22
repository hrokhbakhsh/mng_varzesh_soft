import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';

@Component({
  selector: 'app-reciption-situation',
  templateUrl: './reciption-situation.page.html',
  styleUrls: ['./reciption-situation.page.scss'],
})
export class ReciptionSituationPage implements OnInit {

  constructor(private service: AppServiceService) { }

  presentNumber = 0 ;
  exitNumber = 0 ;
  all = 0 ;
  ngOnInit() {
    const res = this.service.getAllReport().subscribe(
        res => {
          if (res.status){
            this.presentNumber = res.Result.PresentMemberCount ;
            this.exitNumber = res.Result.ExitedMemberCount ;
            this.all = Number(this.exitNumber) + Number(this.presentNumber) ;

          }
        } ,
        err => {
        }
    )
  }


}
