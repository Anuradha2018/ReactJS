// USING LET
let name = "John";
console.log('name before', name);
if(name) {
    let name = "Jack";
    console.log('name in block', name);
}
// Global variables are also affected
console.log('name in global',name);

/*******************************************************************************************/

// WITH VAR

var FirstName = "Joe";
console.log('name before', FirstName);
if(FirstName) {
    var FirstName = "Doe";
    console.log('name in block', FirstName);
}
// Global variables are also affected
console.log('name in global',FirstName);