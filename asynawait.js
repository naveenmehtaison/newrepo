const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise is being resolved')

    },10000)  
})
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p1 is executing')
    },10000)
})
function traditionalmeth(){

    console.log("namaste javascript 1")
    p.then((res)=>console.log(res))
    p1.then((res)=>console.log(res))

}

console.log('Namaste javscript')
traditionalmeth()
//  here we can seee that program is not wait
//  now lets solve this using javascipt

// async function anasyncfunc(){
//     console.log('iam inside async 01')
//     const val1 = await p1
//     console.log(val1)
//     console.log('im after await')
//     console.log('iam after val')
//     const val2 = await p
//     console.log('await has been called')
//     console.log(val2)
//     console.log('val2 has been called')

// }
// anasyncfunc()

