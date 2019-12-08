<template>
    <div class="row">
      <div class="col-5"></div>
      <div class="col-6">
          <br>
         <div class="card">
           <div class="card-body" style="background-color:#fff;">
               <h4>Datos familiares </h4>
               <div class="row">
                  <div class="col-10"><input class="form-control" id="name-f" placeholder="" /></div> 
                  <div class="col-10"><input class="form-control" id="name-f" placeholder="Nombre Completo" /></div> 
                  <label for="" class="col-12"></label>
                  <div class="col-10"><input class="form-control" id="telf-f" type="number" placeholder="Num Telefonico" /></div>
                  <!-- ********** -->
                  <label class="col-12" for="feedback-Nacionalidad"></label>
                  <div class="col-10"><input class="form-control" id="belief"  placeholder="belief" /></div>
                  <label for="" class="col-12"></label>
                  <div class="col-10"><input class="form-control" id="membrecia"  placeholder="membresia" /></div>
                  <label for="" class="col-12"></label>
                  <div class="col-10"><input class="form-control" id="Obs"  placeholder="Observacion" /></div>
                  <label for="" class="col-12"></label>
                  <b-form-select class="col-8" v-model="selected" :options="parents"></b-form-select>
                  <div class="col-2"><b-link type="button" class="btn btn-success" to="menu"> Atras</b-link></div>
               </div>
           </div>
         </div>
      </div> 
      <div class="col-1"></div>
    </div>
</template>

<script>
    export default {
      Data(){
          return{
            selected: null,
            parents:[
                { value: null, text:'select option'},
                { value: 'a', text:'Padre'},
                { value: 'a', text:'Madre'},
                { value: 'a', text:'Hijo/a'},
                { value: 'a', text:'Hermano/a'},
                { value: 'a', text:'Tio/a'},
                { value: 'a', text:'Primo/a'},
                { value: 'a', text:'Sobrino/a'},
                { value: 'a', text:'Abuelo/a'},
                { value: 'a', text:'Tutor/a'}
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>