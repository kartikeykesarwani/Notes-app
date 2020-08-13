const fs= require('fs')

// const book ={
// 	title:'ego is kk',
// 	author:'Ryan dahl'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson =dataBuffer.toString()
// const data = JSON.parse(dataJson)

// console.log(data.title);
const kk = fs.readFileSync('1-json.json');
const bb= kk.toString();
const cc=JSON.parse(bb);
cc.name='kartikey';
cc.age =34;
const jj=JSON.stringify(cc);
fs.writeFileSync('1-json.json',jj);
console.log(jj);

