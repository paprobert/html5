import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CourseComponent} from "./course/course.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: 'fooldal',
    component: HomeComponent,
  },
  {
    path: 'kurzus',
    component: CourseComponent,
  },
  {
    path: 'kapcsolat',
    component: ContactComponent,
  },
	{
		path: '',
		redirectTo: '/fooldal',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
