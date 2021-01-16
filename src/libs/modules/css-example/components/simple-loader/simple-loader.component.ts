import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-loader',
  templateUrl: './simple-loader.component.html',
  styleUrls: ['./simple-loader.component.scss']
})
export class SimpleLoaderComponent implements OnInit {

  loadingDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
