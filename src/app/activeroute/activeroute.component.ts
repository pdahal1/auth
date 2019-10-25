import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';




@Component({
  selector: 'app-activeroute',
  templateUrl: './activeroute.component.html',
  styleUrls: ['./activeroute.component.css']
})
export class ActiverouteComponent implements OnInit {
  
  department = [
    {"id": 1, "name":"Angular"},
    {"id": 2, "name":"Node"},
    {"id": 3, "name":"MongoDB"},
    {"id": 4, "name":"Ruby"},
    {"id": 5, "name":"BootStrap"}
  ]

  constructor(private activatedRoute: ActivatedRoute, private eventServices:EventService, private router: Router ) { }

  onSelect(department){
    this.router.navigate(['/activedetail', department.id
  ])
  }

  ngOnInit() {
    
  }

}
