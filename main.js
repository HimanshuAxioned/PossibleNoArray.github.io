console.log('Hello World')

function func(n, sum) {

  var arr=[]
  for(let i=1; i <=n; i++){
    
    let a= Math.floor(Math.random()*10)
    arr.push(a);
  }
  console.log(arr)
 
  var result = [];

  for (let i= 0; i< n; i++){
    for(let j= 0; j< n ; j++){
      let a= arr[i]+arr[j];
      if(a==sum){
        result.push([arr[i],arr[j]]);
      }
    }

  }

  return result;

}
console.log(func(10, 5))


