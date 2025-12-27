import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Added for 2025 API standards
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Optimized Zone handling for 2025
    provideZoneChangeDetection({ eventCoalescing: true }), 
    
    // Router with Input Binding (allows signals to capture URL params automatically)
    provideRouter(routes, withComponentInputBinding()), 
    
    // Best for 2025: Uses the modern 'fetch' API instead of old XHR
    provideHttpClient(withFetch()), 
    
    // Async animations to keep your 'Initial Bundle' under that 1MB budget
    provideAnimations(), // <-- correct
  ]
};
