import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.title) {
            <div class="bg-white rounded-lg shadow-lg overflow-hidden" [@projectAnimation]>
              <img [src]="project.image" [alt]="project.title" class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 mb-4">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2">
                  @for (tech of project.technologies; track tech) {
                    <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('projectAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with Angular and NgRx',
      image: 'https://picsum.photos/seed/1/800/600',
      technologies: ['Angular', 'NgRx', 'TailwindCSS']
    },
    {
      title: 'Task Management App',
      description: 'Real-time task management application with drag-and-drop',
      image: 'https://picsum.photos/seed/2/800/600',
      technologies: ['Angular', 'Firebase', 'RxJS']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive dashboard with real-time data visualization',
      image: 'https://picsum.photos/seed/3/800/600',
      technologies: ['Angular', 'D3.js', 'TypeScript']
    }
  ];
}