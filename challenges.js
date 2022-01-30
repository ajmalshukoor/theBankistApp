  const factorial = (num) => {
    if (num === 0){
      return 1
    }else{
      return num*factorial(num-1)
    }
  }
  console.log(factorial(5))
  
  function comDiv(x, y) {
    if(!y){
      return x;
    }
    else{
      console.log(x%y)
      return comDiv(x, x%y)
    }
  }
  console.log(comDiv(34, 16))
  function isValidWalk(walk) {
    //insert brilliant code here
    let arr = [0,0]
    walk.forEach(x => {
      if(x == 'n') arr[0]++
      if(x == 's') arr[0]--
      if(x == 'e') arr[1]++
      if(x == 'w') arr[1]--
    })
    const b = walk.filter((a, i) => {
      if(i != 0) return walk[i] == walk[i-1]
    })
    if(walk.length == 10 && b.length == 0 && arr.every(mov => mov==0)){
      return true
    }
    else{
      return false
    }
  }
  
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
  
  function order(words){
    const split = words.split(' ').map((x, i, arr) => {
      if(x.match(/(\d+)/)) return [x,+(x.match(/(\d+)/)[0])]
      else if(x == '') return x
    }).sort((a, b) => a[1]-b[1]).map(x => x[0]).join(' ')
    return split
  }
  order("i2s Th1is a3 s4ample")

  function digital_root(n) {
    const a = String(n).split('').reduce((acc,num) =>acc+Number(num), 0)
    if(a < 10) return a
    return digital_root(a)
  }
  console.log(digital_root(56))

  function isPangram(string){
    const asc = string.toUpperCase().split('').sort()
    const alpha = Array.from(Array(26)).map((_, i) => String.fromCharCode(i+65))
    const val = alpha.reduce((acc, cur) => {
      if(asc.includes(cur)) acc++
      return acc
    }, 0)
    return val == 26? true : false
  }
  console.log(isPangram('The quick brown fsx jumps over the lazy dog'))
  
  function alphabetPosition(text) {
    const alpha = {}
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach((val, index) =>alpha[val] = index+1)
    const arr = []
    text.toLowerCase().split('').forEach((val) => {
      if(typeof alpha[val] == 'number')  arr.push(alpha[val])
    })
    text = arr.join(' ')
    return text;
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))

  function alphabetPosition(text) {
    return text.toUpperCase().match(/[a-z]/gi).map((char) => char.charCodeAt() - 64).join(' ');
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))

  
function findOdd(A) {
  //happy coding!
  const dict  = {}
  A.forEach(a => dict[a] ? dict[a] += 1 : dict[a] = 1)
  const arr = Object.values(dict).filter(a => a%2 != 0)
  const max = +Object.keys(dict).find(key => dict[key] === Math.max(...arr));

  return max;
}

console.log(findOdd([20,1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))