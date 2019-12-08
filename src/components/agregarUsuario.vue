<template>
   <div class="row">
     <div class="col-2"></div>
       <div class="col-8">
         <br> 
         <div class="card">
           <div class="card-body" style="background-color:#fff;">
               <h5 class="card-title text-center">Registrar Usuario</h5>
               <div class="row">
                   <div class="col-6"><input class="form-control" id="nombre" placeholder="Nombre Completo" /></div>
                   <div class="col-3"><input class="form-control" id="ci" placeholder="ci" /></div>
                   <div class="col-3"><input class="form-control" id="#Lic" type="number" placeholder="Num de licencia" /></div>
                  <!-- ****+*** -->
                   <label class="col-12" for="feedback-Nacionalidad"></label>
                   <div class="col-4"><input class="form-control" id="nacionalidad" placeholder="Nacionalidad" /></div>
                   <b-form-select class="col-4" v-model="selected" :options="ciudad"></b-form-select>
                   <div class="col-4"><input class="form-control" id="provincia"  placeholder="provincia" /></div>
                   <!-- ******** -->
                   <label class="col-4" for="feedback-Nac">Fecha de Nacimiento</label>
                   <label class="col-4" for="feedback-edad">edad</label>
                   <label class="col-4" for="feedback-estadoCivil">Estado Civil</label>
                   <div class="col-4"><input type="date" class="form-control" id="Nac" placeholder="fecha de nacimiento" /></div>
                   <div class="col-4"><input type="number" class="form-control" id="edad" placeholder="edad" /></div>
                   <div class="col-4"><b-form-select  v-model="selected" :options="options"></b-form-select></div>
                  <!-- *******  -->
                   <label class="col-12" for="feedback-tel"></label>
                   <div class="col-4"><input type="text" class="form-control" id="telefono" placeholder="telefono" /></div>
                   <div class="col-4"><input type="text" class="form-control" id="celular" placeholder="celular" /></div>
                  <div class="col-4"> <b-form-input id="gmail" type="gmail" placeholder="gmail@"></b-form-input></div>
                   <!-- *********** -->
                   <label class="col-12" for="feedback-tel"></label>
                   <div class="col-4"><b-form-select  v-model="selected" :options="genero"></b-form-select></div> 
                   <div class="col-4"><input type="text" class="form-control" id="facebook" placeholder="facebook" /></div>
                   <div class="col-4"><b-form-select v-model="selected" :options="tipoSangre"></b-form-select></div>
                   <!-- ******* -->
                   <label class="col-12" for=""></label>
                   <div class="col-4"><input type="text" id="deportes" class="form-control" placeholder="Deportes"></div>
                   <div class="col-4"><input type="text" id="deportes" class="form-control" placeholder="Hobbie"></div>
                   <div class="col-4"><input type="text" id="deportes" class="form-control" placeholder="Idiomas"></div>
                   <!-- ******* -->
                   <label class="col-12" for="feedback-gmail"></label>
                   <div class="col-6"><input type="text" class="form-control" id="dir" placeholder="direccion de domicilio" /></div>
                   <div class="col-6"><input type="text" class="form-control" id="otb" placeholder="Barrio/ OTB" /></div>
                   <!-- ******* -->
                   <label class="col-12" for="">INFORMACION ACADEMICA</label>
                   <div class="col-3"><b-form-select  v-model="selected" :options="academyP"></b-form-select> <br></div>
                   <div class="col-3" ><b-form-select v-model="selected" :options="academyS"></b-form-select></div>
                   <div class="col-3"><b-form-select v-model="selected" :options="academyB"></b-form-select></div>
                   <div class="col-3"><input type="text" id="profesion" class="form-control" placeholder="Profesion"></div>
                   <!-- ************ -->
                   <label class="col-12" for="feedback-tel"></label>
                   <label class="col-12" for="feedback-tel"></label>
                   <div class="col-2"><button class="btn btn-primary" id="enviar">enviar</button></div>
                   <div class="col-2"><b-link type="button" class="btn btn-success" to="menu"> Atras</b-link></div>
                   <div class="col-2"><button class="btn btn-success" id="resetear">cancelar</button></div>
                

               </div>
         </div>
        </div>
     </div>
   <div class="col-2"></div>
 </div>
</template>
<script>
export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'seleccione una opcion' },
          { value: 'a', text: 'soltero/a' },
          { value: 'b', text: 'casad0/a' },
          { value: 'b', text: 'Divorciado/a' },
          { value: 'b', text: 'Viudo/a' },
        ],
        ciudad:[
         { value:null, text:'seleccione su ciudad'},
         { value: 'a', text:'Cochabamba'},
         { value: 'a', text:'La Paz'},
         { value: 'a', text:'Oruro'},
         { value: 'a', text:'Santa Cruz'},
         { value: 'a', text:'Tarija'},
         { value: 'a', text:'Pando'},
         { value: 'a', text:'Beni'},
         { value: 'a', text:'Sucre'},
         { value: 'a', text:'Potosi'}
        ],
        genero: [
          {value: null, text:'selection you gener'},
          {value:'a',text:'femenino'},
          {value:'a',text:'masculino'}
        ],
        tipoSangre:[
          {value: null, text:'selection you type'},
          {value:'a',text:'A'},
          {value:'a',text:'B'},
          {value:'a',text:'AB'},
          {value:'a',text:'O'},
          {value:'a',text:'Positivo'},
          {value:'a',text:'Negativo'},
          {value:'a',text:'O negativo'},
          {value:'a',text:'O positivo'},
          {value:'a',text:'A negativo'},
          {value:'a',text:'A positivo'},
          {value:'a',text:'B negativo'},
          {value:'a',text:'B positivo'},
          {value:'a',text:'AB negativo'},
          {value:'a',text:'AB positivo'},
        ],
        academyP:[
          {value:null, text:'primaria'},
          {value:'a', text:'completado'},
          {value:'a', text:'a-medias'},
          {value:'a', text:'no-iniciado'},
        ],
        academyS:[
          {value:null, text:'secundaria'},
          {value:'a', text:'completado'},
          {value:'a', text:'a-medias'},
          {value:'a', text:'no-iniciado'},
        ],
        academyB:[
          {value:null, text:'Bachiller'},
          {value:'a', text:'SI'},
          {value:'a', text:'NO'},
        ],
        
      }
    }
  }
</script>

<style>

</style>