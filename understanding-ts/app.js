var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
// The "never" type
function generateError(message, code) {
    throw { message: message, error: code };
}
generateError("An error occured", 500);
