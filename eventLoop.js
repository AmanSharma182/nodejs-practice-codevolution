setTimeout(() => {console.log("this is setTimeout : 1")}, 1000);
setTimeout(() => {console.log("this is setTimeout : 2")}, 500);
setTimeout(() => {console.log("this is setTimeout : 3")}, 0);


// setTimeout(() => {console.log("this is setTimeout : 1")}, 0);
// setTimeout(() => {
//   console.log("this is setTimeout : 2")
//   process.nextTick(() => {
//     console.log("This is inner nextTick inside second setTimeout: 2")
//   });
// }, 0);
// setTimeout(() => {console.log("this is setTimeout : 3")}, 0);

// process.nextTick(() => {console.log("This is nextTick : 1")});
// process.nextTick(() => {
//   console.log("This is nextTick : 2")
//   process.nextTick(() => {
//     console.log("This is a inner nextTick inside second nextTick : 2")
//   });
// });
// process.nextTick(() => {console.log("This is nextTick : 3")});


// Promise.resolve().then(() => {console.log("This is a promise.resolve : 1")});
// Promise.resolve().then(() => {
//   console.log("This is a promise.resolve : 2")
//   process.nextTick(() => {
//     console.log("This is a inner nextTick inside second promise.resolve : 2")
//   });
// });
// Promise.resolve().then(() => {console.log("This is a promise.resolve : 3")});

// console.log("1")
// process.nextTick(() => {
//   console.log("2")
// })
// console.log("3")

// Promise.resolve().then(() => {
//   console.log("This is a callback from promise.resolve : 1")
// })

// process.nextTick(() => {
//     console.log("This is a callback from nextTick method : 2")
// })