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
    
    let sortedStrs = inputAsString
    .split(' ')
    .sort((a,b)=>a.length - b.length);
    
    return sortedStrs[0].length;
}

