const person = { 
    firstName :'john',
    lastName :'doe',
    age : 22
}
console.log(person)
console.log(typeof person)
console.log(person.firstName)
console.log(person['firstName'])

const prices = [10 , 20 , 30]
console.log(typeof prices)
console.log(Array.isArray(prices))
console.log(Array.isArray(person))

//create
person.city = 'bangalore'
person ['country'] = 'india'
console.log(person)

//update

person.age = 27
person ['firstName'] = 'deek'
console.log(person)

//delete
 delete person.lastName
 console.log(person)
 

