import {
  state,
  style,
  trigger,
  animate,
  transition,
} from "@angular/animations";
import { Observable, timer } from "rxjs";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { map, takeWhile } from "rxjs/operators";
import { IntersectionObserverDirective } from "./intersection-observer.directive";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  template: `
    <section
      class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div class="container mx-auto px-6 max-w-screen-xl">
        <h2
          class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Get to know me more
        </h2>
        <div class="grid gap-6 w-full">
          <!-- Row 1 -->
          <div class="grid grid-cols-[7fr_3fr] gap-4 w-full">
            <div
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5"
              appIntersectionObserver
              (visible)="onVisible('element1')"
              [@fadeInUp]="{
                value: animations['element1'] ? 'visible' : 'hidden',
                params: { delay: '450ms' }
              }"
            >
              <h2 class="text-black text-xl font-bold">I'm Fred,</h2>
              <p class="text-gray-700 mt-4">
                As a seasoned Full Stack Developer, I blend my expertise in
                front-end and back-end technologies to create robust and
                user-centric web applications.
              </p>
              <p class="text-gray-700 mt-4">
                With a strong foundation in computer science and a keen eye for
                UI/UX design principles, I bring a holistic approach to every
                project.
              </p>
            </div>
            <div
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5 flex items-center justify-center"
              appIntersectionObserver
              (visible)="onVisible('element2')"
              [@fadeInUp]="{
                value: animations['element2'] ? 'visible' : 'hidden',
                params: { delay: '750ms' }
              }"
            >
              <img
                src="/assets/me-smiling.jpg"
                alt="Profile Picture"
                class="w-3/5 rounded-full"
              />
            </div>
          </div>

          <!-- Row 2 -->
          <div class="grid grid-cols-[2fr_2fr_6fr] gap-4 w-full">
            <div
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5 text-center flex flex-col gap-2 justify-center"
              appIntersectionObserver
              (visible)="onVisible('element3')"
              [@fadeInLeft]="{
                value: animations['element3'] ? 'visible' : 'hidden',
                params: { delay: '1050ms' }
              }"
            >
              <h3 class="text-black text-6xl font-bold">
                <span>{{ countUp9$ | async }}</span
                >+
              </h3>
              <p class="text-gray-700 mb-2">Years of Coding</p>
            </div>
            <div
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5 text-center flex flex-col gap-2 justify-center"
              appIntersectionObserver
              (visible)="onVisible('element4')"
              [@fadeInBottom]="{
                value: animations['element4'] ? 'visible' : 'hidden',
                params: { delay: '600ms' }
              }"
            >
              <h3 class="text-black text-6xl font-bold">
                <span>{{ countUp26$ | async }}</span
                >+
              </h3>
              <p class="text-gray-700 mb-2">Completed Projects</p>
            </div>
            <div
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5"
              appIntersectionObserver
              (visible)="onVisible('element5')"
              [@fadeInRight]="{
                value: animations['element5'] ? 'visible' : 'hidden',
                params: { delay: '150ms' }
              }"
            >
              <p class="text-gray-700">
                I specialize in crafting visually stunning and user-friendly
                digital experiences. My services encompass intuitive interface
                design, user-centric experiences, and seamless navigation to
                elevate your project's success.
              </p>
            </div>
          </div>

          <!-- Row 3 -->
          <div class="grid grid-cols-[2fr_8fr] gap-4 w-full">
            <a
              href="https://github.com/fredxc"
              target="_blank"
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5 hover:shadow-lg transition-shadow duration-500 flex items-center justify-center"
              appIntersectionObserver
              (visible)="onVisible('element6')"
              [@fadeInBottom]="{
                value: animations['element6'] ? 'visible' : 'hidden',
                params: { delay: '300ms' }
              }"
            >
              <img
                src="github-icon.png"
                alt="GitHub"
                class="w-32 h-32 rounded-full border-2 border-gray-600"
              />
            </a>
            <div
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5 flex flex-col items-center justify-center"
              appIntersectionObserver
              (visible)="onVisible('element7')"
              [@fadeInBottom]="{
                value: animations['element7'] ? 'visible' : 'hidden',
                params: { delay: '900ms' }
              }"
            >
              <h3 class="text-black text-sm font-bold text-center mb-4">
                My Tech Stack
              </h3>
              <div class="flex items-center justify-center space-x-4">
                <img src="github-icon.png" alt="GitHub" class="w-10 h-10" />
                <img src="css-icon.png" alt="CSS" class="w-10 h-10" />
                <img src="html-icon.png" alt="HTML" class="w-10 h-10" />
                <img
                  src="typescript-icon.png"
                  alt="TypeScript"
                  class="w-10 h-10"
                />
                <img src="electron-icon.png" alt="Electron" class="w-10 h-10" />
                <img src="git-icon.png" alt="Git" class="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger("fadeInLeft", [
      state("hidden", style({ opacity: 0, transform: "translateX(-20px)" })),
      state("visible", style({ opacity: 1, transform: "translateX(0)" })),
      transition(
        "hidden => visible",
        animate("0.6s {{delay}} cubic-bezier(0.35, 0, 0.25, 1)")
      ),
    ]),
    trigger("fadeInRight", [
      state("hidden", style({ opacity: 0, transform: "translateX(20px)" })),
      state("visible", style({ opacity: 1, transform: "translateX(0)" })),
      transition(
        "hidden => visible",
        animate("0.6s {{delay}} cubic-bezier(0.35, 0, 0.25, 1)")
      ),
    ]),
    trigger("fadeInBottom", [
      state("hidden", style({ opacity: 0, transform: "translateY(20px)" })),
      state("visible", style({ opacity: 1, transform: "translateY(0)" })),
      transition(
        "hidden => visible",
        animate("0.6s {{delay}} cubic-bezier(0.35, 0, 0.25, 1)")
      ),
    ]),
    trigger("fadeInUp", [
      state("hidden", style({ opacity: 0, transform: "translateY(-20px)" })),
      state("visible", style({ opacity: 1, transform: "translateY(0)" })),
      transition(
        "hidden => visible",
        animate("0.6s {{delay}} cubic-bezier(0.35, 0, 0.25, 1)")
      ),
    ]),
  ],
})
export class AboutComponent {
  [key: string]: any;
  public animations: { [key: string]: boolean } = {
    element1: false,
    element2: false,
    element3: false,
    element4: false,
    element5: false,
    element6: false,
    element7: false,
  };

  public countUp9$!: Observable<number>;
  public countUp26$!: Observable<number>;

  private countUpDuration = 2000;

  public onVisible(element: string) {
    this.animations[element] = true;

    if (element === "element3")
      setTimeout(() => this.startCountUp(9, "countUp9$"), 1050);
    if (element === "element4")
      setTimeout(() => this.startCountUp(26, "countUp26$"), 600);
  }

  private startCountUp(targetNumber: number, propertyName: string) {
    const frameRate = 1000 / 60;
    const duration = this.countUpDuration;
    const totalFrames = duration / frameRate;

    this[propertyName] = timer(0, frameRate).pipe(
      map((frame) => Math.round((frame / totalFrames) * targetNumber)),
      takeWhile((value) => value <= targetNumber)
    );
  }
}
