import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import * as mdData from 'raw-loader!../../../assets/docs/home.md';
import { ShepherdService } from 'angular-shepherd';
import { StorageMap } from '@ngx-pwa/local-storage';
import { isScullyRunning } from '@scullyio/ng-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  data = mdData.default;

  constructor(
    title: Title,
    private router: Router,
    private http: HttpClient,
    private storage: StorageMap,
    private shepherdService: ShepherdService,
    public translate: TranslateService
  ) {
    title.setTitle('开源软件 - 开源知识平台');
  }

  category: string;

  homemd = mdData.default;
  allContributors$: Observable<any>;
  inViewport = false;
  steps = [];

  setCurrentAtomCategory(category: string) {
    this.category = category;
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit(): void {
    this.allContributors$ = this.http
      .get('https://api.github.com/repos/phodal/ledge/contributors')
      .pipe();

    this.shepherdService.defaultStepOptions = {
      cancelIcon: {
        enabled: true,
      },
    };
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(this.steps);

    if (!isScullyRunning()) {
      const doneKey = 'intro.hadDone';
      this.storage.get(doneKey).subscribe((value: boolean) => {
        if (!value) {
          this.shepherdService.start();
          this.storage.set(doneKey, true).subscribe(() => {});
        }
      });
    }
  }

  show(event: Partial<IntersectionObserverEntry>) {
    if (event.intersectionRatio >= 0.5) {
      this.inViewport = true;
    }
  }
}
