
const calculateCharacter = () =>{
let tweet = prompt("Enter a text please")
//Take the length of the input
let tweetCount = tweet.length;
tweetLeft = 150 - tweetCount;
console.log(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`)
document.getElementById('pTarget').innerHTML = `Get back this <strong>alert</strong> : You have written ${tweetCount} characters, you have ${tweetLeft} characters left!<br><em>(number of charecters can be different)</em>`    

}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
