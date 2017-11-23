// const person = {
// 	name: 'Trevor',
// 	age: 38,
// 	location: {
// 		city: 'Airdrie',
// 		temp: -10
// 	}
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// console.log(`it's ${temperature} in the city of ${city}`);




// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// }



// const { title, author } = book;
// const { name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);



// Array


const address = ['1299 s Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, , state = 'New York'] = address;

console.log(`you are in ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mSize] = item;

console.log(`A medium ${itemName} costs ${mSize}`);
