console.log("I'm hungry again")


// // Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// The learning objects of this exercise is to use iteration and string concatenation

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Example output:

// The

// The walrus

// The walrus danced

// The walrus danced through

// The walrus danced through the

// The walrus danced through the trees

// The walrus danced through the trees in

// The walrus danced through the trees in the

// The walrus danced through the trees in the light

// The walrus danced through the trees in the light of

// The walrus danced through the trees in the light of the

// The walrus danced through the trees in the light of the moon ...

// Paste the following code into overly-excited.js

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let symbol = ""

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += ` ${theWordArray[i]}`;

        if ((i+1) % 3 === 0) {
        console.log(buildMeUp += '!')
        // } else if ((i+1) / 3 % 3 === 0) {
        //     console.log(buildMeUp + '?')
        } else {
        console.log(buildMeUp)
        }
    // In my if else statement, I am telling the function to add ! to the string every 3rd loop the i makes. I had to say (i+1) in my if statement to "un-zero index" the array so that the ! symbol would show on the actual 3rd word instead the zero indexed 3rd position.
}

}

// Invoke the function and pass in the array
addExcitement(sentence)






// for (let i = 0; i < theWordArray.length; i++) {
        
//     if ((i+1) % 3 === 0) {
//         buildMeUp += `${theWordArray[i]} ${symbol}`;
//         console.log(buildMeUp[i])
//     } else {
//         buildMeUp += `${theWordArray[i]};
//     console.log(buildMeUp[i])
    