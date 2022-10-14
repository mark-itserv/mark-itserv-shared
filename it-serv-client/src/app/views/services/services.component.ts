import { Component, OnInit } from '@angular/core';
import { Service, services } from './services-list';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services = services;

  constructor() {}

  ngOnInit(): void {}
}
