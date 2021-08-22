// Your code here

//excercise-1
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun())
console.log(saturdayFun(activity="walk my dog"))
console.log(saturdayFun("bathe my dog"))
//excercise-2
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

console.log(mondayWork())
console.log(mondayWork(activity="work from home"))
console.log(mondayWork("take one day off"))

//excercise-3
function wrapAdjective(style="*",emphatic="a hard worker"){
            return `You are ${style} ${emphatic} ${style}`
    }

console.log(wrapAdjective(style="||",emphatic="a hard worker"))

