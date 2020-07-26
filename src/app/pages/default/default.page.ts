import {Component, OnInit} from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-default',
    templateUrl: './default.page.html',
    styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {

    public selectedIndex = 0;
    public appPages = [
        {
            title: 'گزارشات',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'وضعیت پذیرش',
            url: '/home/reciption-situation',
            icon: 'receipt'
        },
        {
            title: 'گزارش دریافتی',
            url: '/home/recive-report',
            icon: 'card'
        },
        {
            title: 'گزارش عملکرد',
            url: '/home/functionality',
            icon: 'bar-chart'
        }
    ];
    managerName = localStorage.getItem('name');

    constructor(private service: AppServiceService,
                private router: Router) {
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }

    logout() {
        this.service.logout();
        this.router.navigate(['/login']);
    }
}
