<template>
  <div id="App" class="app">

    <div class="header">
        
      <!--<div>
        <img src="./Fotos/logo11.png">
      </div> --> 

      <h1>StorePhone</h1>

      <div class="wat">
        <img src="./Fotos/logoWh.png">
      </div>

      <div class="fcb">
        <img src="./Fotos/logoFb.png">
      </div>

      <div class="gma">
        <img src="./Fotos/logoGm.png">
      </div>
     
      <nav>
        <button v-on:click="home"> Inicio </button>
        <button v-on:click="inventa"> Inventario </button>    
        <button v-on:click="Actualizar"> Actualizar </button>
        <button v-on:click="Añadir"> Añadir </button>
      </nav>
    </div>

    <div class="main-component">
    <router-view>
    </router-view>
    </div>
             
    <div class="footer">
      <h5><br> <br> Diego Alexander Fuentes Moreno,
                Jimmy Esteban Portilla Insuasty, <br>
                Juan Sebastian Rivera Florez,
                Rodrigo David Muñoz cifuentes,
                Lennyx Sebastian Narvaez Fandiño,
                Juan Diego Arevalo Cano
                <br><br>
                © 2021 - Todos los derechos reservados
      </h5>
    </div> 

  </div>   

</template>


<script>
  export default {
    name: 'App', 

    data: function(){

    },

    components: {
    },

    methods:{
      home:function(){
        this.$router.push({name: 'Inicio'})
      },

      inventa: function(){
        this.$router.push({name: 'inventario'})
      },

      Actualizar: function(){    
        this.$router.push({name: 'actualizar'})
      },

      Añadir: function(){       
        this.$router.push({name: 'insertar'})
      },

    },
        
    created: function(){

    }
  }

</script>


<style >
  body {
    max-width: 0 0 0 0;
      
  }
  .header img{
    width: 160px; 
    height: 160px;
    position: relative;
    left: 50px;

  }
  .header{
    margin: auto;
    padding: auto ;
    width: 100%;
    height: 220px;
    min-height: 20vh;
    background-color: #dbdbdb ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;

  }
  .header h1{
    font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;;
    text-transform: uppercase;
    font-size: 100px;
    color: #525252;
    text-shadow: 0 5px 10px black;
    font-weight: bold;
    letter-spacing: -5px;
    text-align: center;
    padding: 10px 20px;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    position:relative;
    top: 60px;
    left: 400px;
    -webkit-text-stroke: black 3px;

  }
  .header nav button{
    color: #e5e7e9;
    background: #525252;
    border: 1px solid #afb8b8;
    border-radius: 12px;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    right: 20px;
    position: relative;
    margin-left: 15px;
    box-shadow: 0 5px 5px #5c5c5c;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    
  }
  .header nav button:hover{
    color: #000000cc;
    background: #dbdbdb;
    border: 2px solid #525252;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    font-weight: bold;
    
  }
  .header nav button:active{
    transform: translateY(15px);

  }
  .wat img{
    width: 40px; 
    height: 40px;
    position:absolute;
    top: 20px;
    left: 1770px;

  }
  .fcb img{
    width: 40px; 
    height: 40px;
    position:absolute;
    top: 20px;
    left: 1720px;

  }
  .gma img{
    width: 50px; 
    height: 40px;
    position:absolute;
    top: 20px;
    left: 1660px;

  }
  .main-component{
    height: 64vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
    align-content: center;
    
  }
  .footer{
    width: 100%;
    height: 10vh;
    background-color: #dbdbdb;
    color: #000000;
    border-radius: 12px; 

  }
  .footer h5{
    text-align: center;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 13px;

  }
</style>