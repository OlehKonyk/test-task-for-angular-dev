import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { HasAccessTokenGuard } from '@app/guards/has-access-token.guard';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListComponent,
    // canActivate: [HasAccessTokenGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
