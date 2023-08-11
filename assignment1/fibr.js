function fibr(num,sequence= [0,1]){
    if(num==0) return [0]
    if(num===1) return [0,1]
    if(sequence.length >= num){
        return sequence.slice(0,num);
    }else{
        const newNumber = sequence.at(-2) + sequence.at(-1)
        sequence.push(newNumber)
        return fibr(num, sequence)
    }
}

console.log('fib',fibr(8));