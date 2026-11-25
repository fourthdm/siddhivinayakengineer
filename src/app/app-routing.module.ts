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
    path: '', component: HomeComponent, 
    title: 'HVAC & MEP Engineering Company in India | SVESPL',
    data: {
      description: 'SVESPL is an HVAC & MEP Engineering Company in India delivering industrial and commercial HVAC systems, cleanrooms, chiller plants, VRV/VRF systems and ventilation solutions.',
      canonical: 'https://www.svespl.in/'
    }
  },
  {
    path: 'home', component: HomeComponent,
    title: 'HVAC & MEP Engineering Company in India | SVESPL',
    data: {
      description: 'SVESPL is an HVAC & MEP Engineering Company in India delivering industrial and commercial HVAC systems, cleanrooms, chiller plants, VRV/VRF systems and ventilation solutions.',
      canonical: 'https://www.svespl.in/home'
    }
  },
  {
    path: 'about', component: AboutusComponent,
    title: 'HVAC Engineering Company in India | About SVESPL',
    data: {
      description: 'Discover why SVESPL is an HVAC Engineering Company in India, with experience in industrial and commercial HVAC projects, MEP coordination and turnkey engineering solutions.',
      canonical: 'https://www.svespl.in/about'
    }
  },
  {
    path: 'services', component: ServicesComponent,
    title: 'HVAC & MEP Engineering Services for Industry | SVESPL',
    data: {
      description: 'Explore HVAC & MEP Engineering Services by SVESPL, including industrial cooling, chiller plants, cleanroom systems, VRV/VRF installation, ventilation and engineering support.',
      canonical: 'https://www.svespl.in/services'
    }
  },
  {
    path: 'careers', component: CareerComponent,
    title: "Jobs(List)| Siddhivinayak Engineering Solutions",
    data: {
      canonical: 'https://www.svespl.in/careers'
    }
  },

  {
    path: 'contact', component: ContactComponent,
    title: 'HVAC Contractor in Pune | Contact SVESPL',
    data: {
      description: 'Contact SVESPL, an HVAC Contractor in Pune, to discuss industrial or commercial HVAC requirements, request a site assessment and plan your next engineering project.',
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
  },
  {
    path: 'vrv-vrf-systems', component: VrvComponent,
    title: 'VRV/VRF Air Conditioning Systems | SVESPL',
    data: {
      description: 'Discover VRV and VRF air conditioning systems for flexible zone-wise temperature control, energy efficiency and HVAC solutions for varied building types.',
      canonical: 'https://www.svespl.in/vrv-vrf-systems'
    }
  },
  {
    path: 'turnkey-clean-room-solutions', component: TurnkeycleanroomComponent,
    title: 'Turnkey Cleanroom Design & Installation | SVESPL',
    data: {
      description: 'Plan turnkey cleanroom projects with design, engineering, installation and commissioning for controlled environments tailored to your facility requirements.',
      canonical: 'https://www.svespl.in/turnkey-clean-room-solutions'
    }
  },
  {
    path: 'evaporative-cooling', component: EvaporativeComponent,
    title: 'Evaporative Cooling Systems for Large Spaces | SVESPL',
    data: {
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
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' ,   initialNavigation: 'enabledBlocking', useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
