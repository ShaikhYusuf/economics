import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';

export const routes: Routes = [
  {path: 'intro', component: IntroComponent},
  {path: 'les1', component: Lesson1Component},
  {path: 'les2', component: Lesson2Component},
  {path: 'les3', component: Lesson3Component},

];
