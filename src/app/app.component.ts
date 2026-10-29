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

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}

// ngOnInit() {
//   this.router.events.pipe(
//     filter(event => event instanceof NavigationEnd),
//     map(() => {
//       let child = this.activatedRoute.firstChild;
//       while (child?.firstChild) {
//         child = child.firstChild;
//       }
//       return child?.snapshot.data;
//     })
//   ).subscribe(data => {
//     if (data) {
//       // Apply the Title to the Browser Tab
//       if (data['title']) {
//         this.titleService.setTitle(data['title']);
//       }
//       // Apply Meta Description
//       if (data['description']) {
//         this.metaService.updateTag({ name: 'description', content: data['description'] });
//       }
//     }
//   });
// }
