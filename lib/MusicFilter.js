const musicFilter = (frequency, highValue, lowVAlue) => {
    // if(frequency >= 40 && frequency < 1000){
    //     return 40
    // }
    // else if(frequency >= 1000){
    //     return 1000
    // }

    const newWord = frequency.map(numbers =>{
        if(numbers < lowVAlue){
            return lowVAlue
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