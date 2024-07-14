    let arr = [1,2,3,4,5]
    function large(arr){
        let largenumber =arr[0]
        for(let i=1;i<arr.length;i++){
            if(arr[i] > largenumber){
                largenumber = arr[i]
            }
        }
        return largenumber
    }
    let largest = large(arr)
    console.log(largest)

    let a=1
    let b =2
    function sum(a,b){
        return a+b
    }
    let add = sum(a,b)
    console.log(add)

    let name = 'madam'
    let string =''
    function pal(name){
        for (let i = name.length-1;i>=0;i--){
             string = string + name[i]
                         
        }
        if(name !== string){
            console.log(`${name} is not an palindrome`);
         }
         else{
            console.log(`${name} is a palindrome`);
         }
        console.log(string);
        return string
    } 
    let funreturn = pal(name)
    console.log(funreturn);

    let company = 'yash'
    let rev = (str) => {
        return company.split('').reverse().join('')
    }

    let revstr = rev(company)
    console.log(revstr);

    // let nestedarray= [[1,2,3],[4,5,6],[7,8,9]]
    // console.log(nestedarray);
    // let sumvalue =0
    // let sums =[]
    // for(let i =0;i<nestedarray.length;i++){
    //     for(let j=i+1;i<nestedarray.length;j++){
    //         sumvalue += nestedarray[i][j]
    //     }
    //     sums.push(sumvalue)

    // }
    // console.log(sums);

//     console.log("Start");
// setTimeout(() => {
//     console.log("Executed after 2 seconds");
// }, 2000); // 2000 milliseconds = 2 seconds
// console.log("End");

// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log(`Executed ${count} times`);
//     if (count === 5) {
//         clearInterval(intervalId); // Stops the interval after 5 executions
//     }
// }, 1000);

// let array = [1,2,3,4,5,6,7,8,9]

// function methods(array){
//     let addition ={
//         addfun : function(array){
//             let result =0
//             for(let i =0;i<array.length;i++){
//                 result += array[i]
//             }return result
            
//         }
//     } 
//     return addition.addfun(array)
    
// }
// let addsum = methods(array)
// console.log(addsum);

function called(juster){
    console.log("surya " + juster);
}

function calling(greeting) {
    let  juster = "How are you" 
    greeting(juster)
}

calling(called)