import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleOwnerComponent } from './single-owner/single-owner.component';
import { MultipleOwnerComponent } from './multiple-owner/multiple-owner.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [


       { path: '', redirectTo: 'landing-page' ,pathMatch:'full'},
       { path: 'single-owner', component: SingleOwnerComponent },
       { path: 'multiple-owner', component: MultipleOwnerComponent },
       { path: 'landing-page', component: LandingPageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
