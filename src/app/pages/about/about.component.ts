import { Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

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

  //             this.startCounter(17, 'count1', 200);
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

  @ViewChildren('counterSection') counterSections!: QueryList<ElementRef>;
  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count4: number = 0;

  hasStarted = false;

  ngAfterViewInit(): void {

    setTimeout(() => {

      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach(entry => {

            if (entry.isIntersecting && !this.hasStarted) {

              this.hasStarted = true;

              this.startCounter(17, 'count1', 50);
              this.startCounter(150, 'count2', 10);
              this.startCounter(500, 'count3', 5);
              this.startCounter(500, 'count4', 5);

              observer.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.2
        }
      );

      // SAFE CHECK
      if (this.counterSections) {

        this.counterSections.forEach(section => {

          if (section?.nativeElement) {
            observer.observe(section.nativeElement);
          }

        });

      }

    }, 300);

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

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/SVESPL_ISO.pdf';
    link.download = 'SVESPL_ISO.pdf';
    link.click();
  }

  swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
  });

}
