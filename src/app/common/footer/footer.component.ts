import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) { }

  navigateAndScroll(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  slides = [

    {
      image: '/assets/header/11.png'
    },

    {
      image: '/assets/header/22.png'
    },

    {
      image: '/assets/header/33.png'
    },

    {
      image: '/assets/header/44.png'
    },

    {
      image: '/assets/header/55.png'
    },
    {
      image: '/assets/header/66.png'
    }
  ];


  /* 1 ROW × 5 COLUMNS */

  rows = 1;

  cols = 5;

  cells: any[] = [];


  activeSlide = 0;

  isAnimating = false;

  private sliderInterval: any;


  ngOnInit(): void {

    this.createCells();

    /*
      Play animation when first image loads
    */

    setTimeout(() => {

      this.playSplitAnimation();

    }, 300);


    /*
      Start automatic carousel
    */

    this.sliderInterval =
      setInterval(() => {

        this.nextSlide();

      }, 5000);

  }


  /* =====================================
     CREATE 5 CELLS
  ===================================== */

  createCells(): void {
    this.cells = [];
    for (
      let col = 0;
      col < this.cols;
      col++
    ) {
      this.cells.push({
        row: 0,
        col: col
      });
    }
  }

  nextSlide(): void {
    this.activeSlide =
      (this.activeSlide + 1)
      % this.slides.length;


    /*
      Trigger splitting animation
    */

    this.playSplitAnimation();

  }


  /* =====================================
     SPLIT ANIMATION
  ===================================== */

  playSplitAnimation(): void {

    /*
      Reset first
    */

    this.isAnimating = false;


    /*
      Wait one browser frame,
      then activate animation
    */

    setTimeout(() => {

      this.isAnimating = true;

    }, 50);


    /*
      Return cells to normal
    */

    setTimeout(() => {

      this.isAnimating = false;

    }, 900);

  }


  /* =====================================
     MANUAL SLIDE
  ===================================== */

  goToSlide(index: number): void {

    if (index === this.activeSlide) {

      return;

    }


    this.activeSlide = index;

    this.playSplitAnimation();


    /*
      Restart automatic timer
    */

    clearInterval(this.sliderInterval);

    this.sliderInterval =
      setInterval(() => {

        this.nextSlide();

      }, 5000);

  }


  ngOnDestroy(): void {

    clearInterval(
      this.sliderInterval
    );

  }




  //   slides = [

  //  {
  //       image: '/assets/header/11.png'
  //     },

  //     {
  //       image: '/assets/header/22.png'
  //     },

  //     {
  //       image: '/assets/header/33.png'
  //     },

  //     {
  //       image: '/assets/header/44.png'
  //     },

  //     {
  //       image: '/assets/header/55.png'
  //     },
  //     {
  //       image: '/assets/header/66.png'
  //     }
  //   ];


  //   /* ==========================================
  //      GRID
  //   ========================================== */

  //   rows = 1;

  //   cols = 6;

  //   cells: any[] = [];


  //   /* ==========================================
  //      SLIDER
  //   ========================================== */

  //   activeSlide = 0;

  //   isAnimating = false;

  //   private interval: any;


  //   /* ==========================================
  //      INIT
  //   ========================================== */

  //   ngOnInit(): void {

  //     this.createCells();

  //     this.startSlider();

  //   }


  //   /* ==========================================
  //      CREATE CELLS
  //   ========================================== */

  //   // createCells(): void {

  //   //   this.cells = [];

  //   //   for (
  //   //     let row = 0;
  //   //     row < this.rows;
  //   //     row++
  //   //   ) {

  //   //     for (
  //   //       let col = 0;
  //   //       col < this.cols;
  //   //       col++
  //   //     ) {

  //   //       this.cells.push({
  //   //         row: row,
  //   //         col: col
  //   //       });

  //   //     }

  //   //   }

  //   // }
  // createCells(): void {
  //   this.cells = [];

  //   for (let col = 0; col < this.cols; col++) {
  //     this.cells.push({
  //       row: 0,
  //       col: col
  //     });
  //   }
  // }

  //   /* ==========================================
  //      AUTO SLIDER
  //   ========================================== */

  //   startSlider(): void {

  //     this.interval = setInterval(() => {

  //       this.nextSlide();

  //     }, 5000);

  //   }


  //   /* ==========================================
  //      NEXT SLIDE
  //   ========================================== */

  //   nextSlide(): void {

  //     if (this.isAnimating) {
  //       return;
  //     }


  //     /*
  //        Start splitting
  //     */

  //     this.isAnimating = true;


  //     /*
  //        Wait while cells separate
  //     */

  //     setTimeout(() => {

  //       this.activeSlide =
  //         (this.activeSlide + 1)
  //         % this.slides.length;

  //     }, 600);


  //     /*
  //        Reassemble
  //     */

  //     setTimeout(() => {

  //       this.isAnimating = false;

  //     }, 1300);

  //   }


  //   /* ==========================================
  //      MANUAL SLIDE
  //   ========================================== */

  //   goToSlide(index: number): void {

  //     if (
  //       index === this.activeSlide ||
  //       this.isAnimating
  //     ) {

  //       return;

  //     }


  //     clearInterval(this.interval);


  //     this.isAnimating = true;


  //     setTimeout(() => {

  //       this.activeSlide = index;

  //     }, 600);


  //     setTimeout(() => {

  //       this.isAnimating = false;

  //       this.startSlider();

  //     }, 1300);

  //   }


  //   /* ==========================================
  //      DESTROY
  //   ========================================== */

  //   ngOnDestroy(): void {

  //     clearInterval(this.interval);

  //   }


}
