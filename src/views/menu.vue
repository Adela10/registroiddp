<template>
    <div>
        
        <h1 class="text-danger text-center">Membrecia Local de Villa Pagador.
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8 text-center">
                <!-- <button class="btn btn-success form-control my-2"></button></a> -->
                <b-link type="button" class="btn btn-success form-control my-2" to="agregarUsuario"> New User</b-link>
                <b-link type="button" class="btn btn-success form-control my-2" to="datosFamiliares">Family data</b-link>
                <b-link type="button" class="btn btn-success form-control my-2" to="academy">Datos Ministeriales</b-link>
                <b-link type="button" class="btn btn-success form-control my-2" to="academy">pdf</b-link>
                <b-link type="button" class="btn btn-success form-control my-2" to="plantilla">plantilla</b-link>
               </div>
            <div class="col-2"></div>
        </div>
</h1>
    </div>
</template>

<script>
// import Add from '@/components/agregarUsuario.vue'
export default {
    name:'menu',
    components:{
    }
}
</script>
