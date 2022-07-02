
function numeroAleatorio() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 2000);
  })

}


//async nos permite utilizar elementos en formato de promesa
async function resultado() {

  console.log("resultado invocado")

  //await espera el tiempo que nuestra promesa retorne el resulta y siga su operacion
  const aleratorio = await numeroAleatorio();

  console.log(`Resultado: ${aleratorio}`)

}



resultado();


