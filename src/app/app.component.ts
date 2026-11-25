import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { CanonicalService } from './services/canonical.service';
import { DOCUMENT } from '@angular/common';

import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siddhivinayakengineer';

  // scrolltop = document.getElementById('scrolltop');
  // rootelement = document.documentElement;

  // scroll() {
  //   this.rootelement.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   })
  // }

  scroll() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }



  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.rootelement = document.documentElement;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        const title = route.snapshot.title || 'Siddhivinayakengineer';

        const description =
          route.snapshot.data['description'] ||
          'SVESPL is an HVAC & MEP Engineering Company in India delivering industrial and commercial HVAC systems, cleanrooms, chiller plants, VRV/VRF systems and ventilation solutions.';

        this.titleService.setTitle(title);

        this.metaService.updateTag({
          name: 'description',
          content: description
        });

      });
  }

  rootelement!: HTMLElement;



}
