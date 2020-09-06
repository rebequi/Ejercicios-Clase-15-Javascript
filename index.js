// /APUNTES DE MALEEE


// // Numeros: 
// 1, 2, 3

// // Strings (cadenas de texto)
// // "Hola, soy texto"
// // 'Hola, soy texto'
// // `Hola, soy texto`

// // Booleanos
// true
// false 

// // Variables 
// let nombre = "Malena"
// let leGustaLeer = true 
// let edad = 33
// let anio = 1

// // Operadores
// // + - * / 
// // + 
// // > < 
// // ()

// // Metodos 
// let mensaje = "Hola, soy un mensaje"
// // alert
// // alert(mensaje)
// let resultadoDelPrompt = prompt(mensaje)
// let resultadoDelConfirm = confirm(mensaje)

// // Para ver en consola
// console.log(resultadoDelConfirm)

// // typeof 

// // coercionar a un tipo
// // Number(), Boolean() y String()


// 4 cosas a tener en cuenta con parametros
// El orden en el que los escribo, es el orden en el que la funcion les asigna valor
// Si la funcion espera 2 parametros y yo le pase 3, el 3ro es ignorado
// Si la funcion espera 3 parametros y yo le paso 2, el 3ro toma como valor "undefined"
// Si no defino un parametro en la declaracion de la funcion pero lo uso dentro de la funcion, hay un error

// const sumar = (num1, num2) => {
//   return num1 + num2
// }

// const resultado = sumar(1, 2)
// Las funciones son un tipo de dato en JS
// (se pueden guardar adentro de variables)

// las funciones definen un bloque de codigo reutilizable
// Reciben parametros, los procesan y retornan la informacion procesada 




// ***************************-----------------------------*******************----------------------***************







//      //     ////   /////    //////  //// mis apuntes!!!!!!!!!!! //////////////////////////////////










// let funcionDeEjemplo = () => 

//  {
//     let primerGusto =prompt ("decime tu primer sabor favorito")
//     let segundoGusto =prompt ("decime tu segundo sabor favorito")
//     let tercerGusto =prompt ("decime tu tercer sabor favorito")

//     alert (`aqui tiene su helado ${primerGusto},${segundoGusto}, ${tercerGusto}')
// }

//     funcionDeEjemplo ()


    
// let nombre = "Malena"
// let edad = 33

// const decirNombre = (Rebeca) => {
// console.log (edad)
// }

// decirNombre ()

// const insultarALaVecina = (cosaMolestaQueHaceLaVecina) => {
//    alert(`Pero, por dios, podrias de dejar de ${cosaMolestaQueHaceLaVecina}`)
//  }
  
//  insultarALaVecina("tocar la bateria")
//  insultarALaVecina("mover los muebles")
//  insultarALaVecina("hablar a los gritos")
//   insultarALaVecina("venir a husmear a mi vereda")

//   const decirNombreCompleto = (nombre, apellido) => {
//    alert(`Tu nombre completo es: ${nombre} ${apellido}`)
//  }
  
//   decirNombreCompleto("rebe", "ball")
  

// const sumar = (numero1, numero2) => {
//    return(numero1 + numero2)
//  }
// console.log (sumar (2, 3))
// console.log (sumar(1.2, 3.4) )
// console.log (sumar(3, -5))


// const multiplicar = ( numero1, numero2) => {
//    return (numero1 * numero2)
// }
//   console.log (multiplicar(2, 3))
//   console.log (multiplicar(4, 0.5))
  

//  const restar = (numero1, numero2 ) => {
//      return (numero1-numero2)
//  }
//  console.log (restar(3, 2) )
//   console.log (restar(10, 5.5)) // 4.5
//   console.log (restar(3, 5)) // -2

  

// const areaTriangulo = ( base, altura) => {
//   return (base * altura / 2) 
// }

// console.log (areaTriangulo(3, 4)) 
// console.log (areaTriangulo(5, 6))



//                              EJERCICIO GRITAR 



// const gritar = ( palabragritada ) =>{
//   return ('!'+ palabragritada + '!' )
// }

// // console.log (gritar ('hola'))

// // console.log (gritar ('rebe'))



// //                              EJERCICIO NOMOBRE COMPLETO
// const obtenerNombreCompleto = (nombre, apellido ) => {
//   return ( nombre + " " + apellido)
// } 

// // console.log ( obtenerNombreCompleto ('Rebeca' , 'Ballesteros'))
// // console.log ( obtenerNombreCompleto ('Ada', 'lovelace'))
// // console.log ( obtenerNombreCompleto ('Malena', 'Rey'))


// //                              EJERCICIO Saludar

// const saludar = (nombre) => {
//   return ('hola' +' '+ nombre + ' un gusto conocerte!')
// }

// // console.log (saludar ('Ada'))
// // console.log (saludar ('Lola'))
// // console.log (saludar ('Rebe'))
// // console.log (saludar ('Facu'))


// //                              EJERCICIO Saludar-gritando
// const saludarGritando = (nombre, apellido) => {
//   let nombreCompleto = obtenerNombreCompleto (nombre, apellido )
//   let saludo = saludar (nombreCompleto)
//   let grito = gritar (saludo)
//   return grito
// }

// console.log (saludarGritando('rebeca', 'ballest'))


//                              EJERCICIO competencia

// const obtenerCompetencia = (a , b) =>{
//   return ( a + ' ' +'vs' + ' ' +b)
// }
// console.log (obtenerCompetencia ('Javascript', "Python"))
// console.log (obtenerCompetencia('Coca', 'Pepsi')) // `Coca vs. Pepsi`

//                              EJERCICIO email

// const generarEmail = (usuario , dominio ) => {
//   return (usuario + "@" + dominio + ".com")
// }

// console.log (generarEmail('adalovelace', 'gmail') )// 'adalovelace@gmail.com'


//                              EJERCICIO competencia

const calcularPuntaje = (facil , normal , dificil ) => {
  let totalFacil = 3 * facil
  let totalNormal = 5 * normal
  let totalDificil = 10 * dificil
  return totalFacil + totalNormal + totalDificil
}

console.log ( calcularPuntaje(3, 0, 0) ),
console.log ( calcularPuntaje(0, 2, 1) )
