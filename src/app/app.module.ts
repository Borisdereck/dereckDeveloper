import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';
import { routes } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { ServicesService } from "./services/services.service";
import { CountriesInfoService } from "./services/countries-info.service";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ToDoComponent } from './to-do/to-do.component';
import { EmployeServiceComponent } from './employe-service/employe-service.component';
import { CountriesComponent } from './countries/countries.component';
import { ModalComponent } from './modal/modal.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ParameterComponent } from './parameter/parameter.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactFormComponent,
    ToDoComponent,
    EmployeServiceComponent,
    CountriesComponent,
    ModalComponent,
    TooltipComponent,
    ParameterComponent,
    InputOutputComponent,
    AngularFormsComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule, 
    HttpModule
  ],
  providers: [ServicesService, CountriesInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
