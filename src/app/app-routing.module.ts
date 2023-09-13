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
  },
  { path: 'about', 
    pathMatch: 'full',
    component: AboutComponent
  }, 
  { path: 'projects', 
    pathMatch: 'full',
    component: ProjectsComponent
  }, 
  { path: 'links', 
    pathMatch: 'full',
    component: LinkComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
