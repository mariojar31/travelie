import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrl: './custom-calendar.component.css',
  standalone: false
})
export class CustomCalendarComponent implements OnInit{
  weeks: any[] = [];
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  currentMonth: number=1;
  currentYear: number=2025;
  selectedStartDate: Date | null = null;
  selectedEndDate: Date | null = null;

  ngOnInit(): void {
    const date = new Date();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  generateCalendar(month: number, year: number): void {
    this.weeks = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    let week: any[] = [];
    for (let i = 0; i < startDay; i++) {
      week.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      week.push(new Date(year, month, i));
      if (week.length === 7) {
        this.weeks.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      this.weeks.push(week);
    }
  }

  changeMonth(offset: number): void {
    this.currentMonth += offset;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  selectDate(date: Date): void {
    if (!this.selectedStartDate || this.selectedEndDate) {
      this.selectedStartDate = date;
      this.selectedEndDate = null;
    } else {
      if (date > this.selectedStartDate) {
        this.selectedEndDate = date;
      } else {
        this.selectedEndDate = this.selectedStartDate;
        this.selectedStartDate = date;
      }
    }
  }

  isSelected(date: Date): boolean {
    return (
      (!!this.selectedStartDate && date.getTime() === this.selectedStartDate.getTime()) ||
      (!!this.selectedEndDate && date.getTime() === this.selectedEndDate.getTime())
    );
  }

  isInRange(date: Date): boolean {
    if (!this.selectedStartDate || !this.selectedEndDate) return false;
    return date >= this.selectedStartDate && date <= this.selectedEndDate;
  }

  isStartDate(date: Date): boolean {
    return !!this.selectedStartDate && date.getTime() === this.selectedStartDate.getTime();
  }

  isEndDate(date: Date): boolean {
    return !!this.selectedEndDate && date.getTime() === this.selectedEndDate.getTime();
  }
}
