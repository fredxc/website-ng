import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from "@angular/forms";
import { FooterComponent } from "../footer/footer.component";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent],
  template: `
    <section class="min-h-screen flex flex-col bg-gray-100">
      <div class="flex flex-col flex-1 items-center justify-center">
        <h2 class="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div class="w-full max-w-2xl">
          <form
            [formGroup]="contactForm"
            (ngSubmit)="onSubmit()"
            class="space-y-6"
            [@formAnimation]
          >
            <div>
              <label class="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                formControlName="name"
                class="w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                formControlName="email"
                class="w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Message</label>
              <textarea
                formControlName="message"
                rows="5"
                class="w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              [disabled]="!contactForm.valid"
              class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <app-footer />
    </section>
  `,
  animations: [
    trigger("formAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate(
          "0.5s cubic-bezier(0.35, 0, 0.25, 1)",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
  ],
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", Validators.required),
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Here you would typically send the form data to a backend service
    }
  }
}
