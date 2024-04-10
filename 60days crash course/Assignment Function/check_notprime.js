// Use the same function to print Non-Primes from 2 to a given limit
function check_prime(N){
    factorial_count=0
    for(let i=0;i<=N;i++){
        if(N%i===0){
            factorial_count+=1
        }
    }
    if(factorial_count===2){
        return true
    }
    else{
        return false
    }
}
n=100;
for(let i=0;i<=n;i++){
    if(check_prime(i)===false){
        console.log(i)
    }
}