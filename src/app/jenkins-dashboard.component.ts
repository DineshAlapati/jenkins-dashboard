import { Component, OnInit } from '@angular/core';

import { Job } from './jenkins-job';
import {JenkinsDashboardService} from './jenkins-dashboard.service';
import { JOBS } from './jenkins-mock-jobs';

@Component({
  moduleId: module.id,
  selector: 'jenkins-dashboard',
  templateUrl: 'jenkins-dashboard.component.html',
  styleUrls: ['jenkins-dashboard.component.css'],
  providers:[JenkinsDashboardService]
})
export class JenkinsDashboardComponent implements OnInit {
  title = 'Jenkins Dashboard';
  jobs: Job[];
  errorMessage: string;
    
  constructor(private jenkinsService: JenkinsDashboardService) { }
  
  getJobs() {
    this.jenkinsService.getJobs()
                        .subscribe(
                          jobs => {this.jobs = jobs},
                          error => this.errorMessage = <any>error);
  }
  
  ngOnInit() {
    // this.getJobs();
    this.jobs = JOBS;
  }
    
}