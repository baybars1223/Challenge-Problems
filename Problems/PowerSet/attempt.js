function powerSet (string) {
  const powerSetSub = (inputArray, outputArray) => {
    let base = inputArray[0];
    
    let workArray = inputArray.slice();
    workArray.forEach((e,i) => {
      if (i !== 0) {
        base = base + e;
        outputArray.push(base);
      }
    })
    
    return outputArray;
  }
  arr = string.split('');
  // console.log(arr);
  arrNoDupl = new Set(arr);
  // console.log(arrNoDupl);
  inputArr = Array.from(arrNoDupl).sort()
  // console.log(inputArr);
  outputArr = [''];
  inputArr.forEach((e, i, a) => {
    outputArr.push(e);
    console.log(a.slice(i))
    outputArr = powerSetSub(a.slice(i), outputArr )
    // console.log('a.slice(i): ', a.slice(i), ' vs a.slice(i,i+1).concat(a.slice(i+2)): ', a.slice(i,i+1).concat(a.slice(i+2)))
    // outputArr = powerSetSub(a.slice(i,i+2).concat(a.slice(i+3)), outputArr)
    
  })

  return outputArr;
}

console.log(powerSet('abracadabra'));
console.log(powerSet('devil'));