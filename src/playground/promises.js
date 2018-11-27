
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
  resolve({
     name: 'Andrew',
     age: 26
  })
  //reject('Something went wrong!!');
    },5000);
});

console.log('before');
promise.then((data) => {
    console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  resolve({
     name: 'Andrew',
     age: 26
  })
    },5000);
})
// return 'some data';
}).then((str) => {
    console.log('Does this run?', str);
}).catch((error) => {
    console.log('error:', error);
});
/*promise.then((data) => {
    console.log('2', data);
});*/
console.log('after');