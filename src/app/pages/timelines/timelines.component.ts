import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Swiper from 'swiper';


gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent {

//   @ViewChild('timelineSwiper') timelineSwiper!: ElementRef;

// private wheelLocked = false;

// ngAfterViewInit(): void {

//   const swiperEl = this.timelineSwiper.nativeElement;

//   swiperEl.addEventListener(
//     'wheel',
//     (event: WheelEvent) => {

//       // Ignore horizontal wheel
//       if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
//         return;
//       }

//       // Ignore if animation is running
//       if (this.wheelLocked) {
//         event.preventDefault();
//         return;
//       }

//       const swiper = swiperEl.swiper;

//       if (!swiper) {
//         return;
//       }

//       this.wheelLocked = true;

//       event.preventDefault();

//       if (event.deltaY > 0) {
//         swiper.slideNext();
//       } else {
//         swiper.slidePrev();
//       }

//       setTimeout(() => {
//         this.wheelLocked = false;
//       }, 750);

//     },
//     { passive: false }
//   );
// }



  @ViewChildren('timelineSwiper')
  timelineSwipers!: QueryList<ElementRef>;

  private wheelLocked = false;
  private wheelHandlerMap = new Map<HTMLElement, EventListener>();

  ngAfterViewInit(): void {

    this.initializeTimeline();

  }

  initializeTimeline(): void {

    if (!this.timelineSwipers || this.timelineSwipers.length === 0) {
      return;
    }

    this.timelineSwipers.forEach((swiperRef: ElementRef) => {

      const swiperEl = swiperRef.nativeElement as HTMLElement;

      if (!swiperEl) {
        return;
      }

      const wheelHandler = ((event: WheelEvent) => {

        // Ignore horizontal wheel
        if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
          return;
        }

        const swiper = (swiperEl as any).swiper;

        if (!swiper || this.wheelLocked) {
          event.preventDefault();
          return;
        }

        event.preventDefault();

        this.wheelLocked = true;

        if (event.deltaY > 0) {
          swiper.slideNext();
        } else {
          swiper.slidePrev();
        }

        setTimeout(() => {
          this.wheelLocked = false;
        }, 750);

      }) as EventListener;

      swiperEl.addEventListener('wheel', wheelHandler, {
        passive: false
      });

      this.wheelHandlerMap.set(swiperEl, wheelHandler);

    });

  }

  ngOnDestroy(): void {

    this.wheelHandlerMap.forEach((handler, element) => {
      element.removeEventListener('wheel', handler);
    });

    this.wheelHandlerMap.clear();

  }

}