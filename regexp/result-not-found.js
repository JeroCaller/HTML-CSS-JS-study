let matchResult = "Good morning".match(/w/i);
console.log(matchResult);

if(!matchResult) {
    console.log("Result not found");
} else {
    console.log("result: " + matchResult);
}