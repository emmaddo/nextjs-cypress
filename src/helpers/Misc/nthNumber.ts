 export const nthNumber = (inputNumber: number): string=>{
     if(inputNumber == 1 || inputNumber == 21 || inputNumber == 31){
        return "st";
     }
     else if(inputNumber == 2 || inputNumber == 22){
      return "nd";  
    }
    else if(inputNumber == 3 || inputNumber == 23){
        return "rd";
    }
    else if((inputNumber > 3) && (inputNumber < 21) || (inputNumber > 23) &&  (inputNumber < 31)){
        return "th";
    }
    else{
        return "";
    }
    };