import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobApplication } from '../models/jobapplication';
import { JobApplicationService } from '../services/jobapplication.service';

@Component({
  selector: 'app-job-application',
  standalone: false,
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.scss'
})
export class JobApplicationComponent implements OnInit {
  jobApplications: JobApplication[] = [];

  constructor(
    private jobApplicationService: JobApplicationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadJobApplications();
  }

  loadJobApplications(): void {
    this.jobApplicationService.getAllJobApplications().subscribe({
      next: (data) => {
        this.jobApplications = data;
      },
      error: (error) => {
        console.error('Error loading job applications:', error);
      }
    });
  }

  deleteJobApplication(id: number): void {
    if (confirm('Are you sure you want to delete this application?')) {
      this.jobApplicationService.deleteJobApplication(id).subscribe({
        next: () => {
          this.loadJobApplications(); // Refresh the list
        },
        error: (error) => {
          console.error('Error deleting job application:', error);
        }
      });
    }
  }

  viewDetails(id: number): void {
    this.router.navigate(['/job-application-details', id]);
  }

  editApplication(id: number): void {
    this.router.navigate(['/edit-job-application', id]);
  }

  createNewApplication(): void {
    this.router.navigate(['/new-job-application']);
  }
}