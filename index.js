//1 A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".

const loginAttempt = () => {
    let attempt = 1
    while (attempt <= 3) {
        console.log(`Login attempt ${attempt}`)
        attempt += 1;
    }
    while(attempt>3){
        console.log(`Account blocked`)
        break;
    }
}
loginAttempt()

//2 Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.

const votingFeature=(votes) =>{
    let i=0
    do {
        console.log(`vote ${i+1} ${votes[i]}`)
        i++


    } while (i<votes.length)
}
votingFeature(["yes","maybe","no"])



//3 Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.

function days(num) {
    num.map(day => {
        switch (day) {
            case 1:
                console.log(`The day is Monday`)
                break;
            case 2:
                console.log(`The day is Tuesday`)
                break;
            case 3:
                console.log(`The day is wednesday`)
                break;
            case 4:
                console.log(`The day is Thursday`)
                break;
            case 5:
                console.log(`The day is Friday`)
                break;
            case 6:
                console.log(`The day is Saturday`)
                break;
            case 7:
                console.log(`The day is Sunday`)
                break;


            default:
                console.log(`Invalid input`)
                break;
        }
    })
}
let num = [4, 7, 9, 2, 5, 2, 1, 6]
days(num)

//4 Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.

function checkPassword(password) {
    if (password.length >= 8) {
        return `Strong password`
    }
    else {
        return `Weak password, please enter a new password`
    }
}
let password = "mnbvftgyuijdlkkmjh"
console.log(checkPassword(password))

//5 You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".

function multilingualGreeting(languages) {
    languages.forEach(language => {
        switch (language) {
            case "en":
                console.log(`Hello`);
                break;
            case "fr":
                console.log(`Bonjour`);
                break;
            case "sw":
                console.log(`Habari`);
                break;
            default:
                console.log(`Language not supported`)
                break;
        }
    })
}
let languages = ["en", "sw", "amharic", "fr"]
multilingualGreeting(languages)

//6 You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"

function weatherCondition(tempratures){
   return tempratures.map(temprature=>{
        if(temprature>=30){
            return `High heat alert!`
        }
        else if((30>temprature)&&(temprature>15)){
            return `Normal conditions`
        }
        else if(temprature<=15){
            return`High cold alert!`
        }
    
    })
}
let temperatures=[40,30,20,10,30,29]
console.log(weatherCondition(temperatures))

//7 Users are queued to register. Use a while loop to remove and print each name until the queue is empty.
function registration(user2){
    let x=user2.length
    let i=0
    while (i<x){
        i++;
       console.log(user2.shift());
     
    }

}
let user2 =["Mahder","Yordanos","Nahela"]
registration(user2);

//8 Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.
function retakeTest(score){
    let attempt=1
    do {
        console.log(`Attempt ${attempt} with result ${score}`);
        score +=10;
        attempt +=1
    } while (score<=50);

    while(score>=50){
        console.log (`Have successfully Passed`);
        break;

    }
}
let score=60
retakeTest(score)
