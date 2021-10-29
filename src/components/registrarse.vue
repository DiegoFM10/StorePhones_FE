<template>
<div>
<div id=ParteSup>
       <table>
           <tr>
                <td>
                    <a href="Main.html">
                    <img src="recursos/Logo.png"></a>
                </td>
                 <td>
                    <h1>StorePhone</h1>
                 </td>
                
           </tr>
       </table>
    </div>

    <div id="TablaRegistro">
        <center>
        <h1>Registrarse</h1>
        <table>
            <tr>
                
                <td align="center">
                    <img src="recursos/AddUser.png"><br>
                    <form>
                        
                        <input type="text" placeholder="Nombres">
                        <br />
                        <input type="text" placeholder="Apellidos">
                        <br />
                        <input type="text" placeholder="No. Identificación">
                        <br />
                        <input type="email" placeholder="Correo">
                        <br />
                        <input type="password" placeholder="Contraseña">
                        <br />
                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxlength="10" placeholder="Teléfono">
                        <br />
                    </form>
                        <a href="Login.html">
                            <button>Registrarse</button> </a><br />
                            
                            <a href="Login.html">Inicia Sesion</a>
                </td>
            </tr>
        </table>
        </center>
    </div>

</div>
    
</template>

<script>

</script>

<style >

body{

    background: url(/recursos/mont.jpg);
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