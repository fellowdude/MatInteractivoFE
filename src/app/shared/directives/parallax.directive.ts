import { Directive, Input, ElementRef, NgZone } from '@angular/core';

@Directive({
  selector: '[snrParallax]',
})
export class ParallaxDirective {
  @Input() ratio = 0.4;
  frameId: number;
  isVisible = true;
  elementTop = 0;
  elementHeight = 0;
  lastScrollY = 0;
  maxRange = 0;

  get viewportHeight() {
    return document.documentElement.clientHeight;
  }
  get viewportBottom() {
    return window.pageYOffset + this.viewportHeight;
  }

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone) {}

  ngOnDestroy() {
    if (this.frameId) window.cancelAnimationFrame(this.frameId);
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.style.willChange = 'transform';
    const { height } = this.el.nativeElement.getBoundingClientRect();
    this.maxRange = height * this.ratio;
    setTimeout(() => {
      // First pass to set transforms
      this.updateTransform();
      // Second pass with transforms setted
      this.updateTransform();
    }, 10);
    const options: IntersectionObserverInit = {
      root: null, // the viewport
      rootMargin: '200px',
      threshold: 0,
    };
    let observer = new IntersectionObserver((entries) => {
      this.isVisible = entries[0].intersectionRatio > 0;
    }, options);
    observer.observe(this.el.nativeElement);
    this.zone.runOutsideAngular(() => {
      this.update();
    });
  }

  update() {
    if (!this.isVisible || this.lastScrollY === window.pageYOffset) {
      this.frameId = window.requestAnimationFrame(this.update.bind(this));
      return;
    }
    this.updateTransform();

    this.lastScrollY = window.pageYOffset;
    this.frameId = window.requestAnimationFrame(this.update.bind(this));
  }

  updateTransform() {
    const { height, top } = this.el.nativeElement.getBoundingClientRect();
    this.elementTop = top + window.pageYOffset;
    this.elementHeight = height;

    const percentage = Math.min(
      100,
      Math.max(
        0,
        (this.viewportBottom - this.elementTop) /
          ((this.viewportHeight + this.elementHeight) / 100),
      ),
    ).toFixed(1);

    const translateY = (
      (Number(percentage) / 100) * this.maxRange -
      this.maxRange / 2
    ).toFixed(0);

    this.setTransform(1 + this.ratio, translateY);
  }

  setTransform(scale: string | number, translateY: string | number) {
    this.el.nativeElement.style.transform = `scale(${scale}) translate3d(0px,${translateY}px,0px)`;
  }
}
