const musicFilter = (frequency, highValue, lowValue) => {


   
    const newWord = frequency.map(numbers =>{
        if(lowValue == null || lowValue == undefined){
            lowValue = 40;
        }
        if(highValue == null || highValue == undefined ){
             highValue = 1000
        }
        if(numbers < lowValue){
            return lowValue
        }
        else if(numbers > highValue){
            return highValue
        }
        else{
            return numbers
        }
    
    })
  
   return newWord
}

module.exports = musicFilter