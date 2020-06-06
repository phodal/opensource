import { Component, OnInit } from '@angular/core';
import * as mdData from 'raw-loader!../../../assets/docs/practise.md';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss'],
})
export class PractiseComponent implements OnInit {
  data = mdData.default;
  constructor() {}

  ngOnInit(): void {}
}
