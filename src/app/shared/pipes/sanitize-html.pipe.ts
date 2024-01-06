import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// Returns the Html
@Pipe({
  name: 'sanitizeHtml',
})
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(readonly sanitizer: DomSanitizer) {}

  transform(value: string, clean?: boolean) {
    if (clean) return value.replace(/<.*?>/g, '');
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
