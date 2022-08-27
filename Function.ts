function greating(no:number,name:string):string{
    return `${no} hello ${name}`
}
function sum(a:number,b:number,...rest:number[]):number{
    return a+b+rest.reduce((a,b)=>a+b,0)
}
console.log(greating(1,"peem"))
console.log(sum(1,2,3,4))