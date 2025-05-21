function contraseña() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const contraseña = "1234567891000"
            if(contraseña.length >= 8) {
              resolve(`La contraseña cumple con el estándar de seguridad`)
            }else{
                reject(`La contraseña no cumple con el estándar de longitud`)
            }
        }, 3000)
    }) 
}

contraseña() 
  .then(console.log) 
  .catch(console.error)







