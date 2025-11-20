import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsListComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
