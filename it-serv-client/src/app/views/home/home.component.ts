import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Animations
      const observerX = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        });
      });

      const observerY = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show-y');
        });
      });

      const hiddenX = document.querySelectorAll('.hidden');
      const hiddenNegativeX = document.querySelectorAll('.hidden-x');
      const hiddenY = document.querySelectorAll('.hidden-y');

      hiddenX.forEach((el) => observerX.observe(el));
      hiddenNegativeX.forEach((el) => observerX.observe(el));
      hiddenY.forEach((el) => observerY.observe(el));
    }
  }
}
