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
N=100
for(let i=0;i<=N;i++){
    if(check_prime(i)===true){
        console.log(i);
    }
}