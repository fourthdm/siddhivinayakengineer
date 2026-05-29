import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // isExpanded = false;

  // toggleReadMore() {
  //   this.isExpanded = !this.isExpanded;
  // }
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

    // const carousel = document.getElementById('projectCarousel');

    // carousel?.addEventListener('slid.bs.carousel', (event: any) => {

    //   const thumbs = document.querySelectorAll('.thumb');

    //   thumbs.forEach((img) => {
    //     img.classList.remove('active-thumb');
    //   });

    //   thumbs[event.to].classList.add('active-thumb');

    // });

  }

}
