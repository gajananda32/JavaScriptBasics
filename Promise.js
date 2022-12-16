//Promise

// var promise = new Promise(function(resolve, reject) {
//     const x = "Hello";
//     const y = "Hellow"
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
     
//   promise.
//       then(function () {
//           console.log('Success');
//       }).
//       catch(function () {
//           console.log('Some error has occurred');
//       });


// const mypromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise is resolved");
//     },1000);
// });
// mypromise.then((value)=>{
//     console.log(value);
// });
// console.log(mypromise);

// function checkResult(marks){
//     return new Promise((resolve,reject)=>{
//         if(marks>32){
//             resolve("congrats! you've passed");
//         }
//         else{
//             reject("failed");
//         }
//     });
// }
// checkResult(31)
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })