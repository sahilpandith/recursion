function fibs(num){
  const series = [0,1];
  if(num==0)
    return [0];
  if(num===1)
    return [0,1];
  let t = 2 
  while(t!=num){
    series.push(series[t-2] + series[t-1])
    t++;
  }
  return series
}

console.log('fib',fibs(8));
