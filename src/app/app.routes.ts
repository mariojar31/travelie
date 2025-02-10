import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BoockingsComponent } from './features/boockings/boockings.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { PackagesComponent } from './features/packages/packages.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
    { path: 'dashboard', component: DashboardComponent,data: { title: 'Dashboard' } },
    { path: 'packages', component: PackagesComponent,data: { title: 'Packages' } },
    { path: 'bookings', component: BoockingsComponent,data: { title: 'Bookings' } },
    { path: 'calendar', component: CalendarComponent, data: { title: 'Calendar' } },
    { path: 'travelers', component: PackagesComponent,data: { title: 'Travelers' } },
    { path: 'guides', component: PackagesComponent,data: { title: 'Guides' } },
    { path: 'gallery', component: BoockingsComponent,data: { title: 'Gallery' } },
    { path: 'messages', component: CalendarComponent, data: { title: 'Messages' } },
    { path: 'deals', component: PackagesComponent,data: { title: 'Deals' } },
    { path: 'feedbacks', component: PackagesComponent,data: { title: 'Feedbacks' } },

    { path: '**', redirectTo: '/dashboard' }
];
