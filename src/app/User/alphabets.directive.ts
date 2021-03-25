import { Directive, ElementRef,HostListener } from '@angular/core';


@Directive({
  selector: '[alphabetsOnly]'
})
export class AlphabetsDirective {

  constructor(private ele:ElementRef) {
      
   }

   @HostListener('keypress',['$event'])
   onKeyPress(e:any){
        console.log(e); 
        var regex = /^[a-zA-Z ]*$/; 
        if(regex.test(e.key)){
            return true;
        }else{
            e.preventDefault();
           return false;
        }
   }

}
