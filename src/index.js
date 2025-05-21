function promesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("💎 Promesa ejecutada con éxito después de 8 segundos")
        }, 8000);
    })
}

promesa() 
  .then(console.log) 
  .catch(console.error)





