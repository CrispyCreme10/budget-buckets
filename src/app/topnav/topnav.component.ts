import { Component, ElementRef, ViewChild } from '@angular/core';
import { faBars, faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';

type PageId = "Dashboard" | "Transactions" | "Calendar";

interface Page {
    pageId: PageId,
    location: string
}

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
    // Icons
    faBars = faBars;

    // Page Links
    pages: Page[] = [
        {
            pageId: "Dashboard",
            location: "/dashboard"
        },
        {
            pageId: "Transactions",
            location: "/transactions"
        },
        {
            pageId: "Calendar",
            location: "/calendar"
        }
    ]
    selectedPage: PageId = "Dashboard";
    
    // Theme
    selectedThemeIcon: IconDefinition = faMoon;

    constructor() {}

    ngOnInit(): void {

    }

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
        this.selectedThemeIcon = this.selectedThemeIcon === faSun ? faMoon : faSun;
    }
}
