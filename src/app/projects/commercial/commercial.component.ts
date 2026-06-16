import { Component } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent {
  isExpanded: boolean[] = [];

  toggleReadMore(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  ngAfterViewInit(): void {

    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel: any) => {

      carousel.addEventListener('slid.bs.carousel', (event: any) => {

        const container = carousel.parentElement;

        const thumbs = container.querySelectorAll('.thumb');

        thumbs.forEach((img: any) => {
          img.classList.remove('active-thumb');
        });

        thumbs[event.to].classList.add('active-thumb');

      });

    });
  }
}