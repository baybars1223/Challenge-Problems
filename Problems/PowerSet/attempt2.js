// function powerSet (string) {
//   const powerSetSub = (inputArray, outputArray) => {
//     let base = inputArray[0];
    
//     let workArray = inputArray.slice();
//     workArray.forEach((e,i) => {
//       if (i !== 0) {
//         base = base + e;
//         outputArray.push(base);
//       }
//     })
//     // workArray.forEach((e, i) => {
//     //   let newWork = workArray.slice().splice(i, 1);
//     //   if(newWork.length > 1) {
//     //     outputArray = powerSetSub(newWork, outputArray);
//     //   }  
//     // })
//     workArray.splice(1,1);
//     if(workArray.length > 1) {
//       outputArray = powerSetSub(workArray, outputArray);
//     }
//     return outputArray;
//   }
//   arr = string.split('');
//   // console.log(arr);
//   arrNoDupl = new Set(arr);
//   // console.log(arrNoDupl);
//   inputArr = Array.from(arrNoDupl).sort()
//   // console.log(inputArr);
//   outputArr = [''];
//   inputArr.forEach((e, i, a) => {
//     outputArr.push(e);
//     console.log(a.slice(i))
//     outputArr = powerSetSub(a.slice(i), outputArr )
//     console.log('a.slice(i): ', a.slice(i), ' vs a.slice(i,i+1).concat(a.slice(i+2)): ', a.slice(i,i+1).concat(a.slice(i+2)))
//     outputArr = powerSetSub(a.slice(i,i+2).concat(a.slice(i+3)), outputArr)
    
//   })

//   return outputArr;
// }

function powerSet (string) {
  arr = string.split('');
  // console.log(arr);
  arrNoDupl = new Set(arr);
  // console.log(arrNoDupl);
  inputArr = Array.from(arrNoDupl).sort()
  // console.log(inputArr);
  outputArr = [''];

  function powerSetSubroutine(currentString, currentOutput, lastBase) {
    console.log(`Recursion depth is ${lastBase.length}. 
      Input params are currentString: ${currentString}, 
      lastBase: ${lastBase} `);
    // newDepth = depth + 1
    let base = lastBase;
    let output = currentOutput;
    let sstring = currentString;
    // console.log(`${sstring} is string. currentString is: ${currentString}`);
    output.push(base);
    // if (sstring.length-base.length>0) {
    //   sstring.forEach((e,i,a) => {
        // console.log(e);
        // let newBase = base + e;
        // console.group(`${output} will change to the result of powerSetSubroutine(${sstring}, ${output}, ${newBase})`)
        // output = powerSetSubroutine(sstring.slice(1), output, newBase);
    //   })
    // }
    for(let i = 0; i < currentString.length; i++) {
      let newBase = base + sstring[i];
      console.log(`${newBase} = ${base} + ${sstring[i]} where sstring is ${sstring} and i is ${i}`);
      output = powerSetSubroutine(sstring.slice(1), output, newBase);
    }
    console.log(output.slice(0,10));
    return output;
  }
        sstring = sstring.slice(0, base.length).concat(sstring.slice(base.length+1));        

        console.group(`base is: ${base} and newBase is: ${newBase} so we'll run 
        ${sstring}.slice(0, ${base.length}.concat(${sstring}.slice(${base.length+1}))`);
        console.group(`is equal to ${sstring}`);
  outputArr = powerSetSubroutine(inputArr, outputArr, '', 0);

  return outputArr;
}



// add index 0
// if l > 1 recurse on de di dl dv  ( i 0 and 1, 2, 3, 4) ( 0+1       0+2     0+3    0+4 )
// if l > 2 recurse on dei del dev  ( i 0 1 and 2, 3, 4)  ( 0,1+2     0,1+3   0,1+4 )
// if l > 3 recurse on deil deiv    ( i 0 1 2 and 3, 4)   ( 0,1,2+3   0,1,2+4 )
// if l > 4 recurse on deilv        ( i 0 1 2 3 and 4)    ( 0,1,2,3,4 )

// Recursion Level 0: 
// base = input (ex: '')
// WORK add base to output
// if sstring.length (5) - length of base (0) > 0
//  LOOP over sstring - base = (deilv) WILL RUN 5 TIMES
//    LOOP 1: (element: d index: 0)
//    char = base + element ('' + d)
//    RECURSE with char (d), sstring (deilv), and output ('')
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv)
//    sstring = sstring.slice(1) deilv => eilv
//      -
//    LOOP 2: (element: e index: 1)
//    char = base + element ('' + e)
//    HOW TO MORPH sstring deilv to eilv
//    RECURSE with char (e), sstring (eilv), and output (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv, e, ei, eil, eilv, el, elv, ev)
//    sstring = sstring.slice(1) eilv => ilv
//      -
//    LOOP 3: (element: i index: 2)
//    char = base + element ('' + i)
//    HOW TO MORPH sstring deilv to ilv
//    RECURSE with char (i), sstring (ilv), and ouptut (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv, e, ei, eil, eilv, el, elv, ev)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv, e, ei, eil, eilv, el, elv, ev, i, il, ilv, iv)
//    sstring = sstring.slice(1) ilv => lv
//      -
//    LOOP 4: (element: l index: 3)
//    char = base + element ('' + l)
//    HOW TO MORPH sstring deilv to lv
//    RECURSE with char (l), sstring (lv), and output (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv, e, ei, eil, eilv, el, elv, ev, i, il, ilv, iv)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv, e, ei, eil, eilv, el, elv, ev, i, il, ilv, iv, l, lv)
//    sstring = sstring.slice(1) lv => v
//      -
//    LOOP 5: (element: v index: 4)
//    char = base + element ('' + v)
//    HOW TO MORPH sstring deilv to v
//    RECURSE with char (v), sstring (v), and output (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv, e, ei, eil, eilv, el, elv, ev, i, il, ilv, iv, l, lv)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv, e, ei, eil, eilv, el, elv, ev, i, il, ilv, iv, l, lv, v)
//    sstring = sstring.slice(1) v => ''
//  RETURN (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv, e, ei, eil, eilv, el, elv, ev, i, il, ilv, iv, l, lv, v)

// Recursion Level 1: d BASE: d, SSTRING: deilv, OUTPUT: ''
// base = inputChar (ex: d)
// WORK add base to output
// if sstring.length (5) - length of base (1) > 0
//   LOOP over sstring - base = (eilv) WILL RUN 4 TIMES
//    LOOP 1: (element: e index: 0)
//    pair = base + element (d + e)
//    RECURSE with pair (de), sstring (deilv), and output (d)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev)
//    sstring = sstring.slice(0,1).concat(sstring.slice(2)) deilv => dilv
//      -
//    LOOP 2: (element: i index: 1)
//    pair = base + element (d + i)
//    HOW TO MORPH sstring deilv to dilv
//    RECURSE with pair (di), sstring (dilv), and output (d, de, dei, deil, deilv, deiv, del, delv, dev)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div)
//    sstring = sstring.slice(0,1).concat(sstring.slice(2)) dilv => dlv
//      -
//    LOOP 3: (element: l index: 2)
//    pair = base + element (d + l)
//    HOW TO MORPH sstring deilv to dlv
//    RECURSE with pair (dl), sstring (dlv), and output (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv)
//    sstring = sstring.slice(0,1).concat(sstring.slice(2)) dlv => dv
//      -
//    LOOP 4: (element: v index: 3)
//    pair = base + element (d + v)
//    HOW TO MORPH sstring deilv to dv
//    RECURSE with pair (dv), sstring (dv), and (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv)
//    sstring = sstring.slice(0,1).concat(sstring.slice(2)) dv => d

// Recursion Level 2: d.e
// base = inputPair (ex: de)
// WORK add base to output
// if sstring.length (5) - length of base (2) > 0
//   LOOP over sstring - base (ilv) WILL RUN 3 TIMES
//    LOOP 1: (element: i index: 0)
//    triplet = base + element (de + i)
//    RECURSE with triplet (dei), sstring (deilv), and output (d, de)
//    get back from recursing with (d, de, dei, deil, deilv, deiv)
//    sstring = sstring.slice(0,2).concat(sstring.slice(3)) deilv => delv
//      -
//    LOOP 2: (element: l index: 1)
//    triplet = base + element (de + l)
//    HOW TO MORPH sstring deilv TO delv
//    RECURSE with triplet (del), sstring (delv), and output (de, de, dei, deil, deilv, deiv)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv)
//    sstring = sstring.slice(0,2).concat(sstring.slice(3)) delv => dev
//      -
//    LOOP 3: (element: v index: 2)
//    triplet = base + element (dev)
//    HOW TO MORPH sstring deilv to dev
//    RECURSE with triplet (dev), sstring (dev), and output (d, de, dei, deil, deilv, deiv, del, delv)
//    get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv, dev)
//    sstring = sstring.slice(0,2).concat(sstring.slice(3)) dev => de

// Recursion Level 3: d.e.i
// base = inputTriplet (ex: dei)
// WORK add base to output
// if sstring.length (5) - length of base (3) > 0
//   LOOP over sstring - base (lv) WILL RUN 2 TIMES
//    LOOP 1: (element: l index: 0)
//    quartet = base + element (dei + l)
//    RECURSE with quartet (deil), sstring (deilv), and output (d, de, dei)
//    get back from recursing with (de, de, dei, deil, deilv)
//    sstring = sstring.slice(0,2).concat(sstring.slice(3)) deilv => deiv
//      -
//    LOOP 2: (element: v index: 1)
//    quartet = base + element (dei + v)
//    HOW TO MORPH sstring deilv TO deiv
//    RECURSE with quartet (deiv), sstring (deiv), and output (d, de, dei, deil, deilv)
//    get back from recursing with (de, de, dei, deil, deilv, deiv)
// RETURN output (d, de, dei, deil, deilv, deiv)

// Recursion Level 4: d.e.i.l
// base = inputQuartet (ex: deil)
// WORK add base to output
// if sstring.length (5) - length of base (4) > 0
//   LOOP over sstring - base (v) WILL RUN 1 TIMES
//    LOOP 1: (element: v index: 0)
//    quartet = base + element (deil + v)
//    RECURSE with quintet (deilv), sstring (deilv), and output (de, de, dei, deil)
//    get back from recursing with (de, de, dei, deil, deilv)
// RETURN output (d, de, dei, deil, deilv)

// Recursion Level 5: d.e.i.l.v
// base = inputQuintet (ex: deilv)
// WORK add base to output
// IF sstring.length (5) - length of base (5) > 0
//   NOPE
// RETURN output (d, de, dei, deil, deilv)

// Recursion Level 4: d.e.i.v
// base = inputQuartet (ex: deiv)
// WORK add base to output
// if sstring.length (4) - length of base (4) > 0
//   NOPE
// RETURN output (d, de, dei, deil, deilv, deiv)

// Recursion Level 3: d.e.l
//  base = inputTriplet (ex: del)
//  WORK add base to output
//  if sstring.length (4) - length of base (3) > 0
//    LOOP over sstring - base (v) WILL RUN 1 TIMES
//      LOOP 1: (element: v index: 0)
//      quartet = base + element (del + v)
//      RECURSE with quartet (delv), sstring (delv), and output (d, de, dei, deil, deilv, deiv, del)
//      get back from recursing with (d, de, dei, deil, deilv, deiv, del, delv)
//  RETURN output (d, de, dei, deil, deilv, deiv, del, delv)

// Recursion Level 4: d.e.l.v
//  base = inputQuartet (ex: delv)
//  WORK add base to output
//  if sstring.length (4) - length of base (4) > 0
//   NOPE
// RETURN output (d, de, dei, deil, deilv, deiv, del, delv)

// Recursion Level 3: d.e.v
//  base = inputTriplet (ex: dev)
//  WORK add base to output
//  if sstring.length (3) - length of base (3) > 0
//    NOPE
//  RETURN output (d, de, dei, deil, deilv, deiv, del, delv, dev)

// Recursion Level 2: d.i
//  base = inputPair (ex: di)
//  WORK add base to output
//  if sstring.length (4) - length of base (2) > 0
//    LOOP over sstring - base (lv) WILL RUN 2 TIMES
//      LOOP 1: (element: l index: 0)
//      triplet = base + element (di + l)
//      RECURSE with triplet (dil), sstring (dilv), and output (d, de, dei, deil, deilv, deiv, del, delv, dev, di)
//      get back from recursion with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv)
//        -
//      LOOP 2: (element: v index: 1)
//      triplet = base + element (di + v)
//      HOW TO MORPH sstring dilv TO div
//      RECURSE with triplet (div), sstring (div), and output (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv)
//      get back from recursion with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div)
//  RETURN (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div)

// Recursion Level 3: d.i.l
//  base = inputTriplet (ex: dil)
//  WORK add base to output
//  if sstring.length (4) - length of base (3) > 0
//    LOOP over sstring - base (v) WILL RUN 1 TIMES
//      LOOP 1: (element: v index: 0)
//      quartet = base + element (dil + v)
//      RECURSE with quartet (dilv), sstring (dilv), and output (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil)
//      get back from recursion with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv)
//  RETURN (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv)

// Recursion Level 4: d.i.l.v
//  base = inputQuartet (ex: dilv)
//  WORK add base to output
//  if sstring.length (4) - length of base (4) > 0
//    NOPE
//  RETURN (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv)

// Recursion Level 3: d.i.v
//  base = inputTriplet (ex: div)
//  WORK add base to output
//  if sstring.length (3) - length of base (3) > 0
//    NOPE
//  RETURN (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div)

// Recursion Level 2: d.l
//  base = inputPair (ex: dl)
//  WORK add base to output
//  if sstring.length (3) - length of base (2) > 0
//    LOOP over sstring - base (v) WILL RUN 1 TIMES
//      LOOP 1: (element: v index: 0)
//      triplet = base + element (dlv)
//      RECURSE with triplet (dlv), sstring (dlv), and (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl)
//      get back from recursion with (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv)
//  RETURN (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv)

// Recursion Level 3: d.l.v
//  base = inputTriplet (ex: dlv)
//  WORK add base to output
//  if sstring.length (3) - length of base (3) > 0
//    NOPE
//  RETURN (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv)

// Recursion Level 2: d.v
//  base = inputPair (ex: dv)
//  WORK add base to output
//  if sstring.length (2) - length of base (2) > 0
//    NOPE
// RETURN (d, de, dei, deil, deilv, deiv, del, delv, dev, di, dil, dilv, div, dl, dlv, dv)

// console.log(powerSet('abracadabra'));
console.log(powerSet('devil'));