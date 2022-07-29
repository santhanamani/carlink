import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  map;
  @ViewChild('mapElement', { static: true }) mapElement: ElementRef;

  dateTime;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: 12.990876, lng: 80.243363},
          zoom: 17,
          disableDefaultUI: true
        });
  }

  ngOnInit() {
    setTimeout(() => {
      this.dateTime = new Date().toISOString();
    });
  }

  
}
