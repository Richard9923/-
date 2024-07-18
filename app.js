/* recurso para postergar determinado processo */

/* setTimeout( () => {
    console.log("Hello")
}, 3000) */

/* recurso para filtrar determinados valores */

/* lista.filter( n => {
    return n < 10

    "vai ser retornado uma lista com todos os valores true"
})
*/

function validUserNames(usernames) {
  // your code here
  return usernames.filter((palavra) => {
    return palavra.length < 10;
  });
}

let resultado = validUserNames(["teste", "mouse", "asdk"]);
console.log(resultado);

console.log("teste");
