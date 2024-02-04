// const array = []
// function getuserupdate(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let d = new Date()
//             let t = d.getTime()
//             array.push(t)
//             resolve()
//         },1000)
//     })
// }
// function createPost(){
//     return new Promise((resolve,reject)=>{
//         getuserupdate().then(()=>{
//             resolve()
//         })
//     })
// }
// getuserupdate().then(()=>{
//     createPost().then(()=>{

//     })
// })
const array = [];

function getuserupdate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let d = new Date();
            let t = d.getTime();
            array.push(t);
            resolve();
        }, 1000);
    });
}

function createPost() {
    return new Promise((resolve, reject) => {
        getuserupdate().then(() => {
            resolve();
        })
    });
}

getuserupdate().then(() => {
    createPost().then(() => {
        // console.log(array);
    })
});
const promise1 = new Promise((resolve,reject)=>{
    array.pop()
    // function iterate(item){
    //     console.log(item)
    // }
    // array.forEach(iterate)
    resolve()

})

Promise.all([getuserupdate(),createPost(),promise1]).then(()=> {console.log(array)})
