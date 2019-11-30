
import { Injectable } from '@angular/core';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

const APP_TITLE = 'Coddez ||';
const SEPARATOR = ' > ';

@Injectable()
export class TitleService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {}

  static ucFirst(strings) {
    if ( !strings ) { return strings; }
    return strings.charAt(0).toUpperCase() + strings.slice(1);
  }

  init() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).pipe(
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }))
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      .pipe(map((data) => {
        if ( data.title ) {
          // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
          return data.title;
        } else {
          // If not, we do a little magic on the url to create an approximation
          return this.router.url.split('/').reduce((acc, frag) => {
            if ( acc && frag ) { acc += SEPARATOR; }
            return acc + TitleService.ucFirst(frag);
          });
        }
      }))
      .subscribe((pathString) => this.titleService.setTitle(`${APP_TITLE} ${pathString}`));
  }
}
