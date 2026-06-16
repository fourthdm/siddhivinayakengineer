import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  locations = [
    { name: 'Gujarat', x: 17, y: 48 },
    { name: 'Rajasthan', x: 25, y: 38 },
    { name: 'Uttar Pradesh', x: 45, y: 38 },
    { name: 'Hydrabad', x: 40, y: 62 },
    { name: 'Maharastra', x: 30, y: 58 },
    { name: 'Delhi', x: 31, y: 32 },
    { name: 'Punjab', x: 29, y: 26 },
    { name: 'Srinagar', x: 28, y: 20 },
    { name: 'Ladhakh', x: 35, y: 19},
    { name: 'Himachal Pradesh', x:35, y: 25 },
    { name: 'UttaraKhand', x:40, y: 29 },
    { name: 'Madhya Pradesh', x: 40, y: 48 },
    { name: 'Chhattisgarh', x: 50, y: 52 },
    { name: 'Jharkhand', x: 59, y: 48 },
    { name: 'Bihar', x: 60, y: 40 },
    { name: 'Sikkim', x: 69.5, y: 36 },
    { name: 'Arunachal Pradesh', x: 87 , y: 34 },
    { name: 'Assam', x: 84 , y: 39 },
    { name: 'Meghalaya', x: 79 , y: 42 },
    { name: 'Tripura', x: 79 , y: 47 },
    { name: 'Mizoram', x: 83 , y: 47 },
    { name: 'Manipur', x: 86 , y: 44 },
    { name: 'Nagaland', x: 88.5 , y: 40 },
    { name: 'West Bengal(Kolkata)', x: 67, y: 48 },
    { name: 'Karnataka', x:30, y:73},
    { name: 'Odisha', x:55, y:55},
    { name: 'Kerla', x:33, y:85},
    { name: 'Tamil Nadu', x:38, y:83},
    { name: 'Andhra Pradesh', x:40, y:71},
  ];


    cards = [
    {
      year: '2008-2011',
      text: 'Proven Expertise & Extensive Experience. 18 Years of Industry Presence & Leadership'
    },
    {
      year: '2012-2015',
      text: 'Capability Expansion, Expanded into full MEP scope and added cleanroom and PAC competencies.'
    },
    {
      year: '2016-2019',
      text: 'Structured Growth, Fully Functional ERP, Customised Costing & Estimation Portal, Fully Equipped and advanced Diagnostic & Troubleshooting Equipments'
    },
    {
      year: '2020-2024',
      text: 'Commitment to Quality & Client Satisfaction.Structured Growth, Fully Functional ERP',
      award: 'Outstanding VRV Sales FY 2020-21',
      award1: 'Highest Quality and Project Management FY 2021-22',
      award2: 'Outstanding VRV Sales FY 2021-22',
      award3: 'Outstanding VRV Sales FY 2022-23',
      award4: 'Outstanding VRV Sales FY 2023-24',
    },
    {
      year: '2025-Present',
      text: 'Started BrahMos Production'
    },
  ];

}