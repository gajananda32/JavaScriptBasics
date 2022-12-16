//asychAwait
// async function test(){
//     let testcase=new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("test case is passed"),1000)
//     });
//     let result=await testcase;
//     //after waiting 
//     console.log(result);
// }
// test();

//here im using promise

// function returnPromises() {
//     var promise = new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Promise Executed...");
//         resolve("Sample Data");
//       }, 2000); 
//     });
//   }
  
//   function Data() {
//     var array = ['hi'];
//     var getPromise = returnPromises();
//     console.log(array);
//   }
  
//   Data();

//if we are using async and await

// function returnPromises() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Promise Executed");
//         resolve("Sample Data");
//       }, 2000);
//     });
//   }

//   async function Data() {
//     var array = ['hi how are u'];
//     var getPromise = await returnPromises();
//     console.log(array);
//   }
  
//   Data();