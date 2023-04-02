import { ThemeService } from './../services/theme.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faCircleUser,
  faGift,
  faMoon,
  faSun,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

type PageId = 'None' | 'Dashboard' | 'Transactions' | 'Calendar';

interface Page {
  pageId: PageId;
  location: string;
}

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
})
export class TopnavComponent {
  // Icons
  faBars = faBars;
  faGithub = faGithub;
  faGift = faGift;
  faCircleUser = faCircleUser;

  // Page Links
  pages: Page[] = [
    {
      pageId: 'Dashboard',
      location: '/dashboard',
    },
    {
      pageId: 'Transactions',
      location: '/transactions',
    },
    {
      pageId: 'Calendar',
      location: '/calendar',
    },
  ];
  selectedPage?: PageId;

  // Theme
  selectedThemeIcon: IconDefinition = faMoon;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  // PAGE

  isPageSelected(pageId: string): boolean {
    return this.selectedPage === pageId;
  }

  selectPage(pageId: PageId): void {
    this.selectedPage = pageId;
  }

  // THEME

  getThemeIcon(): IconDefinition {
    return this.selectedThemeIcon;
  }

  switchTheme(): void {
    this.themeService.switchMode();
    this.selectedThemeIcon = this.themeService.themeState.isLightMode ? faMoon : faSun;
  }
}
