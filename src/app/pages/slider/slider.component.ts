import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {

  // @ViewChild('heroVideo')
  // heroVideo!: ElementRef<HTMLVideoElement>;

  // heroTexts: string[] = [
  //   'Air Cooled & Water-Cooled Chiller Plants',
  //   'VRV / VRF Systems',
  //   'Turnkey Clean Room Solution',
  //   'Evaporative Cooling',
  //   'Forced Ventilation',
  //   'Comfort Air Conditioning',
  //   'Precision Air Conditioning'
  // ];

  // currentTextIndex = 0;

  // textAnimating = false;

  // private textInterval: any;

  // ngOnInit(): void {
  // }

  // ngAfterViewInit(): void {

  //   /*
  //    * Make sure video continues playing.
  //    * This does NOT restart the video when text changes.
  //    */
  //   const video = this.heroVideo.nativeElement;

  //   video.muted = true;

  //   video.play().catch(() => {
  //     console.log('Video autoplay waiting for browser permission');
  //   });

  //   this.startTextAnimation();
  // }

  // startTextAnimation(): void {

  //   this.textInterval = setInterval(() => {

  //     // Start exit animation
  //     this.textAnimating = true;

  //     setTimeout(() => {

  //       // Change text only after exit animation
  //       this.currentTextIndex =
  //         (this.currentTextIndex + 1) % this.heroTexts.length;

  //       // Start entrance animation
  //       this.textAnimating = false;

  //     }, 650);

  //   }, 3500);
  // }

  // ngOnDestroy(): void {

  //   if (this.textInterval) {
  //     clearInterval(this.textInterval);
  //   }

  // }


    @ViewChild('heroVideo')
  heroVideo!: ElementRef<HTMLVideoElement>;

  heroTexts: string[] = [
    'Air Cooled & Water-Cooled Chiller Plants',
    'VRV / VRF Systems',
    'Turnkey Clean Room Solution',
    'Evaporative Cooling',
    'Forced Ventilation',
    'Comfort Air Conditioning',
    'Precision Air Conditioning'
  ];

  currentTextIndex = 0;

  textAnimating = false;

  private textInterval: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const video = this.heroVideo.nativeElement;

    video.muted = true;

    video.play().catch(() => {
      console.log('Autoplay blocked by browser');
    });

    this.startTextAnimation();
  }

  startTextAnimation(): void {

    this.textInterval = setInterval(() => {

      // Start exit animation
      this.textAnimating = true;

      setTimeout(() => {

        this.currentTextIndex =
          (this.currentTextIndex + 1) % this.heroTexts.length;

        // Allow new text to enter
        this.textAnimating = false;

      }, 850);

    }, 4000);
  }

  ngOnDestroy(): void {

    if (this.textInterval) {
      clearInterval(this.textInterval);
    }

  }


  // @ViewChildren('counterSection')  counterSections!: QueryList<ElementRef>;
  // count1: number = 0;
  // count2: number = 0;
  // count3: number = 0;
  // count4: number = 0;

  // hasStarted = false;

  // ngAfterViewInit(): void {

  //   setTimeout(() => {

  //     const observer = new IntersectionObserver(
  //       (entries) => {

  //         entries.forEach(entry => {

  //           if (entry.isIntersecting && !this.hasStarted) {

  //             this.hasStarted = true;

  //             this.startCounter(17, 'count1', 50);
  //             this.startCounter(150, 'count2', 10);
  //             this.startCounter(500, 'count3', 5);
  //             this.startCounter(500, 'count4', 5);

  //             observer.unobserve(entry.target);

  //           }

  //         });

  //       },
  //       {
  //         threshold: 0.2
  //       }
  //     );

  //     // SAFE CHECK
  //     if (this.counterSections) {

  //       this.counterSections.forEach(section => {

  //         if (section?.nativeElement) {
  //           observer.observe(section.nativeElement);
  //         }

  //       });

  //     }

  //   }, 300);

  // }

  // startCounter(
  //   target: number,
  //   variable: 'count1' | 'count2' | 'count3' | 'count4',
  //   speed: number
  // ) {

  //   let interval = setInterval(() => {

  //     if (this[variable] < target) {
  //       this[variable]++;
  //     } else {
  //       clearInterval(interval);
  //     }

  //   }, speed);

  // }

}
