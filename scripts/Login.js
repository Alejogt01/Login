$("#formLogin").on('submit', function(e)
{
    e.preventDefault();

var	logina=$("#UserL").val();
var	clavea=$("#Pass").val();


var User ="Julio_Alvarado";
var Contra ="123456";


    if(logina == User && Contra == clavea){

        $("#ContainerLogin").hide();


        $("#NameUser").html("Bienvenido usuario " + logina);
        
        var contenedor = document.getElementById("ContenedorUser");
        
        contenedor.style.color = "blue"; 
        contenedor.style.fontSize = "30px"; 
        


    }else{


        window.alert("Usuario o Contraseña incorrecta")



    }







}) 