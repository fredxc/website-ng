import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-testimonials",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div class="container mx-auto px-6">
        <h2
          class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Testimonials
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (testimonial of testimonials; track testimonial.author) {
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              "{{ testimonial.text }}"
            </p>
            <div class="flex items-center">
              <img
                [src]="testimonial.avatar"
                [alt]="testimonial.author"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  {{ testimonial.author }}
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ testimonial.position }}
                </p>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: "Working with Frederico was an absolute pleasure. His attention to detail and technical expertise transformed our project.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      text: "Exceptional developer who consistently delivers high-quality solutions. Would highly recommend!",
      author: "Michael Chen",
      position: "Product Manager, InnovateLab",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      text: "Frederico\u0027s expertise in Angular and frontend development helped us achieve our goals ahead of schedule.",
      author: "Emma Williams",
      position: "CEO, DigitalFirst",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];
}
