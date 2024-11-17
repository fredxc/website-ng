import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <h3 class="text-xl font-bold">Let's Connect</h3>
            <p class="mt-2 text-gray-400">Open for opportunities and collaboration</p>
          </div>
          <div class="flex space-x-6">
            <a href="https://github.com" target="_blank" class="hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" class="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" class="hover:text-blue-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {{ currentYear }} Portfolio. Built with Angular.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}