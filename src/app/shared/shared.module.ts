import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';  
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MetricscardsComponent } from './components/metricscards/metricscards.component';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';
import { RevenueOverviewChartComponent } from './components/revenue-overview-chart/revenue-overview-chart.component';
import { TopDestinationsChartComponent } from './components/top-destinations-chart/top-destinations-chart.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NewsCardsComponent } from './components/news-cards/news-cards.component';
import { PackageCardsComponent } from './components/package-cards/package-cards.component';
import { TwoColumnLayoutComponent } from './components/two-column-layout/two-column-layout.component';
import { UserMessagesComponent } from './components/user-messages/user-messages.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MetricscardsComponent,
    ChartContainerComponent,
    RevenueOverviewChartComponent,
    TopDestinationsChartComponent,
    CalendarComponent,
    NewsCardsComponent,
    PackageCardsComponent,
    TwoColumnLayoutComponent,
    UserMessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    MetricscardsComponent,
    ChartContainerComponent,
    RevenueOverviewChartComponent,
    TopDestinationsChartComponent,
    CalendarComponent,
    NewsCardsComponent,
    PackageCardsComponent,
    TwoColumnLayoutComponent,
    UserMessagesComponent
  ]
})
export class SharedModule { }
