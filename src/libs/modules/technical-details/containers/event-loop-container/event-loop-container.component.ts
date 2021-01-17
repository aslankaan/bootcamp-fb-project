import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-event-loop-container',
  templateUrl: './event-loop-container.component.html',
  styleUrls: ['./event-loop-container.component.scss']
})
export class EventLoopContainerComponent {

  displayString: string;


  constructor() { }
}
