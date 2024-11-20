import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { trigger, transition, style, animate } from "@angular/animations";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="fixed w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm shadow-sm z-50"
    >
      <nav class="container mx-auto px-6 py-4 max-w-screen-xl">
        <div class="flex items-center justify-between">
          <a href="#">
            <h1
              class="text-2xl leading-6 font-bold text-gray-900 dark:text-white"
            >
              Frederico Capanema
            </h1>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Frontend Specialist
            </p>
          </a>
          <div class="flex items-center space-x-8">
            <ul class="flex space-x-8">
              <li
                *ngFor="let item of menuItems"
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
                [@fadeSlide]
              >
                <a [href]="item.href">{{ item.label }}</a>
              </li>
            </ul>
            <button
              (click)="toggleTheme()"
              class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors"
              [@rotate]="(isDark$ | async) ? 'dark' : 'light'"
            >
              <span class="text-xl">{{ (isDark$ | async) ? "🌙" : "☀️" }}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  animations: [
    trigger("fadeSlide", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(-10px)" }),
        animate(
          "0.3s ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
    trigger("rotate", [
      transition("light => dark", [
        animate("0.5s ease-out", style({ transform: "rotate(360deg)" })),
      ]),
      transition("dark => light", [
        animate("0.5s ease-out", style({ transform: "rotate(-360deg)" })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  isDark$ = this.themeService.isDark$;

  menuItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
