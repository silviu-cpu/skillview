import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { MenuItem } from 'primeng/api';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"; 

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private themeService: ThemeService) {}

    items: MenuItem[] | undefined;
    logo = 'dark-logo';
    particlesOptions = {
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: ClickMode.push,
                },
                onHover: {
                    enable: true,
                    mode: HoverMode.repulse,
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#311432",
            },
            links: {
                color: "#7852A9",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 500,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    ngOnInit(): void {
        this.changeTheme('saga-blue')
        this.items = [
            {
                label: 'Home',
                routerLink: "home"
            },
            {
                label: 'About',
                routerLink: "about"
            },
            {
                label: 'Projects',
                routerLink: "projects"
            }
        ];
    }

    particlesLoaded(container: Container): void {
        
    }

    async particlesInit(engine: Engine): Promise<void> {
        console.log(engine);

        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
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