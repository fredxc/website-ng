import { ThemeService } from "./services/theme.service";
import { CommonModule, AsyncPipe } from "@angular/common";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
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
      <div class="h-screen bg-white dark:bg-black">
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

  private currentSectionIndex = 0;

  constructor(private themeService: ThemeService) {}

  ngAfterViewInit(): void {
    // Listen to wheel events for smooth scroll snapping with timeout
    this.mainContainer.nativeElement.addEventListener("wheel", (event) =>
      this.onWheel(event)
    );
  }

  private isScrolling = false; // Flag to lock scrolling during transitions

  onWheel(event: WheelEvent): void {
    if (this.isScrolling) {
      return; // Ignore the event if a scroll is already in progress
    }

    this.isScrolling = true; // Lock scrolling
    event.preventDefault(); // Prevent default scrolling behavior

    // Determine scroll direction
    const direction = event.deltaY > 0 ? 1 : -1;

    // Calculate the next section index
    this.currentSectionIndex = Math.min(
      Math.max(0, this.currentSectionIndex + direction),
      this.sections.length - 1
    );

    console.log("SECTION VALUE", this.currentSectionIndex);

    // Smoothly scroll to the next section
    const targetSection = this.sections.toArray()[this.currentSectionIndex];
    targetSection.nativeElement.scrollIntoView({
      behavior: "smooth",
    });

    // Release scroll lock after the transition (timeout matches scroll duration)
    setTimeout(() => {
      this.isScrolling = false;
    }, 500); // Adjust duration to match your smooth scroll behavior
  }
}
