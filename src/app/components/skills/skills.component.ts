import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          @for (skill of skills; track skill.name) {
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                 [@skillAnimation]>
              <div class="text-4xl mb-4">{{ skill.icon }}</div>
              <h3 class="text-lg font-semibold">{{ skill.name }}</h3>
              <div class="mt-2 h-2 w-full bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" 
                     [style.width.%]="skill.level"></div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger('skillAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('0.3s cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: '⚡', level: 90 },
    { name: 'TypeScript', icon: '📝', level: 85 },
    { name: 'RxJS', icon: '🔄', level: 80 },
    { name: 'HTML/CSS', icon: '🎨', level: 95 },
    { name: 'JavaScript', icon: '🟨', level: 90 },
    { name: 'Git', icon: '📦', level: 85 },
    { name: 'Testing', icon: '🧪', level: 75 },
    { name: 'UI/UX', icon: '🎯', level: 80 }
  ];
}