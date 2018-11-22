

/*const person = {
  //name: 'Andrew',
  age: 26,
  location:{
    city : 'Philadelphia',
    temp : 92
  } 

};
 
//const name = person.name;
//const location = person.location;
const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is  ${age}.`);
const { city, temp : temperature } = person.location;
if(city && temperature){
console.log(`${city} is having a temperature of ${temperature}.`);
}*/

/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
};

const { name = 'self-published' }= book.publisher;
if(name){
console.log(`${name}`);
}*/


const address = ['Andrew', 'Philadelphia', , 19147 ];
//console.log(`${address[0]} lives in ${address[1]} in ${address[2]}.`);
const [, , state = 'New York', zip] = address;
console.log(`lives in ${state}.`);