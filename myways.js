

const fizzbuzz = ()=>{
    var number = [9,5,5,2,5,3,0,1,0,1]
    
    for(i = 0;i<10;i++){
        var sum
        if(i==0){

             sum= number[i]
        }
        
       
        if( (sum%3) == 0 ) {
        console.log( "Fizz" );
    }else if( (sum%4) == 0 ) {
        console.log( "Buzz" );
     }
     else if((sum%3) == 0 && (sum%4)==0){
        console.log( "FizzBuzz" );
       }else {
        console.log( sum );
    }
    
    var sum=sum+number[i+1]
    }
}

fizzbuzz()