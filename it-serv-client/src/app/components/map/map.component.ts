/// <reference types="@types/google.maps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  constructor() {}

  center: google.maps.LatLngLiteral = {
    lat: -16.9888932,
    lng: 145.7383,
  };
  mapOptions: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    scrollwheel: false,
  };
  zoom = 13;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: -16.9888932,
      lng: 145.7383,
    },
  ];
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }

  ngOnInit(): void {}
}
