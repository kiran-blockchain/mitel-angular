import { Directive, ElementRef,HostListener } from '@angular/core';


@Directive({
  selector: '[allowPattern]'
})
export class AlphabetsDirective {

  constructor(private ele:ElementRef) {
      
   }
   @HostListener('keypress',['$event'])
   onKeyPress(e:any){
        console.log(e); 
        console.log(this.ele.nativeElement.getAttribute('pattern'));
        var regex = new RegExp(this.ele.nativeElement.getAttribute('pattern'));
        if(regex.test(e.key)){
            return true;
        }else{
            e.preventDefault();
           return false;
        }
   }

}
