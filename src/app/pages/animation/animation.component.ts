import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements AfterViewInit {


  @ViewChild('aiBackbone')
  aiBackbone!: ElementRef;

  ngAfterViewInit(): void {

    const section =
      this.aiBackbone.nativeElement;

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              section.classList.add(
                'ai-visible'
              );

            }

          });

        },
        {
          threshold: 0.15
        }
      );

    observer.observe(section);

  }

  // @ViewChild('aiSection') aiSection!: ElementRef;

  // particles: any[] = [];

  // ngOnInit() {

  //   // Generate background particles
  //   for (let i = 0; i < 35; i++) {

  //     this.particles.push({
  //       left: Math.random() * 100,
  //       top: Math.random() * 100,
  //       delay: Math.random() * 5
  //     });

  //   }

  // }


  // ngAfterViewInit() {

  //   const observer = new IntersectionObserver(
  //     (entries) => {

  //       entries.forEach(entry => {

  //         if (entry.isIntersecting) {

  //           this.aiSection.nativeElement.classList.add(
  //             'section-visible'
  //           );

  //         }

  //       });

  //     },
  //     {
  //       threshold: 0.2
  //     }
  //   );

  //   observer.observe(
  //     this.aiSection.nativeElement
  //   );

  // }
}
