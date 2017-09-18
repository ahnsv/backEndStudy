console.log('Starting App');

setTimeout(() => {
   console.log('Inside of callback');
}, 2000); // registered to wait for 2 seconds, so execute the other task, and then come back here and execute console log (async call back)

setTimeout(() => {
   console.log('Inside of second callback');
}, 0); // zero delay

console.log('Finishing App');
