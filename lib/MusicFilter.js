const musicFilter = (frequency, highValue, lowVAlue) => {
    // if(frequency >= 40 && frequency < 1000){
    //     return 40
    // }
    // else if(frequency >= 1000){
    //     return 1000
    // }

    const newWord = frequency.map(numbers =>{
        if(numbers <= 40){
            return 40
        }
        else{
            return numbers
        }
      
    })
   return newWord
}

module.exports = musicFilter