<template>
  <div id="updatePro">
   
    <div class="imagen">
      <img src="./Fotos/update.png" />
    </div>

    <table class="tabla">
      <tr>
        <td>
          <h1>Actualizar Producto</h1>
        </td>
      </tr>
      <tr>
        <td>
          <form>
           
            <input type="text" id="idinput" placeholder="ID"  />
            <br />
            <input id="marcainput" 
              type="text"
              placeholder="Marca"
              
            />
            <br />
            <input id="modeloinput" 
              type="text"
              placeholder="Modelo"
             
            />
            <br />
            <input id="stockinput" 
              type="number"
              placeholder="Cantidad Disponible"
              
            />
            <br />
            <input id="precioinput" 
              type="number"
              placeholder="Precio"
              
            />
            <br />
            <!-- <button type="submit" v-on:click="`actualizarproductos(${productodata.id})`"> -->
               <button type="submit" v-on:click="actualizarproductos(productodata.id)">
              Actualizar Producto
            </button>
            <br />
          </form>

          <button v-on:click="Eliminar">Eliminar Producto</button>
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "actualizarProducto",

  data: function () {
    return {
      actualizarpro: {
        id: "",
        marca: "",
        modelo: "",
        stock: "",
        precio: "",
      },
      productodata: {},
    };
  },
  props: {
    //productodata:{
    id: { default: "1", type: String },
    marca: {
      default: "samsung",
      type: String,
    },
    modelo: {
      default: "s20",
      type: String,
    },
    stock: {
      default: "1",
      type: String,
    },
    precio: {
      default: "0",
      type: String,
    },

    //},
  },

  methods: {
    inicialdata: function (productodata) {
      document.getElementById('idinput').value=         productodata.id
      document.getElementById("marcainput").value =     productodata.marca
      document.getElementById("modeloinput").value =    productodata.modelo
      document.getElementById("stockinput").value =     productodata.stock
      document.getElementById("precioinput").value =    productodata.precio
      
    },
    validar: function(){
      return true
    },
    guardar: function(){
      this.productodata.id  =  document.getElementById("idinput").value        
      this.productodata.marca =document.getElementById('marcainput').value     
      this.productodata.modelo =document.getElementById("modeloinput").value 
      this.productodata.stock =document.getElementById("stockinput").value 
      this.productodata.precio =document.getElementById("precioinput").value 

    },
    actualizarproductos: async function (id) {
      this.guardar();
      alert(JSON.stringify(this.productodata));
      try {
        //let url = "http://127.0.0.1:8000/product/" + id;
        let url = "https://storephone2-be.herokuapp.com/product/" + id;
        let config = { headers: {} };
        await axios.put(url, this.productodata, config);

        alert("Producto actualizado correctamente");
      } catch (error) {
        console.log(error);
        alert("No se pudo actualizar el producto");
      }
    },
  },
  mounted: function () {
    this.inicialdata(this.productodata)

  },
  created: function () {
    this.productodata = {
      id: this.id,
      marca: this.marca,
      modelo: this.modelo,
      stock: this.stock,
      precio: this.precio,
    };
       
    
   alert(JSON.stringify(this.productodata));
  },
};
</script>


<style >
.tabla {
  position: relative;
  top: 30px;
  left: 900px;
  padding-left: 250px;
  padding-top: 100px;
  padding-bottom: 80px;
  border-left: black 5px solid;
  border-radius: 5px;
}
.tabla h1 {
  color: transparent;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 55px;
  font-weight: bold;
  letter-spacing: -2px;
  text-align: center;
  margin-top: -50px;
  font-weight: 900;
  -webkit-text-stroke: #1e1ec0 2px;
}
.tabla input {
  text-align: center;
  width: 350px;
  height: 30px;
  border-color: black;
  border-radius: 15px;
  display: table;
  margin: auto;
  box-shadow: 0 4px 4px #5c5c5c;
}
.tabla button {
  display: table;
  border-color: black;
  border-radius: 15px;
  width: 250px;
  height: 30px;
  background-color: #1e1ec0;
  color: white;
  box-shadow: 0 5px 5px #5c5c5c;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  margin: auto;
}
.tabla button:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-weight: bold;
}
.tabla button:active {
  transform: translateY(8px);
}

.imagen img {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 380px;
  left: 300px;
  filter: drop-shadow(5px 2px 10px black);
}
</style>