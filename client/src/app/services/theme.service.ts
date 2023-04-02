import { Injectable } from '@angular/core';

interface ThemeState {
    isLightMode: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
    themeState: ThemeState;

    constructor() {
        this.themeState = {
            isLightMode: true
        }
    }

    switchMode(): void {
        this.themeState.isLightMode = !this.themeState.isLightMode;
    }
}
