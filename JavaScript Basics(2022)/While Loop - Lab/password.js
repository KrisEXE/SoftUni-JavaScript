function password(input){
    let index = 0
   let username = input[index]
   index ++
   let password = input[index]
   index ++
   let tempPassword =  input[index]
   index ++

   while (password != tempPassword){
     tempPassword = input[index]
     index ++
   }
   console.log(`Welcome ${username}!`);
   

}
password (["Gosho", "secret", "secret"])