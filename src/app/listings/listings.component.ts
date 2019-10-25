import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  events = [];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

}
