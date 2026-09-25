import { Component } from '@angular/core';
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent {

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


// slides = [
//   { image: '/assets/header/11.png' },
//   { image: '/assets/header/22.png' },
//   { image: '/assets/header/33.png' },
//   { image: '/assets/header/44.png' },
//   { image: '/assets/header/55.png' },
//   { image: '/assets/header/66.png' }
// ];

// slides = [

//   {
//     image: '/assets/header/11.png',
//     animation: 'split'
//   },

//   {
//     image: '/assets/header/22.png',
//     animation: 'slide'
//   },

//   {
//     image: '/assets/header/33.png',
//     animation: 'zoom'
//   },

//   {
//     image: '/assets/header/44.png',
//     animation: 'diagonal'
//   },

//   {
//     image: '/assets/header/55.png',
//     animation: 'wipe'
//   },

//   {
//     image: '/assets/header/66.png',
//     animation: 'scale'
//   }

// ];

// rows = 1;
// cols = 5;

// cells: any[] = [];

// activeSlide = 0;
// isAnimating = false;

// private sliderInterval: any;


// ngOnInit(): void {

//   this.createCells();

//   setTimeout(() => {
//     this.playSplitAnimation();
//   }, 300);

//   this.sliderInterval = setInterval(() => {
//     this.nextSlide();
//   }, 5000);
// }


// createCells(): void {

//   this.cells = [];

//   for (let col = 0; col < this.cols; col++) {

//     this.cells.push({
//       row: 0,
//       col: col
//     });

//   }
// }


// nextSlide(): void {

//   this.activeSlide =
//     (this.activeSlide + 1) % this.slides.length;

//   this.playSplitAnimation();
// }
// get nextSlideIndex(): number {

//   return (this.activeSlide + 1)
//     % this.slides.length;

// }

// playSplitAnimation(): void {

//   this.isAnimating = false;

//   setTimeout(() => {

//     this.isAnimating = true;

//   }, 50);

//   setTimeout(() => {

//     this.isAnimating = false;

//   }, 1000);
// }


// goToSlide(index: number): void {

//   if (index === this.activeSlide) {
//     return;
//   }

//   this.activeSlide = index;

//   this.playSplitAnimation();

//   clearInterval(this.sliderInterval);

//   this.sliderInterval = setInterval(() => {

//     this.nextSlide();

//   }, 5000);
// }


// ngOnDestroy(): void {

//   clearInterval(this.sliderInterval);

// }



// slides = [
//   {
//     image: '/assets/header/11.png',
//     animation: 'slide'
//   },
//   {
//     image: '/assets/header/22.png',
//     animation: 'slide'
//   },
//   {
//     image: '/assets/header/33.png',
//     animation: 'zoom'
//   },
//   {
//     image: '/assets/header/44.png',
//     animation: 'diagonal'
//   },
//   {
//     image: '/assets/header/55.png',
//     animation: 'slide'
//   },
//   {
//     image: '/assets/header/66.png',
//     animation: 'scale'
//   }
// ];

// rows = 1;
// cols = 5;

// cells: any[] = [];

// activeSlide = 0;
// isAnimating = false;

// private sliderInterval: any;


// ngOnInit(): void {

//   this.createCells();

//   this.sliderInterval = setInterval(() => {
//     this.nextSlide();
//   }, 5000);
// }


// createCells(): void {

//   this.cells = [];

//   for (let col = 0; col < this.cols; col++) {

//     this.cells.push({
//       row: 0,
//       col: col
//     });

//   }
// }


// get nextSlideIndex(): number {

//   return (this.activeSlide + 1) % this.slides.length;

// }


// nextSlide(): void {

//   this.isAnimating = true;

//   setTimeout(() => {

//     this.activeSlide = this.nextSlideIndex;

//     this.isAnimating = false;

//   }, 1100);

// }


// goToSlide(index: number): void {

//   if (index === this.activeSlide) {
//     return;
//   }

//   clearInterval(this.sliderInterval);

//   this.isAnimating = true;

//   setTimeout(() => {

//     this.activeSlide = index;
//     this.isAnimating = false;

//   }, 1100);

//   this.sliderInterval = setInterval(() => {
//     this.nextSlide();
//   }, 5000);
// }


// ngOnDestroy(): void {

//   clearInterval(this.sliderInterval);

// }

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


  // /* 1 ROW × 5 COLUMNS */

  // rows = 1;
  // cols = 5;
  // cells: any[] = [];
  // activeSlide = 0;
  // isAnimating = false;
  // private sliderInterval: any;


  // ngOnInit(): void {

  //   this.createCells();

  //   /*
  //     Play animation when first image loads
  //   */

  //   setTimeout(() => {

  //     this.playSplitAnimation();

  //   }, 300);


  //   /*
  //     Start automatic carousel
  //   */

  //   this.sliderInterval =
  //     setInterval(() => {

  //       this.nextSlide();

  //     }, 5000);

  // }


  // /* =====================================
  //    CREATE 5 CELLS
  // ===================================== */

  // createCells(): void {
  //   this.cells = [];
  //   for (
  //     let col = 0;
  //     col < this.cols;
  //     col++
  //   ) {
  //     this.cells.push({
  //       row: 0,
  //       col: col
  //     });
  //   }
  // }

  // nextSlide(): void {
  //   this.activeSlide =
  //     (this.activeSlide + 1)
  //     % this.slides.length;


  //   /*
  //     Trigger splitting animation
  //   */

  //   this.playSplitAnimation();

  // }


  // /* =====================================
  //    SPLIT ANIMATION
  // ===================================== */

  // playSplitAnimation(): void {

  //   /*
  //     Reset first
  //   */

  //   this.isAnimating = false;


  //   /*
  //     Wait one browser frame,
  //     then activate animation
  //   */

  //   setTimeout(() => {

  //     this.isAnimating = true;

  //   }, 50);


  //   /*
  //     Return cells to normal
  //   */

  //   setTimeout(() => {

  //     this.isAnimating = false;

  //   }, 900);

  // }


  // /* =====================================
  //    MANUAL SLIDE
  // ===================================== */

  // goToSlide(index: number): void {
  //   if (index === this.activeSlide) {
  //     return;
  //   }
  //   this.activeSlide = index;
  //   this.playSplitAnimation();
  //   /*
  //     Restart automatic timer
  //   */

  //   clearInterval(this.sliderInterval);
  //   this.sliderInterval =
  //     setInterval(() => {
  //       this.nextSlide();
  //     }, 5000);

  // }


  // ngOnDestroy(): void {

  //   clearInterval(
  //     this.sliderInterval
  //   );

  // }
}
