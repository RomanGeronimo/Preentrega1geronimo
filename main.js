
alert("Binvenido a nuestra tienda online,para continuar navegando necesitara crear un nombre de usuario y una contraseña")
let nombUsuario = prompt("por favor ingrese su nombre de usuario")
let passUsuario = prompt("por favor ingrese su contraseña,(tenga en cuenta que el sitio web distingue entre mayusculas y minusculas))")
function validar (){
    
        let valUsuario = prompt("acontinuacion validaremos su nombre de usuario y contraseña,por favor ingreselo nuevamente")
        let valPass = prompt("ahora por favor ingrese nuevamente su contraseña")
        if(valUsuario === nombUsuario && valPass === passUsuario){ alert("la validacion se realizo con exito puede continuar por al sitio")
    }else{ prompt("nombre de usuario y o contraseña incorrectos,intentelo nuevamente")}
       
  
   
}
validar();