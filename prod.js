const product = {
    id: 1,
    Name:'marker',
    Price:10
}
console.log(product)
product.price = 15
product.rating = 4.3
console.log(product)

console.log(product)
Object.seal(product)
product.price = 15
product.rating = 16
console.log(product)
