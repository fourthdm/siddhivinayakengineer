import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SliderComponent } from './pages/slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelinesComponent } from './pages/timelines/timelines.component';
import { CommonModule } from '@angular/common';
import { ResidentialComponent } from './projects/residential/residential.component';
import { IndustrialComponent } from './projects/industrial/industrial.component';
import { CommercialComponent } from './projects/commercial/commercial.component';
import { MapsComponent } from './pages/maps/maps.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AircooledComponent } from './solutions/aircooled/aircooled.component';
import { VrvComponent } from './solutions/vrv/vrv.component';
import { TurnkeycleanroomComponent } from './solutions/turnkeycleanroom/turnkeycleanroom.component';
import { EvaporativeComponent } from './solutions/evaporative/evaporative.component';
import { ForcedventilationComponent } from './solutions/forcedventilation/forcedventilation.component';
import { ComfortairComponent } from './solutions/comfortair/comfortair.component';
import { PrecisionairComponent } from './solutions/precisionair/precisionair.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    IndustriesComponent,
    ProjectsComponent,
    BlogComponent,
    CareerComponent,
    ContactComponent,
    SliderComponent,
    TimelinesComponent,
    ResidentialComponent,
    IndustrialComponent,
    CommercialComponent,
    MapsComponent,
    AircooledComponent,
    VrvComponent,
    TurnkeycleanroomComponent,
    EvaporativeComponent,
    ForcedventilationComponent,
    ComfortairComponent,
    PrecisionairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
