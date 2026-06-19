import { Component } from '@angular/core';

@Component({
  selector: 'app-aircooled',
  templateUrl: './aircooled.component.html',
  styleUrls: ['./aircooled.component.css']
})
export class AircooledComponent {
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
