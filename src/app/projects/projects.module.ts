import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { UsernamePipe } from '@app/pipes/username.pipe';

@NgModule({
  declarations: [ProjectsListComponent, UsernamePipe],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
