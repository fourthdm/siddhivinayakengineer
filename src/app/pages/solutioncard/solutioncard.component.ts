import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-solutioncard',
  templateUrl: './solutioncard.component.html',
  styleUrls: ['./solutioncard.component.css']
})
export class SolutioncardComponent {

  @ViewChildren('solutionColumn')
  solutionColumns!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    const section = document.querySelector('.solutionsection');
    const grid = document.querySelector('.solution-grid');
    const heading = document.querySelector('.solution-heading');

    if (!section || !grid || !heading) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            heading.classList.add('reveal-active');

            setTimeout(() => {

              grid.classList.add('reveal-active');

            }, 180);

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.15
      }
    );

    observer.observe(section);
  }
}
