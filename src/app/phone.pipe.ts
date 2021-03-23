import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'formatphone'
})
export class PhoneFormatPipe implements PipeTransform{
    transform(input:string,condition:string) {
       if(input.length==10){
           if(condition=='USA'){
            let firstThree= input.substring(0,3);
            let secondThree= input.substring(3,6);
            let lastFour= input.substring(6,10);
            return firstThree+"-"+secondThree+"-"+lastFour;
           }
           else if(condition=='IN'){
            let firstFive= input.substring(0,5);
            let secondFive= input.substring(5,10);
            return firstFive+"-"+secondFive;
           }
       
       } 
       return input;
    }
}