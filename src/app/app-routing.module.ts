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

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: 'HVAC & MEP Contractor in Pune | Siddhivinayak Engineering Solutions ' },
  { path: 'About', component: AboutComponent, title: 'About SVESPL - Punes trusted HVAC Contractor Since 2007' },
  { path: 'Services', component: ServicesComponent, title: 'HVAC & MEP Services - Installation,Design & Maintenance | SVESPL' },
  { path: 'Career', component: CareerComponent, title: "Jobs(List)| Siddhivinayak Engineering Solutions" },
  { path: 'Contact', component: ContactComponent, title: 'Contact SVESPL - HVAC Contractor Pune-9604156757' },

  { path: 'Blog', component: BlogComponent },
  { path: 'Projects', component: ProjectsComponent },

  {path:'Air_Cooled&Water-Cooled_Chiller_Plants', component:AircooledComponent},
  {path:'VRVVRF_SYSTEMS', component:VrvComponent},
  {path:'TURNKEY_CLEAN_ROOM_SOLUTION', component:TurnkeycleanroomComponent},
  {path:'EVAPORATIVE_COOLING',component:EvaporativeComponent},
  {path:'FORCED_VENTILATION',component:ForcedventilationComponent},
  {path:'COMFORT_AIR_CONDITIONING',component:ComfortairComponent},
  {path:'PRECISION_AIR_CONDITIONING',component:PrecisionairComponent},

  { path: 'ResidentialProejct', component: ResidentialComponent },
  { path: 'CommercialProejct', component: CommercialComponent },
  { path: 'IndustrialProejct', component: IndustrialComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
