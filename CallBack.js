//CallBack
// Any function that is passed as an argument to another function so that it can be
// executed in that other function is called as a callback function.

// function sum(a, b) {
//     console.log(a + b);
//   }
  
//   function operation(val1, val2, callback) {
//     callback(val1, val2);
//   }
  
//   operation(6, 5, sum);

//here im using asynchronous funcion

// function loginUser(email, callback) {
//     setTimeout(() => {
//       console.log('We have the data')
//       callback({ userEmail: email })
//     }, 5000)
//   }
  
//   const user = loginUser('gaja@gmail.com', (user) => {
//     console.log(user)
//   })
//   console.log("this is end statment after this login part  will be printed")
  
// let fun1=(a,b,callBack)=>{
// callBack()
// }
// let fun2=()=>{
//     console.log("Hellow!");
// }
// fun1(5,4,fun2)





