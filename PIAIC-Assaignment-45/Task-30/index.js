//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const users = ["Zeeshan", "Shoaib", "Ahmed", "Azan", "Shahzaib"];

// Simple loop Method
for (i = 0; i < users.length; i++) {
  if (users[i] == "Shoaib") {
    console.log("Hello Shoaib, would you like to see a status report?");
  } else {
    console.log(`Hello, ${users[i]} thank you for logging in again.`);
  }
}

//For Each Method
users.forEach(function (user_name) {
  if (user_name == "Shoaib") {
    console.log("Hello Shoaib, would you like to see a status report?");
  } else {
    console.log(`Hello ${user_name} thank you for logging in again.`);
  }
});