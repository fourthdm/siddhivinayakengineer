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
      description: 'SVESPL delivers HVAC and MEP engineering, installation and maintenance for commercial, industrial and residential projects in Pune and across India.'
    }
  },
  {
    path: 'Home', component: HomeComponent,
    data: {
      title: 'HVAC & MEP Engineering Company in Pune | SVESPL',
      description: 'SVESPL delivers HVAC and MEP engineering, installation and maintenance for commercial, industrial and residential projects in Pune and across India.'
    }
  },
  {
    path: 'About', component: AboutusComponent,
    data: {
      title: 'About SVESPL | HVAC & MEP Experts in Pune',
      description: 'Learn about SVESPL, an HVAC and MEP solutions provider founded in 2008, serving commercial, industrial and residential projects with engineering expertise.'
    }
  },
  {
    path: 'Services', component: ServicesComponent,
    data: {
      title: 'HVAC, MEP & Cleanroom Services in Pune | SVESPL',
      description: 'Explore HVAC systems, turnkey cleanrooms, cleanroom equipment, ventilation, evaporative cooling, VRV/VRF systems, design and project management.'
    }
  },
  { path: 'Career', component: CareerComponent, title: "Jobs(List)| Siddhivinayak Engineering Solutions" },
  {
    path: 'Contact', component: ContactComponent,
    data: {
      title: 'Contact SVESPL | HVAC Contractor in Pune',
      description: 'Contact SVESPL in Viman Nagar, Pune for HVAC and MEP project enquiries, system installation, maintenance, cleanroom solutions and project estimates.'
    }
  },
  { path: 'Culture', component: CultureComponent },

  { path: 'Blog', component: BlogComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Casestudies', component: CasestudiesComponent },

  {
    path: 'Air_Cooled&Water-Cooled_Chiller_Plants', component: AircooledComponent,
    // data: {
    //   title: 'Contact SVESPL | HVAC Contractor in Pune',
    //   description: 'Contact SVESPL in Viman Nagar, Pune for HVAC and MEP project enquiries, system installation, maintenance, cleanroom solutions and project estimates.'
    // }
  },
  {
    path: 'VRVVRF_SYSTEMS', component: VrvComponent,
    data: {
      title: 'VRV/VRF Air Conditioning Systems | SVESPL',
      description: 'Discover VRV and VRF air conditioning systems for flexible zone-wise temperature control, energy efficiency and HVAC solutions for varied building types.'
    }
  },
  {
    path: 'TURNKEY_CLEAN_ROOM_SOLUTION', component: TurnkeycleanroomComponent,
    data: {
      title: 'Turnkey Cleanroom Design & Installation | SVESPL',
      description: 'Plan turnkey cleanroom projects with design, engineering, installation and commissioning for controlled environments tailored to your facility requirements.'
    }
  },
  {
    path: 'EVAPORATIVE_COOLING', component: EvaporativeComponent,
    data: {
      title: 'Evaporative Cooling Systems for Large Spaces | SVESPL',
      description: 'Explore evaporative cooling systems for large spaces that provide cost-conscious cooling using water evaporation and support lower energy consumption.'
    }
  },
  {
    path: 'FORCED_VENTILATION', component: ForcedventilationComponent,
    // data: {
    //   title: 'Contact SVESPL | HVAC Contractor in Pune',
    //   description: 'Contact SVESPL in Viman Nagar, Pune for HVAC and MEP project enquiries, system installation, maintenance, cleanroom solutions and project estimates.'
    // }
  },
  {
    path: 'COMFORT_AIR_CONDITIONING', component: ComfortairComponent,
    // data: {
    //   title: 'Contact SVESPL | HVAC Contractor in Pune',
    //   description: 'Contact SVESPL in Viman Nagar, Pune for HVAC and MEP project enquiries, system installation, maintenance, cleanroom solutions and project estimates.'
    // }
  },
  {
    path: 'PRECISION_AIR_CONDITIONING', component: PrecisionairComponent,
    // data: {
    //   title: 'Contact SVESPL | HVAC Contractor in Pune',
    //   description: 'Contact SVESPL in Viman Nagar, Pune for HVAC and MEP project enquiries, system installation, maintenance, cleanroom solutions and project estimates.'
    // }
  },

  { path: 'BUILDING_VENTILATION', component: BuildingventilationComponent },
  { path: 'ANNUAL_MAINTENANCE', component: AnnualmaintenceComponent },
  { path: 'HVAC_VITOUTS_REFOFIT', component: HvacvitoutsComponent },

  { path: 'ResidentialProject', component: ResidentialComponent },
  { path: 'CommercialProject', component: CommercialComponent },
  { path: 'IndustrialProject', component: IndustrialComponent },

  { path: 'MetroStationCasestudy', component: MetroComponent },
  { path: 'AmaoraCaseStudy', component: AmanoraComponent },
  { path: 'EmersonCaseStudy', component: EmersonComponent },

  { path: 'Sitemap', component: SitemapComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
