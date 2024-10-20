
function calcular()
{
    let strA= document.getElementById("Altura").value;
    let strB= document.getElementById("Base").value;

    //Empiezan validaciones

    //que no vengan vacias y que sea del tipo y que no sean valores negativos

    if (strA === ""){
        warning('La altura debe contener un valor');
    }else if(strB===""){      
        warning('La base debe contener un valor');
    }else if(strA<=0){
        warning('La altura no puede ser cero o negativa');
    }if(strB<=0){
        warning('La base no puede ser cero o negativa');
    }else{

       //si cumplen las validaciones se parsean al tipo de datos pertinente y se hacen los calculos y se iguala al atributo

       let a = parseFloat(strA);
       let b = parseFloat(strB);

       let area = a*b;

       document.getElementById("areaCuadrado").value = area;

    }




}

function limpiar(){

    document.getElementById("Altura").value="";
    document.getElementById("Base").value="";
    document.getElementById("areaCuadrado").value = "";



}


function warning (mensaje){
    Swal.fire(mensaje);
}


