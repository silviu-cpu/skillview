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
    logo = 'dark-logo';

    ngOnInit(): void {
        this.changeTheme('saga-blue')
        this.items = [
            {
                label: 'Home',
                routerLink: "home",
            },
            {
                label: 'About',
                routerLink: "about"
            },
            {
                label: 'Projects',
            }
        ];
    }

    getThemeImageSrc(): string {
        return `../assets/images/themes/${this.logo}.svg`;
    }
    
    changeTheme(theme: string) {
        if(theme !== 'saga-blue'){
            this.logo = 'light-logo';
        }
        if(theme === 'saga-blue') {
            this.logo = 'dark-logo';
        }
        this.themeService.switchTheme(theme);
    }

}