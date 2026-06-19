import { Component } from '@angular/core';

interface InfoOption {
  number: string;
  title: string;
  text: string;
  color: string;
  icon: string;
}
@Component({
  selector: 'app-vrv',
  templateUrl: './vrv.component.html',
  styleUrls: ['./vrv.component.css']
})
export class VrvComponent {
  options: InfoOption[] = [
    {
      number: '01',
      title: 'Option',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      color: '#4f9bd3',
      icon: '▤'
    },
    {
      number: '02',
      title: 'Option',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      color: '#5854a3',
      icon: '☼'
    },
    {
      number: '03',
      title: 'Option',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      color: '#7b3a76',
      icon: '◇'
    },
    {
      number: '04',
      title: 'Option',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      color: '#302836',
      icon: '◎'
    }
  ];

  // options = [
  //   {
  //     title: 'GENUINE',
  //     icon: '/assets/core_value/1.png',
  //     color: '#4e9ad4',
  //     text: ' Our all actions / transaction shall be deeply Genuine.'
  //   },
  //   {
  //     title: 'EFFICIENT',
  //     icon: '/assets/core_value/2.png',
  //     color: '#5955a4',
  //     text: 'Continuous efforts to achieve maximum efficiency with ethical & sustainable means through i nnovation / adaptation.'
  //   },

  //   {
  //     title: 'INNOVATIVE & ADAPTIVE',
  //     icon: '/assets/core_value/3.png',
  //     color: '#7b3b78',
  //     text: 'Try to do things in a better, more efficient and  easier manner by being i nnovative. & adaptive.'
  //   },

  //   {
  //     title: 'FOCUSSED AND SOLUTION ORIENTED',
  //     icon: '/assets/core_value/4.png',
  //     color: '#7670B0',
  //     text: ' All the actions should be foucssed on solution and should be objective oriented.'
  //   }
  // ];
}
