//Cazul cel mai rau

// const findFirstBox = (box) => console.log(box[0])

//     ;//0(1)
// findFirstBox([100, 200, 300, 400])

// //O singura operatie indiferent de numarul de elemente din array

// const find2Box = (box) => {
//     console.log(box[0])//0(1)
//     console.log(box[1])//0(1)
// }

// //O(2)===O(1)
// find2Box([100, 2333, 23213, 232132131, 2232132132, 32, '', true])


const artist=['Guta','Salam','Armin','Bacovia','Gheboasa']

function findArmin(artist){
    for(let i=0;i<artist.length;i++){
        console.log('Running')
        if(artist[i]==='Armin'){
            console.log('Welocme to A State Of Trance')
            break;
        }
    }

}
findArmin(artist)