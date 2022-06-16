function findDuplicates(inputAsString){
    
    //first attempt at solution, maybe too bulky
    let duplicatesAsObj = inputAsString
    .toLowerCase()
    .split('')
    .reduce((accumulator, item)=>{
        if(!accumulator.hasOwnProperty(item)){
            accumulator[item] = 0;
        }
        accumulator[item]++;

    }, {});
    
    return Object.values(duplicatesAsObj)
    .filter(item=>item>1)
    .length;
    
    //second attempt at solution
}

function dnaStrand(inputAsString){
    const pairs = {
        'A':'T',
        'T':'A',
        'G':'C',
        'C':'G'
    };
    
    let dnaMainArr = inputAsString
    .split('')
    .map(element => pairs[element]);
    
    return dnaMainArr.join('')
}

function sortString(inputAsString){
    
    let strs = inputAsString
    .split(' ')
    .sort((a,b)=>a.length - b.length);
    
    return strs[0].length;
}

function orderTask(inputAsString){
    
    //first attempt
    function findDigit(word){
        let myRegex = /[0-9]/;
        return Number(myRegex.exec(word)[0]);
    }

    let result = ''
    if(inputAsString === ''){
        return result;
        
    }else{
        let myObjs = inputAsString
        .split(' ')
        .map(word=>({
            'name': word,
            'value': findDigit(word)
        }));
        
        let mySortedSentence = myObjs
        .sort((a,b)=>a.value-b.value);
        
        let result = '';
        for (const word of mySortedSentence) {
            result += `${word.name} `;
        }

        return result;
    }

    //second attempt
    // let myResult = '';

    // if(inputAsString === ''){
    //     return myResult;
    // }else{
    //     myResult = inputAsString
    //     .split(' ')
    //     .sort((a,b)=> findDigit(a) - findDigit(b))
    //     .join(' ');

    //     return myResult;
    // }
    
    //better phrasing
    return inputAsString === '' ? myResult : inputAsString
    .split(' ')
    .sort((a,b)=> findDigit(a) - findDigit(b))
    .join(' ');
}



