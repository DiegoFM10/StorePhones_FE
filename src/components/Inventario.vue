<template>
  <div>
    <table class="tablaInventario">
      <tr>
        <td class="celdaID">
          <p>ID</p>
        </td>
        <td class="celdaMARCA">
          <p>MARCA</p>
        </td>
        <td class="celdaMODELO">
          <p>MODELO</p>
        </td>
        <td class="celdaSTOCK">
          <p>STOCK</p>
        </td>
        <td class="celdaPRECIO">
          <p>PRECIO</p>
        </td>
        <td>
          <p>Eliminar</p>
        </td>
        <td>
          <p>Actualizar</p>
        </td>
      </tr>
      <tr v-for="(product, k) in products" :key="k">
        <td class="celdaID">
          {{ product.id }}
        </td>
        <td class="celdaMARCA">
          {{ product.marca }}
        </td>
        <td class="celdaMODELO">
          {{ product.modelo }}
        </td>
        <td class="celdaSTOCK">
          {{ product.stock }}
        </td>
        <td class="celdaPRECIO">
          {{ product.precio }}
        </td>
        <td>
          <button v-on:click="eliminarproductos(product.id)">X</button>
        </td>
        <td>
          <button v-on:click="actualizarproductos(product)">
            Actualizar
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Inventario",

  data: function () {
    return {
      products: [],
      actualizar: {
                    
                marca : "" ,
                modelo: "",
                stock : null,
                precio: null,

                }
    };
  },
  methods: {
    listarproductos: function () {
      let url = "http://127.0.0.1:8000/productss/";
      let url = "https://storephone2-be.herokuapp.com/productss/";
      let config = { headers: {} };
      axios
        .get(url, config)

        .then((response) => {
          console.log(response);
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
          alert("no esta bien eso error");
        });
    },

    eliminarproductos: async function(id){
      try{
       //let url = 'http://127.0.0.1:8000/product/' + id ;
       let url = 'https://storephone2-be.herokuapp.com/product/' + id ;
       let config = { headers: {} };
       await axios.delete(url, config)
       this.listarproductos();
       alert("Producto eliminado correctamente")
      }catch(error){
        console.log(error)
        alert("No se pudo eliminar el producto")
      } 
    },
  

    actualizarproductos: function(productodata){
      this.$router.push({name: "actualizarProducto", params:{
        id :productodata.id,
        marca :productodata.marca,
        modelo:productodata.modelo,
        stock :productodata.stock,
        precio:productodata.precio
      }})
    
      
  },
  
  },
  created: function () {
    this.listarproductos();
    //this.eliminarproductos();
  },
}

</script>


<style >
.tablaInventario {
  top: 300px;
  left: 25%;
  border: black 3px solid;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
}
.celdaID {
  width: 100px;
  text-align: center;
  font-weight: bold;
  background-color: #a7a7a7;
}
.celdaMARCA {
  width: 200px;
  text-align: left;
  display: flex;
  margin-left: 20px;
}
.celdaMODELO {
  width: 200px;
  text-align: center;
}
.celdaSTOCK {
  width: 150px;
  text-align: center;
}
.celdaPRECIO {
  width: 200px;
  font-weight: bold;
  text-align: center;
}
</style>