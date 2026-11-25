import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newanimation',
  templateUrl: './newanimation.component.html',
  styleUrls: ['./newanimation.component.css']
})
export class NewanimationComponent implements AfterViewInit, OnDestroy{
  @ViewChild('trustSection')
  trustSection!: ElementRef;

  counters = {
    years: 0,
    engineers: 0,
    projects: 0
  };

  private observer!: IntersectionObserver;

  private animationStarted = false;


  ngAfterViewInit(): void {

    this.createScrollObserver();

  }


  private createScrollObserver(): void {

    this.observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (
            entry.isIntersecting &&
            !this.animationStarted
          ) {

            this.animationStarted = true;

            const section =
              this.trustSection.nativeElement;

            section.classList.add(
              'trust-visible'
            );

            this.startCounters();

          }

        });

      },
      {
        threshold: 0.25
      }
    );


    this.observer.observe(
      this.trustSection.nativeElement
    );

  }


  private startCounters(): void {

    this.animateCounter(
      'years',
      18,
      1800
    );

    setTimeout(() => {

      this.animateCounter(
        'engineers',
        57,
        1800
      );

    }, 250);


    setTimeout(() => {

      this.animateCounter(
        'projects',
        71,
        1800
      );

    }, 500);

  }


  private animateCounter(
    property: 'years' | 'engineers' | 'projects',
    target: number,
    duration: number
  ): void {

    const startTime =
      performance.now();


    const updateCounter =
      (currentTime: number) => {

        const elapsed =
          currentTime - startTime;

        const progress =
          Math.min(
            elapsed / duration,
            1
          );


        /*
          Ease-out effect.
          Starts quickly and slows down
          near the final number.
        */

        const easedProgress =
          1 - Math.pow(
            1 - progress,
            3
          );


        this.counters[property] =
          Math.floor(
            easedProgress * target
          );


        if (progress < 1) {

          requestAnimationFrame(
            updateCounter
          );

        } else {

          this.counters[property] =
            target;

        }

      };


    requestAnimationFrame(
      updateCounter
    );

  }


  ngOnDestroy(): void {

    if (this.observer) {

      this.observer.disconnect();

    }

  }
}
