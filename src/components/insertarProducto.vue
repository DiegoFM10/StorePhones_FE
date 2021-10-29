<template>

<div id="insertarPro">

    <div class="imagen">
        <img src="./Fotos/add.png">
    </div>

    <table class="tablainsertar">
        <tr>
            <td>
                <h1>Añadir Producto</h1>
            </td>
        </tr>
        <tr>
            <td>
                <form v-on:submit.prevent="nuevoproducto">
                    
                    <br />
                    <input type="text"  placeholder="Marca" v-model="insertar.marca"/>
                    <br />
                    <input type="text" placeholder="Modelo" v-model="insertar.modelo" />
                    <br />
                    <input type="number"  placeholder="Cantidad Disponible" v-model="insertar.stock"/>
                    <br />
                    <input type="number"  placeholder="Precio" v-model="insertar.precio"/><br />

                    <button type="submit">Añadir Producto</button> 
                </form>
                         
            </td>
        </tr>
    </table>
</div>
    
</template>

<script>
import axios from 'axios'

    export default {
        

        name: 'insertarProducto', 


        data: function(){
            return{

                insertar: {
                    
                marca : "" ,
                modelo: "",
                stock : null,
                precio: null,

                }

            };


        },

        methods:{

            nuevoproducto: function (){
                console.log(this.insertar)
                axios.post(
                    //'http://127.0.0.1:8000/productss/',
                    'https://storephone2-be.herokuapp.com',
                    this.insertar,
                    {headers:{}}

                )
                .then((result) => {
                    let dataInsertarPro = {
                        //marca : this.product.marca,

                    
                    }

                    this.$emit('se añadió el producto',dataInsertarPro)
                })
                .catch((error) =>{
                    console.log(error)
                    alert("ERROR: Fallo al añadir el producto.");
                })
                alert("Se añadió el producto!")
                //console.log(this.insertar)
            },

        },

    }
</script>

<style >



.tablainsertar{
    position: relative;
    top: 30px;
    left: 900px;
    padding-left: 250px;
    padding-top: 100px;
    padding-bottom: 127px;
    border-left: black 5px solid;
    border-radius: 5px;

}
.tablainsertar h1{
    color:transparent;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 55px;
    font-weight: bold;
    letter-spacing: -2px;
    text-align: center;
    margin-top: -50px;
    font-weight:900;
    -webkit-text-stroke:#1e1ec0 2px;
}
.tablainsertar input{

    text-align: center;
    width: 350px;
    height: 30px;
    border-color: black;
    border-radius: 15px;
    display: table;
    margin: auto;
    box-shadow: 0 4px 4px #5c5c5c;
}
.tablainsertar button{
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
.tablainsertar button:hover{

    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-weight: bold;
}
.tablainsertar button:active{
    transform: translateY(8px);
}

.imagen img{
    width: 350px;
    height: 350px;
    position: absolute;
    top: 380px;
    left: 300px;
    filter: drop-shadow(5px 2px 10px black);
}
</style>
