import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../services/theme.service";
import { LottieComponent, AnimationOptions } from "ngx-lottie";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, LottieComponent],
  template: `
    <section class="min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-6 text-center">
        <div class="mb-8" [@fadeIn]>
          <img
            src="assets/me.jpg"
            alt="Frederico Capanema"
            class="w-48 h-48 rounded-full mx-auto shadow-lg"
          />
        </div>
        <h1
          class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          [@fadeIn]
        >
          From Pixels to Performance
        </h1>
        <p
          class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          [@fadeIn]="{ value: '', params: { delay: '200ms' } }"
        >
          I architect and engineer cutting-edge web/app experiences.
        </p>
        <div
          class="flex justify-center"
          [@fadeIn]="{ value: '', params: { delay: '400ms' } }"
        >
          <a
            href="#contact"
            class="border-2 border-slate-950 dark:border-white text-gray-900 dark:text-white px-8 py-3 rounded-lg bg- hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div
          class="w-12 h-12 opacity-70 absolute bottom-12 m-auto left-0 right-0"
        >
          <ng-container *ngIf="isDark$ | async; else lightAnimation">
            <ng-lottie
              [options]="darkModeOptions"
              [@fadeIn]="{ value: '', params: { delay: '600ms' } }"
            ></ng-lottie>
          </ng-container>
          <ng-template #lightAnimation>
            <ng-lottie
              [options]="lightModeOptions"
              [@fadeIn]="{ value: '', params: { delay: '600ms' } }"
            ></ng-lottie>
          </ng-template>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger("fadeIn", [
      transition(
        ":enter",
        [
          style({ opacity: 0, transform: "translateY(20px)" }),
          animate(
            "0.6s {{delay}} cubic-bezier(0.35, 0, 0.25, 1)",
            style({ opacity: 1, transform: "translateY(0)" })
          ),
        ],
        { params: { delay: "0ms" } }
      ),
    ]),
  ],
})
export class HeroComponent {
  isDark$ = this.themeService.isDark$;

  constructor(private themeService: ThemeService) {}

  lightModeOptions: AnimationOptions = {
    path: "assets/animations/scrolldown.json",
  };

  darkModeOptions: AnimationOptions = {
    path: "assets/animations/scrolldown-light.json",
  };
}
