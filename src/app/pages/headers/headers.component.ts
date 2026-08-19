import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit, OnDestroy {


  introFinished = false;

  // Logo rotation
  startAnimation = false;

  // Logo moves to right
  moveLogo = false;

  // Logo zoom out
  startZoom = false;

  // Store timers
  private timers: any[] = [];


  // ==========================================
  // ON INIT
  // ==========================================

  ngOnInit(): void {

    // Disable scrolling while loader is visible
    document.body.classList.add('loader-active');


    // ------------------------------------------
    // STEP 1
    // Start logo rotation
    // ------------------------------------------

    this.timers.push(
      setTimeout(() => {

        this.startAnimation = true;

      }, 100)
    );


    // ------------------------------------------
    // STEP 2
    // Move logo to right
    // Solar website uses around 800ms
    // ------------------------------------------

    this.timers.push(
      setTimeout(() => {

        this.moveLogo = true;

      }, 800)
    );


    // ------------------------------------------
    // STEP 3
    // Zoom out
    // Solar website uses around 2200ms
    // ------------------------------------------

    this.timers.push(
      setTimeout(() => {

        this.startZoom = true;

      }, 2200)
    );


    // ------------------------------------------
    // STEP 4
    // Hide orange loader
    // Solar website uses around 2800ms
    // ------------------------------------------

    this.timers.push(
      setTimeout(() => {

        this.introFinished = true;

        document.body.classList.remove('loader-active');

      }, 2800)
    );

  }


  // ==========================================
  // COMPONENT DESTROY
  // ==========================================

  ngOnDestroy(): void {

    // Clear all timers
    this.timers.forEach(timer => {
      clearTimeout(timer);
    });

    // Make sure scrolling is enabled
    document.body.classList.remove('loader-active');

  }

}

//   introFinished = false;

// startAnimation = false;
// moveLogo = false;
// startZoom = false;

// private timers: any[] = [];

// ngOnInit(): void {

//   // Prevent page scrolling while preloader is running
//   document.body.style.overflow = 'hidden';

//   // --------------------------------
//   // STEP 1 - Start logo rotation
//   // --------------------------------

//   this.timers.push(
//     setTimeout(() => {
//       this.startAnimation = true;
//     }, 100)
//   );


//   // --------------------------------
//   // STEP 2 - Move logo to right
//   // --------------------------------

//   this.timers.push(
//     setTimeout(() => {
//       this.moveLogo = true;
//     }, 800)
//   );


//   // --------------------------------
//   // STEP 3 - Zoom out
//   // --------------------------------

//   this.timers.push(
//     setTimeout(() => {
//       this.startZoom = true;
//     }, 2200)
//   );


//   // --------------------------------
//   // STEP 4 - Remove loader
//   // --------------------------------

//   this.timers.push(
//     setTimeout(() => {

//       this.introFinished = true;

//       document.body.style.overflow = 'auto';

//     }, 2800)
//   );

// }


// ngOnDestroy(): void {

//   this.timers.forEach(timer => {
//     clearTimeout(timer);
//   });

//   document.body.style.overflow = 'auto';

// }
  // introFinished = false;

  // ngOnInit(): void {

  //   // Disable scrolling
  //   document.body.style.overflow = 'hidden';

  //   // Wait for intro animation
  //   setTimeout(() => {

  //     this.introFinished = true;

  //     // Enable scrolling
  //     document.body.style.overflow = 'auto';

  //   }, 3000);

  // }


  // ngOnDestroy(): void {

  //   document.body.style.overflow = 'auto';

  // }

