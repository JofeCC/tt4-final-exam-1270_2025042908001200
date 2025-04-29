import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobApplicationService } from '../services/jobapplication.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: false
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jobApplicationService: JobApplicationService,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      position: ['', Validators.required],
      company: ['', Validators.required],
      status: ['Pending'],
      applicationDate: [new Date().toISOString().split('T')[0]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      this.jobApplicationService.createJobApplication(this.createForm.value)
        .subscribe({
          next: () => {
            this.router.navigate(['/job-applications']);
          },
          error: (error) => {
            console.error('Error creating job application:', error);
          }
        });
    }
  }

  onCancel(): void {
    this.router.navigate(['/job-applications']);
  }
}