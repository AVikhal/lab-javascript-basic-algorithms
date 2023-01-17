console.log("I am ready!")
// Iteration 1: Names and Input

let hacker1 = "Vitorioemanuel"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Vitorioemsnudgdfgtt"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops

let capHacker1 = ""

for (i=0; i < hacker1.length; i++) {
   capHacker1 += ` ${hacker1[i].toUpperCase()}`
}
console.log(capHacker1)

//

let revHacker2 = ""

for (i=1; i <= hacker2.length; i++) {
    revHacker2 += `${hacker2[hacker2.length - i]}`
}
console.log(revHacker2)

//

for (i=0; i < hacker1.length && i < hacker2.length; i++) {
    if(hacker1[i] < hacker2[i]){
        console.log("the drivers name goes first")
        break;
    } else if (hacker2[i] < hacker1[i]) {
        console.log("Yo, the navigator goes first definitely")
        break;
    } else if (hacker1 === hacker2) {
        console.log("What?! You both have the same name?")
        break;
    }
}
