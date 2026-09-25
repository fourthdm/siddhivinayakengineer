import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

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


  //   @ViewChild('heroVideo')
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
  //    this.startAutoSlide();
  // }

  // ngAfterViewInit(): void {

  //   const video = this.heroVideo.nativeElement;

  //   video.muted = true;

  //   video.play().catch(() => {
  //     console.log('Autoplay blocked by browser');
  //   });

  //   this.startTextAnimation();
  // }

  // startTextAnimation(): void {

  //   this.textInterval = setInterval(() => {

  //     // Start exit animation
  //     this.textAnimating = true;

  //     setTimeout(() => {

  //       this.currentTextIndex =
  //         (this.currentTextIndex + 1) % this.heroTexts.length;

  //       // Allow new text to enter
  //       this.textAnimating = false;

  //     }, 850);

  //   }, 4000);
  // }

  // ngOnDestroy(): void {

  //   if (this.textInterval) {
  //     clearInterval(this.textInterval);
  //   }

  //    clearInterval(this.slideInterval);

  // }


  // // @ViewChildren('counterSection')  counterSections!: QueryList<ElementRef>;
  // // count1: number = 0;
  // // count2: number = 0;
  // // count3: number = 0;
  // // count4: number = 0;

  // // hasStarted = false;

  // // ngAfterViewInit(): void {

  // //   setTimeout(() => {

  // //     const observer = new IntersectionObserver(
  // //       (entries) => {

  // //         entries.forEach(entry => {

  // //           if (entry.isIntersecting && !this.hasStarted) {

  // //             this.hasStarted = true;

  // //             this.startCounter(17, 'count1', 50);
  // //             this.startCounter(150, 'count2', 10);
  // //             this.startCounter(500, 'count3', 5);
  // //             this.startCounter(500, 'count4', 5);

  // //             observer.unobserve(entry.target);

  // //           }

  // //         });

  // //       },
  // //       {
  // //         threshold: 0.2
  // //       }
  // //     );

  // //     // SAFE CHECK
  // //     if (this.counterSections) {

  // //       this.counterSections.forEach(section => {

  // //         if (section?.nativeElement) {
  // //           observer.observe(section.nativeElement);
  // //         }

  // //       });

  // //     }

  // //   }, 300);

  // // }

  // // startCounter(
  // //   target: number,
  // //   variable: 'count1' | 'count2' | 'count3' | 'count4',
  // //   speed: number
  // // ) {

  // //   let interval = setInterval(() => {

  // //     if (this[variable] < target) {
  // //       this[variable]++;
  // //     } else {
  // //       clearInterval(interval);
  // //     }

  // //   }, speed);

  // // }
  // currentSlide = 0;
  // previousSlide = -1;

  // private slideInterval: any;

  // slides = [

  //   {
  //     image: '/assets/header/11.png',
  //     // title: 'FIRE FIGHTING SYSTEM',
  //     // description:
  //     //   'Be rest assured with reliable fire protection solutions designed to protect your facility.'
  //   },

  //   {
  //     image: '/assets/header/22.png',
  //     // title: 'TURNKEY HVAC',
  //     // description:
  //     //   'Designing, System Engineering, Supply, Installation, Testing and Commissioning of HVAC Systems.'
  //   },

  //   {
  //     image: '/assets/header/33.png'
  //     // title: 'MODULAR CLEANROOM',
  //     // description:
  //     //   'We can meet all of your cleanroom requirements with advanced engineering solutions.'
  //   },

  //   {
  //     image: '/assets/header/44.png'
  //     // title: 'MEP SOLUTIONS',
  //     // description:
  //     //   'Integrated MEP engineering solutions for industrial and commercial facilities.'
  //   }

  // ];


  // // ngOnInit(): void {

  // //   this.startAutoSlide();

  // // }


  // startAutoSlide(): void {

  //   this.slideInterval = setInterval(() => {

  //     this.nextSlide();

  //   }, 5000);

  // }


  // nextSlide(): void {

  //   this.previousSlide = this.currentSlide;

  //   this.currentSlide =
  //     (this.currentSlide + 1) % this.slides.length;

  // }


  // goToSlide(index: number): void {

  //   if (index === this.currentSlide) {
  //     return;
  //   }

  //   this.previousSlide = this.currentSlide;

  //   this.currentSlide = index;

  //   // Reset timer
  //   clearInterval(this.slideInterval);

  //   this.startAutoSlide();

  // }

  // currentSlide = 0;
  // previousSlide = -1;

  // private slideInterval: any;

  // slides = [

  //   {
  //     image: '/assets/header/11.png'
  //   },

  //   {
  //     image: '/assets/header/22.png'
  //   },

  //   {
  //     image: '/assets/header/33.png'
  //   },

  //   {
  //     image: '/assets/header/44.png'
  //   },

  //   {
  //     image: '/assets/header/55.png'
  //   },
  //   {
  //     image: '/assets/header/66.png'
  //   }

  // ];


  // ngOnInit(): void {
  //   this.startAutoSlide();
  // }

  // startAutoSlide(): void {
  //   this.slideInterval = setInterval(() => {
  //     this.nextSlide();
  //   }, 5000);
  // }

  // nextSlide(): void {
  //   this.previousSlide = this.currentSlide;
  //   this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  // }


  // goToSlide(index: number): void {
  //   if (index === this.currentSlide) {
  //     return;
  //   }
  //   this.previousSlide = this.currentSlide;
  //   this.currentSlide = index;
  //   // Reset timer
  //   clearInterval(this.slideInterval);
  //   this.startAutoSlide();
  // }


  // ngOnDestroy(): void {
  //   clearInterval(this.slideInterval);
  // }


  slides = [
  {
    image: '/assets/header/11.png',
    animation: 'slide'
  },
  {
    image: '/assets/header/22.png',
    animation: 'slide'
  },
  {
    image: '/assets/header/33.png',
    animation: 'zoom'
  },
  {
    image: '/assets/header/44.png',
    animation: 'diagonal'
  },
  {
    image: '/assets/header/55.png',
    animation: 'slide'
  },
  {
    image: '/assets/header/66.png',
    animation: 'scale'
  }
];

rows = 1;
cols = 5;

cells: any[] = [];

activeSlide = 0;
isAnimating = false;

private sliderInterval: any;


ngOnInit(): void {

  this.createCells();

  this.sliderInterval = setInterval(() => {
    this.nextSlide();
  }, 5000);
}


createCells(): void {

  this.cells = [];

  for (let col = 0; col < this.cols; col++) {

    this.cells.push({
      row: 0,
      col: col
    });

  }
}


get nextSlideIndex(): number {

  return (this.activeSlide + 1) % this.slides.length;

}


nextSlide(): void {

  this.isAnimating = true;

  setTimeout(() => {

    this.activeSlide = this.nextSlideIndex;

    this.isAnimating = false;

  }, 1100);

}


goToSlide(index: number): void {

  if (index === this.activeSlide) {
    return;
  }

  clearInterval(this.sliderInterval);

  this.isAnimating = true;

  setTimeout(() => {

    this.activeSlide = index;
    this.isAnimating = false;

  }, 1100);

  this.sliderInterval = setInterval(() => {
    this.nextSlide();
  }, 5000);
}


ngOnDestroy(): void {

  clearInterval(this.sliderInterval);

}


}
