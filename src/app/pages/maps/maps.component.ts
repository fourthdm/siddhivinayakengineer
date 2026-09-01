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

              this.startCounter(18, 'count1', 50);
              this.startCounter(150, 'count2', 10);
              this.startCounter(50, 'count3', 10);
              this.startCounter(5, 'count4', 5);

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
    // { name: 'Rajasthan', x: 25, y: 34 },
    // { name: 'Uttar Pradesh', x: 45, y: 35 },
    // { name: 'Telangana', x: 40, y: 62 },
    { name: 'Maharastra', x: 30, y: 58 },
    // { name: 'Delhi', x: 35.5, y: 27.5 },
    // { name: 'Punjab', x: 31, y: 19 },
    // { name: 'Hariyana', x: 32, y: 25 },
    // { name: 'Jammu & Kashmir', x: 35, y: 8 },
    // { name: 'Himachal Pradesh', x: 35, y: 15 },
    // { name: 'UttaraKhand', x: 40, y: 22 },
    // { name: 'Goa', x: 24.5, y: 68.5 },
    // { name: 'Madhya Pradesh', x: 40, y: 45 },
    // { name: 'Chhattisgarh', x: 50, y: 49 },
    // { name: 'Jharkhand', x: 57, y: 45 },
    // { name: 'Bihar', x: 60, y: 37 },
    // { name: 'Sikkim', x: 65, y: 30 },
    // { name: 'Arunachal Pradesh', x: 82, y: 28 },
    // { name: 'Assam', x: 75, y: 34 },
    // { name: 'Meghalaya', x: 73, y: 37 },
    // { name: 'Tripura', x: 74, y: 43.5 },
    // { name: 'Mizoram', x: 78, y: 44 },
    // { name: 'Manipur', x: 80, y: 40 },
    // { name: 'Nagaland', x: 82, y: 35 },
    { name: 'West Bengal(Kolkata)', x: 65, y: 46 },
    { name: 'Karnataka', x: 30, y: 73 },
    // { name: 'Odisha', x: 55, y: 55 },
    // { name: 'Kerla', x: 31, y: 85 },
    // { name: 'Tamil Nadu', x: 37, y: 83 },
    // { name: 'Andhra Pradesh', x: 40, y: 70 },
    // { name: 'Sri Lanka', x: 42, y: 92 }
  ];
}
