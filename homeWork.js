////// ete arrayi index@ 2ic avela elementner@ het araj anel

function swap(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    //arr.reverse() EXAMPLE *1*
    const arr_2 = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = arr_2
    return arr
  }
}
//console.log(swap([1]))
//console.log(swap([1,2,3,4]))

////// aranc 3rd popoxakani leteri arjeqner@ texerov poxel

let a = 1,
    b = 2;

// a = a + b //a 3
// b = a - b //b 1
// a = a - b //a 2
[a, b] = [b, a]
// console.log(a,b)

////// getը վերադարձնի երկու arg մեկը arrayը մյուսը վերջինիս indexը, եթե indexը չկա բերի null 

const cities = ['moscow', 'london', 'berlin', 'porto'];

function get(array, index) {
  if (index < array.length) return array[index - 1];
  if (index > array.length) return null;
}
// console.log(get(cities, 1))
// console.log(get(cities, 2))

////// addPrefixը  վերադարձնի նոր array որտեղ namesի արժեքներն են դիմացը ավելացրած prefix, չփոխելով օրեգինալ arrayը

const names = ['john', 'smith', 'karl'];

function addPrefix(array, prefix) {
  const array_2 = []
  for (let i = 0; i < array.length; i++) {
    const array_3 = `${prefix} ${array[i]}`
    // const array_3 = `${prefix} ${array[i][0].toUpperCase() + array[i].slice(1)}` //եթե պետք լինի ամեն անունը մեծատառով սկսի
    array_2.push(array_3)
  }
  return array_2
}

const newNames = addPrefix(names, "Mr ")
// console.log(newNames)
// console.log(names)

////// function որը ամեն կանչելուց իրեն տրված arrayը շրջում է

const names_2 = ['john', 'smith', 'karl'];
const newNames_2 = array => array.reverse();
// (newNames_2(names_2));
// console.log(names_2);
// (newNames_2(names_2));
// console.log(names_2);

function nr(arr) {
  let rev = []
  for (let i = arr.length - 1; i >= 0; --i) {
    rev.push(arr[i])
  }
  return rev
}
//console.log(nr(names_2))

////// function որը գումարում է իրար arrayի այն արժեքնեը, որոնք առանց մնացորդի 3ի են բաժանվում 

const coll1 = [8, 9, 21, 19, 18, 22, 7];
const coll2 = [2, 0, 17, 3, 9, 15, 4];
const coll3 = []

function calculateSum(array) {
  let newSum = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) newSum += array[i];
  }
  console.log(newSum)
}

// calculateSum(coll1)
// calculateSum(coll2)
// calculateSum(coll3)

////// function որը վերադարձնում է arrayի միջին թվաբանական արժեքը

function calculateAverage(array) {
  let amountInt = 0,
    summa = 0,
    result;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      amountInt += 1
      summa += array[i];
    }
  }
  return result = summa / amountInt;
}
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
const temperatures2 = [36, 37.4, 39, 41, 36.6];

// console.log(calculateAverage(temperatures1))
// console.log(calculateAverage(temperatures2))

////// function որը ըստ arrayի առաջին արժեքի մնացորդի հաշվում է և վերադարձնում արժեքը

function getSameParity(array) {
  let newArray = [],
    sum = array[0] % 2;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === sum) newArray.push(array[i]);
  }
  return newArray;
}

// console.log(getSameParity([]))
// console.log(getSameParity([1, 2, 3]))
// console.log(getSameParity([1, 2, 8]))
// console.log(getSameParity([2, 2, 8]))

////// ամեն տողի առաջին տառը մեծացնում է 

const nameArrfull = ["aram lilit"],
  nameArr = ["karen", "anna"];

const nameArrfull_2 = nameArrfull.map((e) => {
  let wordSplit = Array.from(e.split(" "))
  let ceretrs = wordSplit.map(e => e[0].toUpperCase() + e.slice(1))
  return ceretrs
})

const nameArr_2 = nameArr.map(e => e[0].toUpperCase() + e.slice(1))

// console.log(nameArrfull_2)
// console.log(nameArr_2)

////// դաասակարգում ըստ հերթականության

const numbArr = [1, 50, 2, 65, 3, 48, 15, 48, 8, 200]
// console.log(numbArr.sort((a,b) => a-b))
//console.log(numbArr.sort((a,b) => b-a)) ////// նույնա ոնցոր վերջում ավելացվի ․reverse() 


////// arrayից վերձնել միայն սկզբի յոթ արժեքը

const nameArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const f1 = (array) => {
  let str = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 7) str += array[i]
  };
  return str
};

function f2(array) {
  return array.filter(e => e < 7);
};

// console.log(f1(nameArray))
// console.log(f2(nameArray))
// console.log(nameArray)

////// function որը stringի միջի թվերը իրար է գումարում և վերադարձնում ամբողջական արժեք 

const string = "550144"
const string_2 = (str) =>
  str.toString().split("").reduce((acc, it) => {
    return acc + +it
  }, 0);

function pluss(num) {
  let sum = 0
  let res = num.split("")
  for (val of res) {
    sum += +val
  }
  return sum
}
//console.log(pluss(string))
//console.log(string_2(string))

////// obj կոպի անելու 2 տարբերակ

const obj = {
  a: 1,
  b: 2
}
//const obj2 = Object.assign({}, obj)  
const obj2 = JSON.parse(JSON.stringify(obj))
obj.a = 4

// console.log(obj)
// console.log(obj2)

//////  function որը ստուգում է փակագծերի բալաանսը

const checkIsBalanced = (expression) => {
  const stack = [];
  for (const symbol of expression) {
    if (symbol === '(' || symbol === '[' || symbol === '{') {
      stack.push(symbol);
    } else if (symbol === ')' || symbol === ']' || symbol === '}') {
      if (!stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
//console.log(checkIsBalanced("][({})")) 

////// function որը գտնում է կրկնվող արժեքները

const checkArr = (arr1, arr2) => {
  return arr1.filter(e => arr2.includes(e))
}

function checkA(arr1, arr2, arr3) {
  for (let val1 of arr1) {
    for (let val2 of arr2) {
      if (val1 === val2) {
        arr3.push(val1)
      }
    }
  }
  return arr3
}

//console.log(checkArr([10,2,3,40],[10,1,2,5,40,82,50]))
//console.log(checkA([10,2,3,40],[10,1,2,5,40,82,50],[]))
// console.log(checkArr([],[]))

//////  չլուծված //////
const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];
// const [[lo,[nu,mu]]] = locations 
// console.log(lo,nu,mu)
function get(arg1, arg2) {
  const [lo, [nu, mu]] = arg1
  if (arg2 > nu || mu) {
    return lo
  }
  return null
}
//console.log(get(locations,500))


function getmax(arg) {
  let lo = 0
  for (let i = 0; i < arg.length; i++) {
    lo += arg[i + 1]
  }
  return lo
}
//console.log(getmax([10,2,2000,50,1]))

////// ամենամեծ աարժեքը

const namberArrayMax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let findeNamberArrayMax = (a) => {
  return Math.max.apply(null, a)
}
let findeNamberArrayMax_2 = Math.max(...namberArrayMax)
// console.log(findeNamberArrayMax_2)

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let start = test[0]
for (let i = 0; i < test.length; i++) {
  if (test[i] > start) {
    start = test[i]
  }
}
//console.log(start)

////// միացնել arrayնները

const flat = [1, 2, 3, 4]
const flat2 = [5, 6, [7, 8]]
//const flat3 =  flat.concat(flat2)
//const flat3 =  [...flat,...flat2]
const flat3 = [...flat, ...flat2].flat() //flatը arrayի միջի arrayները բարձրացնում է մի մակարդակի 
//console.log(flat3)

//////  Ռեգիստրի ուղղում

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колек',
};

let copy = {}

function fc(obj, objCopy) {
  for (let val in obj) {
    objCopy[val] = obj[val][0].toUpperCase() +
      obj[val].slice(1).toLowerCase()
  }
}
fc(lesson, copy)

////// Fibanachiն ռեկուրսիայի միջոցով

function fibanachi(arg) {
  if (arg === 1) {
    return 1
  } else if (arg === 0) {
    return 0
  } else {
    return fibanachi(arg - 1) + fibanachi(arg - 2)
  }
}
let resultFib = fibanachi(8)
//console.log(resultFib)

////// object destructuring 

const objID = {
  name: "Harut",
  age: 27,
  male: true
};
let {
  name,
  age: year,
  isAdmin = false
} = objID

//console.log(name,year,isAdmin)

/////// մաքսիլամ աշխատավարձը ու աշխատավարձի տերը

let sal = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function salResult(obj) {
  let maxRes = 0
  let maxNam
  for (let val in obj) {
    if (maxRes < obj[val]) {
      maxRes = obj[val]
      maxNam = val
    }
  }
  console.log(maxRes)
  // console.log(maxNam)
  return maxNam
}
//console.log(salResult(sal))

function plus(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum
}
// console.log(plus(100))

let arr = [1, 2, 5, 2];

function arraySum(array) {
  let sum = 0
  for (let i = 0; i < array.length; ++i) {
    sum += array[i]
  }
  return sum
}

// console.log(arraySum(arr))

let one0 = 0
// let timerId = setInterval(() => console.log(one0++), 2000);


///////ինփութի արժեքը ռեալ ժամանակաում ցույց տալ

const input = document.querySelector(".input")
const result = document.querySelector(".result")

// input.addEventListener("input", (e) =>{
//   console.log(input.value)
//   result.innerHTML = input.value
// })

///////առայի հաջորդականություն

const gol = [1, 21, 3, 5, 6, 11, 1, 3]

//console.log(gol.sort((a,b) => b-a))


///////առայի ամենամեծ արժեքը

function max(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > sum) {
      sum = array[i]
    }
  }
  return sum
}

/////////բեքենդից ստանալ ինֆո

// const gameUrl = "https://bookbrainz.org/"
//  const gameDiv = document.querySelector(".anime")

// async function GOT(){
//   const result = await (await fetch(gameUrl)).json()

//   console.log(result)

// result.forEach(iteam => {
//   const newDiv = document.createElement("div")
//   newDiv.innerHTML= `<div>
//                           <img src="${iteam}"/>
//                           <h3>${iteam.firstName} ${iteam.lastName}</h3>
//                           <h4>${iteam.author}</h4>
//                     </div>`
//   gameDiv.appendChild(newDiv)
// })
// }

// GOT()

const inptres = document.querySelector(".numb")
const inpresult = document.querySelector(".res")

function numbfunc(e) {
  inptres.value += e
}

function equal() {
  inpresult.value = eval(inptres.value)
}

localStorage.setItem("ola", "i sad ola")
let loc = localStorage.getItem("ola")

sessionStorage.setItem("tryTwo", "lets try agan")
let ses = sessionStorage.getItem("tryTwo")

let cook = document.cookie = "ola = mola"

// console.log(loc)
// console.log(ses)
// console.log(cook)

let lee = ["karen", "aram", "razmik"]

let A = Number("1")
let B = Number("2")

A = A + B
B = A - B
A = A - B

// console.log(A,B)

// console.log(lee2())

const formm = document.querySelector(".form")
const inputt = document.querySelector(".input")
const divv = document.querySelector(".divv")

formm.addEventListener("submit", (e) => {
  e.preventDefault()
  const newP = document.createElement("p")
  newP.innerHTML = inputt.value
  divv.appendChild(newP)
})


function xo(n){
	let arr = n.split("")
	let x = 0
  let o = 0
  
  for(let i=0; i<arr.length; i++){
  	if(arr[i].toLowerCase() === "x") ++x
    if(arr[i].toLowerCase() === "o") ++o
  }
  return x === o
}

//console.log(xo("oOxx"))



////////////////    Ամեն բառի դիմացի տառը տանել վերջ ավելացնել "ay"
function pigIt(str){
  let array = str.split(" "),
      newStr = "", 
      newArr = [] 

  for (let i=0; i<array.length; i++){
    newStr = array[i].slice(1) + array[i][0] + "ay"; 
    newArr.push(newStr);
  } 

  return newArr.join(" ")
}

//console.log(pigIt('Pig latin is cool'))



////////////////    դասակարգել իրար հետևից այնպես որ վերջի բառից առաջ լինի "&"
function list(names){
  const objNames = names.map(n => n.name)
  const lastName = objNames.pop()
  let result 

  //return objNames.length ? objNames.join(", ") + " & " + lastName : lastName || ""

  if(objNames.length >= 1){
    result = objNames.join(", ") + " & " + lastName
  }else{
    result = lastName || ""
  }

  return result
}

// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))
// console.log(list([{name: 'Bart'}]))
// console.log(list([]))


///////////////  եթե երկրորդ արգումենտում կա առաջինի միջի տառերից վերադարձնել true
function scramble(str1,str2){
  const s1 = str1.split("")
  const s2 = str2.split("")
  const arr = []

  s2.map((value) => {
    arr.push(s1.includes(value))
  })

  return arr.every((value) => value !== false)
}

// console.log(scramble('dlrow','world'))
// console.log(scramble('cedewaraaossoqqyt', 'codewars'))
// console.log(scramble('katas', 'steak'))



function likes(names) {
  const person = [...names].toString() 

  if(names.length === 0) return "no one likes this"
  if(names.length === 1) return person + " likes this"
  if(names.length === 2) return person.split(",").join(" and ") + " like this"
  if(names.length === 3) return names.splice(0,2).toString().split(",").join(", ") + " and " + names.pop() + " like this"
  if(names.length >= 4) return names.splice(0,2).toString().split(",").join(", ") + ` and ${names.length} others like this`
}

// console.log(likes([]))
// console.log(likes(["Peter"]))
// console.log(likes(["Jacob", "Alex"]))
// console.log(likes(["Max", "John", "Mark"]))
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))


////////////// Տողադարձերի ստուգում
function validParentheses(parens){
  const arr = [...parens]
  let countOne = 0
  let countTwo = 0

  for(let i=0; i<arr.length; i++){
      if(arr[i] === ")") ++countOne
      if(arr[i] === "(") ++countTwo
  }

  return countOne === countTwo
}

// console.log(validParentheses("()"))
// console.log(validParentheses("())"))
// console.log(validParentheses("(())((()())())"))



////////////// Գտնել ֆակտորիալը
function factorial_one(n){
  if(n < 0) return NaN
  if(n === 0) return 1

  return n * factorial(n - 1)
}

function factorial_two(n){
  if(n < 0) return NaN
  
  let result = 1
  for (let i=1; i<=n; i++) {
    result *= i
  }
  return result
}

//console.log(factorial_two(5))



////////////// Պոլինդռոմ
function polindrom(str){
  const revWord = str.split("").reverse().join("")

  if(str === revWord) return true

  return false
}

// console.log(polindrom("abbz"))
// console.log(polindrom("abba"))


////////////// Just Homeworks
function one(n){
  if(n) return n(1)
  return 1
}
function three(n){
  if(n) return n(3)
  return 3
}
function plus(a){
  return (b) => a + b
}

//console.log(one(plus(three())))

function sum(a){
  return (b) => a + b
}

// console.log(sum(1)(2))
// console.log(sum(5)(-1))

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field){
  return (a,b) => a[field] > b[field] ? 1 : -1
}
//console.log(users.sort(byField("age")))


function sort(arr){
  
  for(let i=1; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[i] < arr[j]){
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
      }
    }
  }

  return arr
}

//console.log(sort([1,12,2,3,45]))




//////////////  Վերադարձնել այն առաջին տառը որը չի կրկնվում
function firstNonRepeatingLetter(string) {
  const array = string.split("")

  const result = array.filter((iteam) => {
    return array.indexOf(iteam) === array.lastIndexOf(iteam)
  })

  return result.shift()
}


function firstNonRepeatingLetter_1(string){
  const array = string.split("")
  let result = ""

  array.map((iteam) => {
    if(array.indexOf(iteam) === array.lastIndexOf(iteam)){
      result += iteam
    } else {
      return result
    }
  })

  return result.split("").shift()
}

//console.log(firstNonRepeatingLetter_1("stress"))


//////////Մեծատառերը փոքրատառ ու հակառակը

function replaceWord(str){
  let arr = str.split("")
  let result = ""

  for (let i=0; i<arr.length; i++){
    if(arr[i] === arr[i].toUpperCase()){
      result += arr[i].toLowerCase()
    } else {
      result += arr[i].toUpperCase()
    }    
  }
  return result
}

//console.log(replaceWord("HaruT"))


//////////Մեծատառերը փոքրատառ ու հակառակը in Array
function repArr(array){
  let newArr = []

    array.map(word => {
      let newWord = ""
      for(let i=0; i<word.length; i++){
        if(word[i] === word[i].toUpperCase()){
          newWord += word[i].toLowerCase()
        } else {
          newWord += word[i].toUpperCase()
        }
      }

    newArr.push(newWord)
    })

  return newArr
}

console.log(repArr(["lOl", "Kek", "aZaZ"]))

