import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sensores-view',
  templateUrl: './sensores-view.component.html',
  styleUrls: ['./sensores-view.component.scss']
})
export class SensoresViewComponent implements OnInit {

  @Input() Sensor: any;
  constructor() { }

  ngOnInit(): void {
  }

}
