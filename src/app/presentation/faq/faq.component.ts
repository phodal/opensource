import { Component, OnInit } from '@angular/core';
import * as mdData from 'raw-loader!../../../assets/docs/faq.md';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  data = mdData.default;

  constructor(title: Title) {
    title.setTitle('开源常见问题 - 开源知识平台');
  }

  ngOnInit(): void {}
}
