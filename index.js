// Add your functions here
let map = function(srcArr, cb){
    let newArr = []
    srcArr.forEach(num => {
        newArr.push(cb(num))
    })
    return newArr
}

let reduce = function(srcArr, sp = 0){
  let tot = sp
  srcArr.forEach(num =>{
    tot = tot + num
  })
  return tot
}
