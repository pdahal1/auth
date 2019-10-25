import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activedetail',
  templateUrl: './activedetail.component.html',
  styleUrls: ['./activedetail.component.css']
})
export class ActivedetailComponent implements OnInit {
 public activeDetail; 
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.activeDetail =id; 
  }

}
