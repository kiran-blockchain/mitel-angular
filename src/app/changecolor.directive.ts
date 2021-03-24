import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private ele:ElementRef) {
      this.ele.nativeElement.style="color:red;"

   }

}
