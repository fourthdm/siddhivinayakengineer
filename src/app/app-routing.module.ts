import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResidentialComponent } from './projects/residential/residential.component';
import { CommercialComponent } from './projects/commercial/commercial.component';
import { IndustrialComponent } from './projects/industrial/industrial.component';
import { AircooledComponent } from './solutions/aircooled/aircooled.component';
import { VrvComponent } from './solutions/vrv/vrv.component';
import { TurnkeycleanroomComponent } from './solutions/turnkeycleanroom/turnkeycleanroom.component';
import { EvaporativeComponent } from './solutions/evaporative/evaporative.component';
import { ForcedventilationComponent } from './solutions/forcedventilation/forcedventilation.component';
import { ComfortairComponent } from './solutions/comfortair/comfortair.component';
import { PrecisionairComponent } from './solutions/precisionair/precisionair.component';
import { CultureComponent } from './pages/culture/culture.component';
import { CasestudiesComponent } from './pages/casestudies/casestudies.component';
import { MetroComponent } from './casestudies/metro/metro.component';
import { AmanoraComponent } from './casestudies/amanora/amanora.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { EmersonComponent } from './casestudies/emerson/emerson.component';
import { BuildingventilationComponent } from './pages/buildingventilation/buildingventilation.component';
import { AnnualmaintenceComponent } from './pages/annualmaintence/annualmaintence.component';
import { HvacvitoutsComponent } from './pages/hvacvitouts/hvacvitouts.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    data: {
      title: 'HVAC & MEP Engineering Company in Pune | SVESPL',
      description: 'SVESPL delivers HVAC and MEP engineering, installation and maintenance for commercial, industrial and residential projects in Pune and across India.',
      canonical: 'https://www.svespl.in/'
    }
  },
  {
    path: 'home', component: HomeComponent,
    data: {
      title: 'HVAC & MEP Engineering Company in Pune | SVESPL',
      description: 'SVESPL delivers HVAC and MEP engineering, installation and maintenance for commercial, industrial and residential projects in Pune and across India.',
      canonical: 'https://www.svespl.in/home'
    }
  },
  {
    path: 'about', component: AboutusComponent,
    data: {
      title: 'About SVESPL | HVAC & MEP Experts in Pune',
      description: 'Learn about SVESPL, an HVAC and MEP solutions provider founded in 2008, serving commercial, industrial and residential projects with engineering expertise.',
      canonical: 'https://www.svespl.in/about'
    }
  },
  {
    path: 'services', component: ServicesComponent,
    data: {
      title: 'HVAC, MEP & Cleanroom Services in Pune | SVESPL',
      description: 'Explore HVAC systems, turnkey cleanrooms, cleanroom equipment, ventilation, evaporative cooling, VRV/VRF systems, design and project management.',
      canonical: 'https://www.svespl.in/services'
    }
  },
  {
    path: 'careers', component: CareerComponent,
    data: {
      title: "Jobs(List)| Siddhivinayak Engineering Solutions",
      canonical: 'https://www.svespl.in/careers'
    }
  },

  {
    path: 'contact', component: ContactComponent,
    data: {
      title: 'Contact SVESPL | HVAC Contractor in Pune',
      description: 'Contact SVESPL in Viman Nagar, Pune for HVAC and MEP project enquiries, system installation, maintenance, cleanroom solutions and project estimates.',
      canonical: 'https://www.svespl.in/contact'
    }
  },
  {
    path: 'culture', component: CultureComponent,
    data: {
      canonical: 'https://www.svespl.in/culture'
    }
  },
  {
    path: 'projects', component: ProjectsComponent,
    data: {
      canonical: 'https://www.svespl.in/projects'
    }
  },
  {
    path: 'case-studies', component: CasestudiesComponent,
    data: {
      canonical: 'https://www.svespl.in/case-studies'
    }
  },
  {
    path: 'air-cooled-water-cooled-chiller-plants', component: AircooledComponent,
    data: {
      canonical: 'https://www.svespl.in/air-cooled-water-cooled-chiller-plants'
    }
    // data: {
    //   title: 'Contact SVESPL | HVAC Contractor in Pune',
    //   description: 'Contact SVESPL in Viman Nagar, Pune for HVAC and MEP project enquiries, system installation, maintenance, cleanroom solutions and project estimates.'
    // }
  },
  {
    path: 'vrv-vrf-systems', component: VrvComponent,
    data: {
      title: 'VRV/VRF Air Conditioning Systems | SVESPL',
      description: 'Discover VRV and VRF air conditioning systems for flexible zone-wise temperature control, energy efficiency and HVAC solutions for varied building types.',
      canonical: 'https://www.svespl.in/vrv-vrf-systems'
    }
  },
  {
    path: 'turnkey-clean-room-solutions', component: TurnkeycleanroomComponent,
    data: {
      title: 'Turnkey Cleanroom Design & Installation | SVESPL',
      description: 'Plan turnkey cleanroom projects with design, engineering, installation and commissioning for controlled environments tailored to your facility requirements.',
      canonical: 'https://www.svespl.in/turnkey-clean-room-solutions'
    }
  },
  {
    path: 'evaporative-cooling', component: EvaporativeComponent,
    data: {
      title: 'Evaporative Cooling Systems for Large Spaces | SVESPL',
      description: 'Explore evaporative cooling systems for large spaces that provide cost-conscious cooling using water evaporation and support lower energy consumption.',
      canonical: 'https://www.svespl.in/evaporative-cooling'
    }
  },
  {
    path: 'forced-ventilation', component: ForcedventilationComponent,
    data: {
      canonical: 'https://www.svespl.in/forced-ventilation'
    }
  },
  {
    path: 'comfort-air-conditioning', component: ComfortairComponent,
    data: {
      canonical: 'https://www.svespl.in/comfort-air-conditioning'
    }
  },
  {
    path: 'precision-air-conditioning', component: PrecisionairComponent,
    data: {
      canonical: 'https://www.svespl.in/precision-air-conditioning'
    }
  },
  {
    path: 'building-ventilation', component: BuildingventilationComponent,
    data: {
      canonical: 'https://www.svespl.in/building-ventilation'
    }
  },
  {
    path: 'annual-maintenance', component: AnnualmaintenceComponent,
    data: {
      canonical: 'https://www.svespl.in/annual-maintenance'
    }
  },
  {
    path: 'hvac-fitouts-refofit', component: HvacvitoutsComponent,
    data: {
      canonical: 'https://www.svespl.in/hvac-fitouts-refofit'
    }
  },
  {
    path: 'metroStationCasestudy', component: MetroComponent,
    data: {
      canonical: 'https://www.svespl.in/metroStationCasestudy'
    }
  },
  {
    path: 'amaoraCaseStudy', component: AmanoraComponent,
    data: {
      canonical: 'https://www.svespl.in/amaoraCaseStudy'
    }
  },
  {
    path: 'emersonCaseStudy', component: EmersonComponent,
    data: {
      canonical: 'https://www.svespl.in/emersonCaseStudy'
    }
  },
  {
    path: 'sitemap', component: SitemapComponent,
    data: {
      canonical: 'https://www.svespl.in/sitemap'
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
