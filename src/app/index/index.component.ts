import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  showDetails(){
    this.router.navigate(["detail"],{relativeTo:this.route})
  } 
  
  showOverview(){
    this.router.navigate(["overview"],{relativeTo:this.route})
  } 
  
  //Route = this.router.url;

}
