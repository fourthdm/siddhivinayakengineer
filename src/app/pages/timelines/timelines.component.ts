import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent {

  @ViewChildren('card')
  cards!: QueryList<ElementRef>;

  positions = [
    'active',
    'right1',
    'right2',
    'right3',
    'left1',
    'left2'
  ];

  ngAfterViewInit() {
    this.applyClasses();
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {

    event.preventDefault();

    if (event.deltaY > 0) {
      this.next();
    } else {
      this.prev();
    }
  }

  next() {

    const first = this.positions.shift();

    if (first) {
      this.positions.push(first);
    }

    this.applyClasses();
  }

  prev() {

    const last = this.positions.pop();

    if (last) {
      this.positions.unshift(last);
    }

    this.applyClasses();
  }

  applyClasses() {

    const cardsArray = this.cards.toArray();

    cardsArray.forEach((card, index) => {

      card.nativeElement.className =
        'timeline-card ' + this.positions[index];
    });
  }

  // activeIndex = 2;

  // cards = [
  //   { year: '1996-2000' },
  //   { year: '2001-2005' },
  //   { year: '2006-2011' },
  //   { year: '2012-2015' },
  //   { year: '2016-2018' },
  //   { year: '2019-2022' }
  // ];

  // @HostListener('wheel', ['$event'])
  // onWheel(event: WheelEvent) {

  //   if (event.deltaY > 0) {
  //     this.next();
  //   } else {
  //     this.prev();
  //   }
  // }

  // next() {

  //   const first = this.cards.shift();

  //   if (first) {
  //     this.cards.push(first);
  //   }
  // }

  // prev() {

  //   const last = this.cards.pop();

  //   if (last) {
  //     this.cards.unshift(last);
  //   }
  // }

  // getPosition(index: number) {

  //   const positions = [
  //     'left2',
  //     'left1',
  //     'active',
  //     'right1',
  //     'right2',
  //     'hidden'
  //   ];

  //   return positions[index] || 'hidden';
  // }


  // activeIndex = 2;

  // cards = [
  //   { 
  //     year: '2023',
  //     Description:'Commenced the production of Packaged Explosives Bulk Explosives and Detonators'
  //    },
  //   { 
  //     year: '2024-2025',
  //     Description:'lorem'
  //    },
  //   { year: '1996-2000',
  //     Description:'lorem'
  //    },
  //   { year: '2001-2005',
  //     Description:'lorem'
  //    },
  //   { year: '2006-2011',
  //     Description:'lorem'
  //    }
  // ];

  // next() {
  //   if (this.activeIndex < this.cards.length - 1) {
  //     this.activeIndex++;
  //   }
  // }

  // prev() {
  //   if (this.activeIndex > 0) {
  //     this.activeIndex--;
  //   }
  // }

  // getClass(index: number) {

  //   const diff = index - this.activeIndex;

  //   if (diff === 0) return 'active';
  //   if (diff === -1) return 'left1';
  //   if (diff === -2) return 'left2';
  //   if (diff === 1) return 'right1';
  //   if (diff === 2) return 'right2';

  //   return 'hidden';
  // }
  // @HostListener('wheel', ['$event'])
  // onWheel(event: WheelEvent) {

  //   if (event.deltaY > 0) {
  //     this.next();
  //   } else {
  //     this.prev();
  //   }
  // }


}