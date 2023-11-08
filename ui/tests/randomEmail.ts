export function  randomEmail(): string{
  const alphabet = "qwertyuiuolasdfghjklzxcvbnm";
  let  res = "";
    if(res.length <10){
      res += alphabet[Math.floor(Math.random()* alphabet.length -1)]
    }
  const newEmail = res + (Math.round(Math.random()*10000) + "@gmail.com")

    return  `${newEmail}`;
    
}
