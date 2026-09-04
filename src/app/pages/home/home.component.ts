import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  // count1: number = 0;
  // count2: number = 0;
  // count3: number = 0;
  // count4: number = 0;

  // ngOnInit(): void {
  //   this.startCounter(17, 'count1', 700);
  //   this.startCounter(150, 'count2', 100);
  //   this.startCounter(500, 'count3', 100);
  //   this.startCounter(500, 'count4', 100);
  // }

  // startCounter(target: number, variable: 'count1' | 'count2' | 'count3' | 'count4', speed: number) {
  //   let interval = setInterval(() => {
  //     if (this[variable] < target) {
  //       this[variable]++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, speed);
  // }

  // @ViewChild('counterSection') counterSection!: ElementRef;

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;
  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  scrollToSection(sectionId: string) {

    const element = document.getElementById(sectionId);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // @ViewChild('counterSection') counterSections!: QueryList<ElementRef>;
  @ViewChildren('counterSection')  counterSections!: QueryList<ElementRef>;
  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count4: number = 0;

  hasStarted = false;

  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach(entry => {
  //           if (entry.isIntersecting && !this.hasStarted) {
  //             this.hasStarted = true;
  //             this.startCounter(18, 'count1', 100);
  //             this.startCounter(150, 'count2', 30);
  //             this.startCounter(50, 'count3', 100);
  //             // this.startCounter(500, 'count4', 80);
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

  //   }, 100);

  // }

//   @ViewChildren('counterSection') counterSections!: QueryList<ElementRef>;

// count1: number = 0;
// count2: number = 0;
// count3: number = 0;
// count4: number = 0;

// hasStarted = false;

ngAfterViewInit(): void {

  setTimeout(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting && !this.hasStarted) {

            this.hasStarted = true;

            // Start ALL counters at exactly the same time
            this.startAllCounters();

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.2
      }
    );

    if (this.counterSections) {

      this.counterSections.forEach(section => {

        if (section?.nativeElement) {
          observer.observe(section.nativeElement);
        }

      });

    }

  }, 100);
}


/* =====================================================
   SYNCHRONIZED COUNTERS
===================================================== */

startAllCounters(): void {

  const startTime = performance.now();

  const duration = 2500; // 2.5 seconds

  const targets = {
    count1: 18,
    count2: 150,
    count3: 50,
    // count4: 500
  };

  const animate = (currentTime: number) => {

    const elapsed = currentTime - startTime;

    const progress = Math.min(elapsed / duration, 1);

    // Smooth animation
    const easedProgress =
      1 - Math.pow(1 - progress, 3);


    this.count1 = Math.floor(
      targets.count1 * easedProgress
    );

    this.count2 = Math.floor(
      targets.count2 * easedProgress
    );

    this.count3 = Math.floor(
      targets.count3 * easedProgress
    );

    // this.count4 = Math.floor(
    //   targets.count4 * easedProgress
    // );


    if (progress < 1) {

      requestAnimationFrame(animate);

    } else {

      // Make sure final values are exact
      this.count1 = targets.count1;
      this.count2 = targets.count2;
      this.count3 = targets.count3;

      // this.count4 = targets.count4;
    }
  };

  requestAnimationFrame(animate);
}


  startCounter(
    target: number,
    variable: 'count1' | 'count2' | 'count3' | 'count4',
    speed: number
  ) {

    let interval = setInterval(() => {

      if (this[variable] < target) {
        this[variable]++;
      } else {
        clearInterval(interval);
      }

    }, speed);
  }

  // @ViewChild('counterSection', { static: false }) counterSection!: ElementRef;

  // count1: number = 0;
  // count2: number = 0;
  // count3: number = 0;
  // count4: number = 0;

  // hasStarted = false; // prevent multiple triggers

  // ngAfterViewInit(): void {

  //   setTimeout(() => {   // ✅ ensures DOM fully rendered

  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach(entry => {

  //           console.log('VISIBLE:', entry.isIntersecting); // ✅ debug

  //           if (entry.isIntersecting && !this.hasStarted) {
  //             this.hasStarted = true;

  //             this.startCounter(17, 'count1', 50);
  //             this.startCounter(150, 'count2', 10);
  //             this.startCounter(500, 'count3', 5);
  //             this.startCounter(500, 'count4', 5);

  //             observer.unobserve(entry.target); // ✅ better than disconnect
  //           }

  //         });
  //       },
  //       {
  //         threshold: 0.2  // ✅ LOWER THIS (very important)
  //       }
  //     );

  //     if (this.counterSection) {
  //       observer.observe(this.counterSection.nativeElement);
  //     }

  //   }, 200); // small delay
  // }

  // startCounter(target: number, variable: 'count1' | 'count2' | 'count3' | 'count4', speed: number) {
  //   let interval = setInterval(() => {
  //     if (this[variable] < target) {
  //       this[variable]++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, speed);
  // }



}
