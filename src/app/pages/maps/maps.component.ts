import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {


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







  locations = [
    { name: 'Gujarat', x: 17, y: 46 },
    { name: 'Rajasthan', x: 25, y: 34 },
    { name: 'Uttar Pradesh', x: 45, y: 30 },
    { name: 'Hydrabad', x: 40, y: 62 },
    { name: 'Maharastra', x: 30, y: 58 },
    { name: 'Delhi', x: 31, y: 23 },
    { name: 'Punjab', x: 29, y: 17 },
    { name: 'Srinagar', x: 28, y: 8.5 },
    { name: 'Ladhakh', x: 35, y: 8 },
    { name: 'Himachal Pradesh', x: 35, y: 15 },
    { name: 'UttaraKhand', x: 40, y: 20 },
    { name: 'Madhya Pradesh', x: 40, y: 45 },
    { name: 'Chhattisgarh', x: 50, y: 51 },
    { name: 'Jharkhand', x: 59, y: 45 },
    { name: 'Bihar', x: 60, y: 35 },
    { name: 'Sikkim', x: 69.5, y: 29 },
    { name: 'Arunachal Pradesh', x: 87, y: 28 },
    { name: 'Assam', x: 84, y: 34 },
    { name: 'Meghalaya', x: 79, y: 37 },
    { name: 'Tripura', x: 79, y: 43.5 },
    { name: 'Mizoram', x: 83, y: 45 },
    { name: 'Manipur', x: 86, y: 40 },
    { name: 'Nagaland', x: 88.5, y: 35 },
    { name: 'West Bengal(Kolkata)', x: 67, y: 46 },
    { name: 'Karnataka', x: 30, y: 73 },
    { name: 'Odisha', x: 55, y: 55 },
    { name: 'Kerla', x: 32, y: 90 },
    { name: 'Tamil Nadu', x: 38, y: 89 },
    { name: 'Andhra Pradesh', x: 40, y: 73 },
  ];
}
