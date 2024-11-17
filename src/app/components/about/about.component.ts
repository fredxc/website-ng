import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div class="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-6">
          <p>
            With over a decade of experience in frontend development, I specialize in creating performant and scalable web applications. My expertise lies in Angular and modern web technologies.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating intuitive user experiences that make a difference.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div class="text-center">
              <h3 class="text-4xl font-bold text-gray-900 dark:text-white">10+</h3>
              <p class="text-sm mt-2">Years Experience</p>
            </div>
            <div class="text-center">
              <h3 class="text-4xl font-bold text-gray-900 dark:text-white">50+</h3>
              <p class="text-sm mt-2">Projects Completed</p>
            </div>
            <div class="text-center">
              <h3 class="text-4xl font-bold text-gray-900 dark:text-white">30+</h3>
              <p class="text-sm mt-2">Happy Clients</p>
            </div>
            <div class="text-center">
              <h3 class="text-4xl font-bold text-gray-900 dark:text-white">15+</h3>
              <p class="text-sm mt-2">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}