console.log('person1: shows ticket')
console.log('person 2: shows ticket')
// const promisebeingmade = new Promise((resolve,reject )=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     }, 10)
// })
// promisebeingmade.then((t)=>{
//     console.log(`person:3 shows ${t}`)
// })
const premovie = async()=>{
    const promisewifebringingtics=new  Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000)

    })
    const getpopcorn = new Promise((resolve,reject)=> resolve(`popcorn`))
    const addbutter = new Promise((resolve,reject)=>resolve(`butter`))
    const getcoke = new Promise((resolve,reject)=>resolve('coke'))
    const getcandy = new Promise((resolve,reject)=>resolve('candy'))
    let ticket = await promisewifebringingtics
    
    // console.log(`wife: i have the ${ticket} but iam hungry too`)
    // let popcorn = await getpopcorn
    // console.log(`husband: i got some ${popcorn}`)
    // let butter = await addbutter
    
    // console.log(`husband: and here comes the ${butter}`)
    let [popcorn,candy,coke] = await Promise.all([getpopcorn,getcandy,getcoke])
    console.log(`${popcorn},${candy},${coke}`)
    return ticket
}
premovie().then((m)=>console.log(`person 3 has shown ${m}`))
console.log('person :4 shows ticket')
console.log('person: 5 shows ticket ')
