import {
  Output,
  OnDestroy,
  Directive,
  ElementRef,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "[appIntersectionObserver]",
  standalone: true,
})
export class IntersectionObserverDirective implements OnDestroy {
  @Output() public visible = new EventEmitter<void>();
  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) {
    this.createObserver();
  }

  private createObserver() {
    const options = {
      root: null,
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.visible.emit();
          this.observer.unobserve(this.element.nativeElement);
        }
      });
    }, options);

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
