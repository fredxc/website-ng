import { Component } from "@angular/core";
import { ThemeService } from "./services/theme.service";
import { CommonModule, AsyncPipe } from "@angular/common";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div [class.dark]="isDark$ | async" class="dark-mode-transition">
      <div class="min-h-screen bg-white dark:bg-black">
        <app-header />
        <main>
          <app-hero />
          <app-about />
          <app-projects />
          <app-testimonials />
          <app-contact />
        </main>
        <app-footer />
      </div>
    </div>
  `,
})
export class AppComponent {
  isDark$ = this.themeService.isDark$;

  constructor(private themeService: ThemeService) {}
}
