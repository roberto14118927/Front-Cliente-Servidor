import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { WebsocketService } from '../../../../Services/websocket.service';
// import {  } from 'ty';
// /// <reference types="@types/googlemaps" />
declare const google: any;
var map;


export class Message {
  constructor(
    public sender: string,
    public content: string,
    public isBroadcast = false,
  ) { }
}



@Component({
  selector: 'app-real-unidades',
  templateUrl: './real-unidades.component.html',
  styleUrls: ['./real-unidades.component.css']
})
export class RealUnidadesComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  mapMarker: google.maps.Marker;

  constructor(private wsService: WebsocketService) {

  }
  ngOnInit() {
    var myLatLng = { lat: 16.6149821, lng: -93.0909930 };
    var mapProp = {
      center: new google.maps.LatLng(myLatLng),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var marker = {
      position: myLatLng,
      map: mapProp,
      title: 'Hello World!'
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.mapMarker = new google.maps.Marker(marker);
    this.mapMarker.setMap(this.map);
    // marker.setMap(this.map);

  }


  // ngOnInit() {
  //   // localStorage.removeItem('user');
  // }

}
