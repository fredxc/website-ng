import { ThemeService } from "./services/theme.service";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { CommonModule, AsyncPipe, Location } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewChild,
} from "@angular/core";

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
  ],
  template: `
    <div [class.dark]="isDark$ | async" class="dark-mode-transition">
      <div class="h-screen bg-white dark:bg-slate-950">
        <app-header />
        <main class="h-screen" #mainContainer>
          <app-hero #section id="home"></app-hero>
          <app-about #section id="about"></app-about>
          <app-projects #section id="projects"></app-projects>
          <app-testimonials #section id="testimonials"></app-testimonials>
          <app-contact #section id="contact"></app-contact>
        </main>
      </div>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  isDark$ = this.themeService.isDark$;

  @ViewChildren("section", { read: ElementRef })
  sections!: QueryList<ElementRef>;
  @ViewChild("mainContainer", { static: true })
  mainContainer!: ElementRef<HTMLElement>;

  private isScrolling = false;
  private currentSectionIndex = 0;
  private observer!: IntersectionObserver;

  constructor(private themeService: ThemeService, private location: Location) {}

  ngAfterViewInit(): void {
    this.mainContainer.nativeElement.addEventListener("wheel", (event) =>
      this.onWheel(event)
    );

    const sectionElements = this.sections.toArray().map((s) => s.nativeElement);

    // URL section update observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.currentSectionIndex = sectionElements.indexOf(entry.target);
            const sectionId = entry.target.id;
            this.updateURL(sectionId);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    sectionElements.forEach((element) => this.observer.observe(element));
  }

  private updateURL(sectionId: string): void {
    this.location.replaceState(`#${sectionId}`);
  }

  // Snap scroll on wheel
  onWheel(event: WheelEvent): void {
    if (this.isScrolling) {
      event.preventDefault();
      return;
    }

    this.isScrolling = true;
    event.preventDefault();

    const direction = event.deltaY > 0 ? 1 : -1;

    if (
      (this.currentSectionIndex < 4 && direction === 1) ||
      (this.currentSectionIndex > 0 && direction === -1)
    )
      this.currentSectionIndex += direction;

    const targetSection = this.sections.toArray()[this.currentSectionIndex];
    targetSection.nativeElement.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      this.isScrolling = false;
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
