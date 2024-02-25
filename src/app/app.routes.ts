import { Routes } from '@angular/router';
import { PartnersView } from './features/partners/partnersView.component';
import { SurveyViewComponent } from './features/survey/components/survey-view.component';

export const routes: Routes = [
  { path: 'partners', component: PartnersView },
  { path: 'survey', component: SurveyViewComponent },
];
