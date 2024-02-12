const accountId = 24854                     // the value of const in not modify in hole program 
let accountEmail = "jay@google.com"
var accountPassword = "121212"
accountCity = "jaipur"
let accountState;

// accountId = 21212121 // Not allowed 

/*
var is not use bcoz of it create issue in block scope and funcationa scope
*/
console.log(accountId);
console.table([accountEmail, accountPassword, accountState, accountId, accountCity])