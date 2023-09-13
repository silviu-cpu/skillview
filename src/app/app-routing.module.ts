import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LinkComponent } from './link/link.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: 'Skillview'
    }
  },
  { path: 'about', 
    pathMatch: 'full',
    component: AboutComponent,
    data: {
      title: 'About | Skillview'
    }
  }, 
  { path: 'projects', 
    pathMatch: 'full',
    component: ProjectsComponent,
    data: {
      title: 'Projects | Skillview'
    }
  }, 
  { path: 'links', 
    pathMatch: 'full',
    component: LinkComponent,
    data: {
      title: 'Connect | Skillview'
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
