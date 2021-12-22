
// 1-misol

let money=Number(prompt("PULINGIZNI KIRITING"));

let cost=(500+250)*10896.61+120*12247.79;


if (money >= cost){
    console.log("Oq yo'l,Alisher");
}else{
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan");
}


// 2-misol

let height=prompt("Bo'yingizni kiriting");
let weight=prompt("Og'irligingizni kliriting");
let BMI=(weight/(height*height)*100)

console.log(`Sizning BMIgiz ${BMI}`);

if(BMI<0.14){
    console.log("Siz juda ham, Ozg'insiz");
} else if(BMI<0.25){
    console.log("Sizning holatingiz, Normal");
} else{
    console.log("Siz juda ham, Semizsiz");
}


let markHeight=prompt("Mark,Bo'yingizni kiriting(sm)");
let markWeight=prompt("Mark,Og'irligingizni liriting(kg)");
let jonHeight=prompt("Jon,Bo'yingizni kiriting(sm)");
let jonkWeight=prompt("Jon,Og'irligingizni liriting(kg)");

let markBMI=(markHeight/(markHeight*markHeight)*100)
let jonBMI=(jonHeight/(jonHeight*jonHeight)*100)

// console.log(markBMI);
// console.log(jonBMI);

if(markBMI > jonBMI){
    console.log("Markning BMIi Jonnikidan yuqori!")
} else if(markBMI < jonBMI){
    console.log("Jonning BMIi Marknikidan yuqori!")
} else{
    console.log("Marknig va Jonning BMI teng")
}