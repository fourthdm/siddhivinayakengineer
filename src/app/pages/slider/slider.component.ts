import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @ViewChildren('counterSection')  counterSections!: QueryList<ElementRef>;
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
}
