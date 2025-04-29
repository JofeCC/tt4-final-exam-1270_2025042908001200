
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from '../models/jobapplication';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    if (window.location.hostname === 'localhost') {
        this.apiUrl = 'http://localhost:5107/job-applications';
      } else {
        this.apiUrl = '/backend/job-applications';
      }
   }

  // Get all job applications
  getAllJobApplications(): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(this.apiUrl);
  }

  // Get job application by ID
  getJobApplicationById(id: number): Observable<JobApplication> {
    return this.http.get<JobApplication>(`${this.apiUrl}/${id}`);
  }

  // Create new job application
  createJobApplication(jobApplication: any): Observable<JobApplication> {
    return this.http.post<JobApplication>(this.apiUrl, jobApplication);
  }

  // Update job application
  updateJobApplication(id: number, jobApplication: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, jobApplication);
  }

  // Delete job application
  deleteJobApplication(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Get job applications by status
  getJobApplicationsByStatus(status: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/status/${status}`);
  }
}