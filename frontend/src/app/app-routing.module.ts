import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationComponent } from './job-application/job-application.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'job-applications', component: JobApplicationComponent },
  { path: 'new-job-application', component: CreateComponent },
  { path: '', redirectTo: '/job-applications', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }