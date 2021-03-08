import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'tracks'
})
export class TracksPipe implements PipeTransform {

  constructor(private sanitizer : DomSanitizer){}

  transform(value: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.mixcloud.com/widget/iframe/'+value);
  }

}
