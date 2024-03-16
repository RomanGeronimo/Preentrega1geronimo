
alert("Binvenido a nuestra tienda online,para continuar navegando necesitara crear un nombre de usuario")
let nombUsuario = prompt("por favor ingrese su nombre de usuario")

let intentos = 3

function validar (){
    alert("Bienvenido "+nombUsuario+" ingrese la siguiente contraseña 1234,para poder seguir navegando")
    let valUsuario =  prompt("por favor ingrese la contraseña")
  switch(valUsuario){
    case "1234":
        alert("validacion exitosa,puede continuar navegando")
        break;
    case "":
        alert("debe ingresar la contraseña que se le a otorgado,presione la tecla F5 para intentarlo de nuevo")
        break;  

  }
     
  
   
}
validar();