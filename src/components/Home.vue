<template>


    <div class="slider">

        <ul>

            <li>
                <img src="../Fotos/monitor.png">
            </li>

            <li>
                <img src="../Fotos/procompu.png">
            </li>

            <li>
                <img src="../Fotos/relog.png">
            </li>

            

            <li>
                <img src="../Fotos/y5p.png">
            </li>

            <li>
                <img src="../Fotos/y6p.png">
            </li>

            <li>
                <img src="../Fotos/y7a.png">
            </li>

            <li>
                <img src="../Fotos/y7p.png">
            </li>

            <li>
                <img src="../Fotos/yy.png">
            </li>

            

        </ul>

        
    
    </div>



    
</template>

<script>

</script>

<style >

.slider {

    width: 95%;
    margin: auto;
    overflow: hidden;
}
.slider ul{
    display: flex;
    padding: 0;
    width: 400%;
    animation: cambio 20s infinite alternate;


}
.slider li{
    list-style: none;
    width: 100%;
    

}

.slider img{
    width: 60%;
    margin: 80px;


}
@keyframes cambio{

    0% {margin-left: 0;}
    20% {margin-left: 0;}

    25% {margin-left: -100%;}
    45% {margin-left: -100%;}

    50% {margin-left: -200%;}
    70% {margin-left: -200%;}

    75% {margin-left: -300%;}
    100% {margin-left: -300%;}

}
</style>
