import {
  provideLottieOptions,
  provideCacheableAnimationLoader,
} from "ngx-lottie";
import { AppComponent } from "./app/app.component";
import { ThemeService } from "./app/services/theme.service";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideLottieOptions({
      player: () => import("lottie-web"),
    }),
    provideCacheableAnimationLoader(),
    ThemeService,
  ],
});
