import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../common/data.service';
import { EXTERNAL_URL } from '../helpers/external.url';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private dataSvc:DataService,private router:Router) {
    this.projects=[];
   }

  ngOnInit(): void {
    this.getProjects();
  }
  projects:any
  getProjects(){
    this.dataSvc.authGet(EXTERNAL_URL.ALLPROJECTS).subscribe(
      (result:any) => {
          this.projects = result.data;
      }, err => {
        console.log(err);
        //this.hasError= true;
      });
  }
  getProjectDetails(p:any){
    this.router.navigateByUrl("/dashboard/projects/"+p.ProjectId);
  }

}
