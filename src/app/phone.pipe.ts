import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'formatphone'
})
export class PhoneFormatPipe implements PipeTransform{
    transform(input:string) {
       if(input.length==10){
        let firstThree= input.substring(0,3);
        let secondThree= input.substring(3,6);
        let lastFour= input.substring(6,10);
        return firstThree+"-"+secondThree+"-"+lastFour;
       } 
       return input;
    }
}