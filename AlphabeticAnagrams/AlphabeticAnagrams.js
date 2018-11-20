function anagramPosition (string) {
  let unsortedString = string.split('');
  let sortedString = string.split('').sort((a,b)=> a>b);
  let permutations = 1;
  let letterValues = {};
  sortedString.forEach((e, i)=> {
    permutations *= sortedString.length-i;
    letterValues[e] = i;
    console.log(letterValues);
    console.log(permutations); 
  })
  let currentPosition = 0;
  let remainingPermutations = permutations;
  let tempUnsorted = unsortedString.slice();
  let newMod = 0;
  let lastMod = 0;
  unsortedString.forEach((e, i) => {
    lastMod += newMod;
    remainingPermutations = remainingPermutations/(unsortedString.length-i);
    console.log(remainingPermutations);
    console.log(unsortedString);
    console.log(letterValues[e]);
    if (i>0) {
      console.log(letterValues[e]);
      console.log(letterValues[unsortedString[i-1-lastMod]])
      newMod = letterValues[e] > letterValues[unsortedString[i-1-lastMod]] ? -1 : 0;
    }
    console.log(newMod);
    console.log(letterValues[e] + newMod + lastMod);
    currentPosition += (letterValues[e] + newMod + lastMod)*remainingPermutations;
    console.log(currentPosition);
  })
  console.log(sortedString);
}

anagramPosition('adceb');
// anagramPosition('edcba');

/*
['a', 'd', 'c', 'e', 'b'];
[ 0 ,  3 ,  2 ,  4 ,  1 ];
['-1,  2,  1,  3,  0 *6', 
 '-1, -1,  1,  2,  0 *2',
 '-1, -1, -1,  1,  0 *1',
 ' 0, 12, 14, 15, 15 *0']

ABEDC
1:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (0 += 0 (first)) * (120/(5 - 0) = 24)
    (0)    
2:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (1 += -1 (1>0 (last))) * (24/(5-1) = 6)
    (0)
3:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (4 += -2 (4>1(last) for -1 and prevmod -1)) * (6/(5-2) = 2)
    (4)
4:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (3 += -2 (3<4(last) for 0 and prevmod -2)) * (2/(5-3) = 1)
    (1)
5:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (2 += -2 (2<3(last) for 0 and prevmod -2)) * (1/(5-4) = 1)
    (0)  

ADCEB
1:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (0 += 0 (first)) * (120/(5 - 0) = 24)
    (0)    A 0 -> 0
2:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (3 += -1 (3>0 (last))) * (24/(5-1) = 6)
    (12)   D 3 -> 2
3:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (2 += -1 (2<3(last) for 0 and prevmod -1)) * (6/(5-2) = 2)
    (2)    C 2 -> 1
4:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (4 += -2 (4>2(last) for -1 and prevmod -1)) * (2/(5-3) = 1)
    (1)    E 4 -> 1 
5:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (2 += -2 (2<3(last) for 0 and prevmod -2)) * (1/(5-4) = 1)
    (0)  

DCBAE
1:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (3 += 0 (first)) * (120/(5 - 0) = 24)
    (72)    D = 3 -> 3 i = 0
2:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (2 += 0 (2<3 (last))) * (24/(5-1) = 6)
    (12)   C = 2 -> 2
3:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (1 += 0 (1<2(last) for 0 and prevmod 0)) * (6/(5-2) = 2)
    (2)    B = 1 -> 1
4:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (0 += 0 (0<1(last) for 0 and prevmod 0)) * (2/(5-3) = 1)
    (0)    A = 0 -> 0 
5:  multiply letter value + x where x is last modifier + new modifier of 0 or -1 for less or equal and greater respectively * currentPerumations/(array.length - i)
    (4 += -4 (4>0(last) for -i and prevmod 0 )) * (1/(5-4) = 1)
    (0)    E = 4 -> 3



dabce 72
dabec 73
dacbe 74
daceb 75
daebc 76
daecb 77
dbace 78
dbaec 79
dbcae 80
dbcea 81
dbeac 82
dbeca 83
dcabe 84
dcaeb 85
dcbae 86
dcbea 87
dceab 88
dceba 89
deabc 90
deacb 91
debac 92
debca 93
decab 94
decba 95

    */





/*
['a', 'b', 'c', 'd', 'e'];
[ 0 ,  1 ,  2 ,  3 ,  4 ];
'0, 0, 0, 0, 0'
'0, 0, 0, 0, 0'
['a', 'e', 'b', 'c', 'd'];
[ 0 ,  4 ,  1 ,  2 ,  3 ];
['-1,  3,  0,  1,  2 *6', 
 '-1, -1,  0,  1,  2 *2',
 '-1, -1, -1,  0,  1 *1',
 ' 0, 18, 18, 18, 18 *0']
['a', 'b', 'e', 'd', 'c'];
[ 0 ,  1 ,  4 ,  3 ,  2 ];
['-1,  0,  3,  2,  1 *6', 
 '-1, -1,  2,  1,  0 *2',
 '-1, -1, -1,  1,  0 *1',
 ' 0, 0, 4, 5, 5 *0']


[['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'e', 'd', 'c']];
[[ 0 ,  1 ,  2 ,  3 ,  4 ], [ 0 ,  1 ,  4 ,  3 ,  2 ]];
['0*24 = 0'];
['a in test has value of 0, remove 0 from base. base shifts, test unshifted. remove 0 from test, test shifts']
[['b', 'c', 'd', 'e'], ['b', 'e', 'd', 'c']];
[[ 0 ,  1 ,  2 ,  3 ], [ 0 ,  3 ,  2 ,  1 ]];
['0*24 = 0', '0*6']
[['c', 'd', 'e'], ['e', 'd', 'c']];
[[ 0 ,  1 ,  2 ], [ 2 ,  1 ,  0 ]];
['0*24 = 0', '0*6 = 0', '2*2 = 4'];
[['c', 'd'], ['d', 'c']];
[[ 0 ,  1 ], [ 1 ,  0 ]];
['0*24 = 0', '0*6 = 0', '2*2 = 4', '1*1 = 1', '0+0+4+1 = 5'];



[['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'e', 'd', 'c']];
[[ 0 ,  1 ,  2 ,  3 ,  4 ], [ 0 ,  1 ,  4 ,  3 ,  2 ]];
['0*24 = 0']
[['b', 'c', 'd', 'e'], ['b', 'e', 'd', 'c']];
[[ 0 ,  1 ,  2 ,  3 ], [ 0 ,  3 ,  2 ,  1 ]];
['0*24 = 0', '0*6']
[['c', 'd', 'e'], ['e', 'd', 'c']];
[[ 0 ,  1 ,  2 ], [ 2 ,  1 ,  0 ]];
['0*24 = 0', '0*6 = 0', '2*2 = 4'];
[['c', 'd'], ['d', 'c']];
[[ 0 ,  1 ], [ 1 ,  0 ]];
['0*24 = 0', '0*6 = 0', '2*2 = 4', '1*1 = 1', '0+0+4+1 = 5'];
*/
