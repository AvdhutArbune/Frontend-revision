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
N=13
if(check_prime(N)){
    console.log(`${N} is a prime number`)
}
else{
    console.log(`${N} is a Not prime number`);
}