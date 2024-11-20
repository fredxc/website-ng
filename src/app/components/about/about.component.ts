import {
  Component,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from "@angular/core";
import { gsap } from "gsap";
import { CommonModule } from "@angular/common";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
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
            <div class="bg-white rounded-md p-8 shadow ring-1 ring-black/5">
              <h2 class="text-black text-xl font-bold">I'm Mouayed,</h2>
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
            >
              <img
                src="profile-picture.jpg"
                alt="Profile Picture"
                class="w-32 h-32 rounded-full border-2 border-gray-600"
              />
            </div>
          </div>

          <!-- Row 2 -->
          <div class="grid grid-cols-[2fr_2fr_6fr] gap-4 w-full">
            <div
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5 text-center flex flex-col gap-2 justify-center"
            >
              <h3 class="text-black text-6xl font-bold">
                <span #countUp>10</span>+
              </h3>
              <p class="text-gray-700 mb-2">Years of Coding</p>
            </div>
            <div
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5 text-center flex flex-col gap-2 justify-center"
            >
              <h3 class="text-black text-6xl font-bold">
                <span #countUp>20</span>+
              </h3>
              <p class="text-gray-700 mb-2">Completed Projects</p>
            </div>
            <div class="bg-white rounded-md p-8 shadow ring-1 ring-black/5">
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
            >
              <img
                src="github-icon.png"
                alt="GitHub"
                class="w-32 h-32 rounded-full border-2 border-gray-600"
              />
            </a>
            <div
              class="bg-white rounded-md p-8 shadow ring-1 ring-black/5 flex flex-col items-center justify-center"
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
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren("countUp") countElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.initCountUpAnimations();
  }

  private initCountUpAnimations() {
    this.countElements.forEach((element) => {
      const target = parseInt(element.nativeElement.textContent, 10);

      gsap.from(element.nativeElement, {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: element.nativeElement,
          start: "top 80%",
          once: true,
        },
      });
    });
  }
}
