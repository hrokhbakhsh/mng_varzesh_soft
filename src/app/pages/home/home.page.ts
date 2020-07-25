import {Component, OnInit} from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import {Router} from '@angular/router';
import * as moment from 'jalali-moment';


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    m = moment().locale('fa').format('YYYY-MM-DD');
    presentNumber = 0;
    exitNumber = 0;
    SumTotalAmount_Receipt = 0;
    functionTotalAmount = 0;
    managerName = localStorage.getItem('name');

    constructor(private service: AppServiceService, private router: Router) {
    }

    ngOnInit() {
        const res = this.service.getAllReport().subscribe(
            res => {
                if (res.status) {
                    this.presentNumber = res.Result.PresentMemberCount;
                    this.exitNumber = res.Result.ExitedMemberCount;
                    this.SumTotalAmount_Receipt = res.Result.SumTotalAmount_Receipt;
                    this.functionTotalAmount = res.Result.SumTotalAmount_Creditor;

                }
            },
            err => {
            }
        );
    }


    logout() {
        this.service.logout();
    }

    reciveReport() {
        this.router.navigate(['/recive-report']);
    }

    reciptionSituation() {
        this.router.navigate(['/reciption-situation']);
    }

    functionalitiReport() {
        this.router.navigate(['/functionality']);
    }
}
