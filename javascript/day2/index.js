// 일일 카페 커피 매출액이 아래와 같은데 4200을 잘 못 입력한 경우 다 찾아서 바꿔줘야 하는 번거로움이 있음 
// console.log(3000*2);
// console.log(4200*4+4800*2);
// console.log(4200*4800);
// console.log(3000+4200*4+4800*2);
// console.log(4200*3);

// 변수 선언 
//자바스크립트에서는 let을 써준 다음 변수명을 써줌 
let espressoPrice = 3000;
let lattePrice = 4300; 
let mochaPrice = 4800; 

console.log(espressoPrice*2);
console.log(lattePrice*4+mochaPrice*2);
console.log(lattePrice+mochaPrice);
console.log(espressoPrice+lattePrice*4+mochaPrice*2);
console.log(lattePrice*3);


