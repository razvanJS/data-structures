let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream() {
        console.log('Ahhhhh')
    }

}

user.age//0(1)
user.name//0(1)
user.spell = 'abra Kadabra'
user.scream()
user.spell = '100'
console.log(user)