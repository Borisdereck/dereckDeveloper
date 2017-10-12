import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ToDoComponent } from "./to-do/to-do.component";
import { AppComponent } from "./app.component";
import { EmployeServiceComponent } from "./employe-service/employe-service.component";
import { CountriesComponent } from "./countries/countries.component";
import { ModalComponent } from "./modal/modal.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { ParameterComponent } from "./parameter/parameter.component";



export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'component', component: ContactFormComponent,
    children: [
      { path: 'modal', component: ModalComponent },
      {
        path: 'tooltip', component: TooltipComponent,
        children:[
          { path: 'type/:selectecIde', component: ParameterComponent }
        ]
      }
    ]
  },
  { path: 'to-do', component: ToDoComponent },
  { path: 'employe', component: EmployeServiceComponent },
  { path: 'countries', component: CountriesComponent }
]; 
