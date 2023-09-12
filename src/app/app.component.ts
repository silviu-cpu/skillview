import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private themeService: ThemeService) {}

    items: MenuItem[] | undefined;

    ngOnInit(): void {
        this.changeTheme('saga-blue')
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                routerLink: "home",
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                routerLink: "about"
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }

    changeTheme(theme: string) {
        this.themeService.switchTheme(theme);
    }

}