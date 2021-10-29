<template>
<div>
 <div id=ParteSup>
     
    
       <table>
           <tr>
                <td>
                    <a href="Main.html">
                    <img src=""></a>
                </td>
                 <td>
                    <h1>StorePhone</h1>
                 </td>
                
           </tr>
       </table>
    </div>
    
    
    
    <div id="TablaIngreso">
        <table>
            <tr>
                <td>
                    <h1>Iniciar Sesión</h1>
                </td>
            </tr>
            <tr>
                <td>
                    <img src=""><br />
                </td>
            </tr>
            <tr>
                <td>
                    <form>
                        
                        <input type="email" placeholder="Correo">
                        <br >
                        <input type="password"  placeholder="Contraseña">
                        <br >
                    </form>
                </td>
            </tr>
            <tr>  
                <td>
                    <a href="Main.html">
                    <button>Ingresar</button></a>
                </td>
            </tr>
            <tr>
                <td>
                    <p>¿No tienes una cuenta?, <a href="SignUp.html">Registrate aquí</a></p>
                </td>
            </tr>
        </table>
    </div>

</div>
    
</template>

<script>



</script>

<style >

body{

    background: url();
    background-size: cover;
    background-attachment: fixed;
}


#ParteSup img{

    width: 90px; height: 90px;
    margin-left: 20px;
    margin-right: 30px;
}
#ParteSup h1{

    color: #111;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 1;
}


#TablaIngreso{
    
    background-color:rgb(255, 255, 255);
    border-radius: 15px;
    width: auto;
    display: table;
    padding: 5px;
    margin: auto;
}
#TablaIngreso h1{

    color: rgb(31, 31, 146);  
    font-family:cursive;  
    text-align: center;
} 
#TablaIngreso img{

    width: 142px; height: 164px;
    display: block;
    margin: auto;
}
#TablaIngreso input{
    
    text-align: center;
    width: 250px;
    height: 30px;
    border-color: black;
    border-radius: 15px;
    display: table;
    margin: auto;
}
#TablaIngreso button{
    
    border-color: black;
    border-radius: 15px;
    width: 150px;
    height: 30px;
    background-color: rgb(31, 31, 146);
    color: white;
    margin-left: auto;
    margin-right: auto;
    display: table;
}
#TablaIngreso button:hover{
   
    background-color: rgb(3, 3, 29);
    color: white;
}
#TablaIngreso p{

    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#TablaRegistro{

    background-color:rgb(255, 255, 255);
    border-radius: 15px;
    width: auto;
    display: table;
    padding: 5px;
    margin: auto;
}
#TablaRegistro h1{

    color: rgb(31, 31, 146);  
    font-family:cursive;  
    text-align: center;
}
#TablaRegistro img{
    
    width: 150px;
    height: 150px;
    display: block;
    margin: auto;
}
#TablaRegistro input{

    text-align: center;
    width: 250px;
    height: 30px;
    border-color: black;
    border-radius: 15px;
    display: table;
    margin: auto;
}
#TablaRegistro button{

    border-color: black;
    border-radius: 15px;
    width: 150px;
    height: 30px;
    background-color: rgb(31, 31, 146);
    color: white;
    margin-left: auto;
    margin-right: auto;
    display: table;
}
#TablaRegistro button:hover{

    background-color: rgb(3, 3, 29);
    color: white;
}

</style>