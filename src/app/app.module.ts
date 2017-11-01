import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { JenkinsDashboardComponent } from './jenkins-dashboard.component';
import { JenkinsDashboardService } from './jenkins-dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    JenkinsDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatCardModule, 
    MatButtonModule,
  ],
  providers: [JenkinsDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
