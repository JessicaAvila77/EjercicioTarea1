
function calcular()
{
    let strA= document.getElementById("Altura").value;
    let strB= document.getElementById("Base").value;

    //Empiezan validaciones

    //que no vengan vacias y que sea del tipo 

    if (strA === ""){
        warning('La base no puede contener un valor de 0');
    }else if(strB===""){
        warning('La altura no puede contener un valor de 0');
    }else if(strA<=0){
        warning('La base no puede ser negativa');


    }




}

function limpiar(){

}


function warning (mensaje){
    Swal.fire(mensaje);
}


