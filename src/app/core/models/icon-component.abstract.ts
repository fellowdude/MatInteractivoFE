import { Input } from '@angular/core';

export abstract class IconComponent {
  @Input() width = 30;
  @Input() height = 30;
  @Input() isCursorPointer = true;
  // TODO Add fill/stroke etc
}
