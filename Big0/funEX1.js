function funChallenge(input) {
    let a = 10;//0(1)
    a = 50 + 3;//O(1)

    for (let i = 0; i < input.length; i++) {//0(n)
        anotherFunction();//O(n)
        let stranger = true;//O(n)
        a++;//O(n)
    }
    return a;//0(1)
}

const list = [10, 20, 30, 40, 50, 100]

//0(n)
//0(3+4n)