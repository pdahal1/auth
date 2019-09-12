import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  specialEvent: []; 
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getSpecial().subscribe(data =>{
      this.specialEvent = data; 
    })

  }

}
