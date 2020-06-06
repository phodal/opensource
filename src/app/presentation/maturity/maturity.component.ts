import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDrawerContent } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { DocRoute } from '@ledge-framework/view/lib/ledge-multiple-docs/doc-route.model';

export const lists: DocRoute[] = [
  { displayName: '布道师能力模型', source: 'evangelist' },
  { displayName: '开源项目成熟度', source: 'project' },
];

@Component({
  selector: 'app-maturity',
  templateUrl: './maturity.component.html',
  styleUrls: ['./maturity.component.scss'],
})
export class MaturityComponent implements OnInit {
  @ViewChild('drawerContent', { static: false })
  drawerContent: MatDrawerContent;

  currentSource: string;
  src: string;
  content: string;

  items: DocRoute[] = lists;
  currentUrl = '/maturity';
  urlPrefix = `maturities`;

  constructor(private title: Title, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((p) => {
      const param = p.get('name');
      const currentItem = this.items.find((item) => item.source === param);
      this.title.setTitle(
        `开源 ${currentItem.displayName} 检查清单 - 开源知识平台`
      );
      this.currentSource = param;
    });
  }
}
