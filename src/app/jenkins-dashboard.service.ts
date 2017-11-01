import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Job } from './jenkins-job';
import { JOBS } from './jenkins-mock-jobs';

@Injectable()
export class JenkinsDashboardService {
    constructor(private http: Http) { }

    private jenkinsURL = 'http://localhost:8088/api/json';  // URL to web API
    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body.data || {};
    }
    private handleError(error: any) {
        console.log("err: ", error);
        // In a real world app, we might use a remote logging infrastructure.
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead
            return Observable.throw(errMsg);
    }

    getJobs(): Observable<Job[]> {
        let username: string = '';
        let password: string = '';
        let headers: Headers = new Headers();
        let authCode: string = `Basic ${btoa(`${username}:${password}`)}`;
        headers.append('Authorization', authCode);
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.get(this.jenkinsURL, { headers })
            .map(this.extractData)
            .catch(this.handleError);
    }
}
