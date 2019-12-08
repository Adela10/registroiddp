<template>
  <div class="row">
    <div class="col-8"></div>
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h4>Datos ministeriales</h4>
            <div class="row">
              <label for="" class="col-10">Fecha dedicacion</label>
              <div class="col-12"><input type="date" class="form-control" id="dedicacion" /></div>
              <label for="" class="col-10">Fecha conversion</label>
              <div class="col-12"><input type="date" class="form-control" id="conversion" /></div>
              <!-- ********* -->
              <label for="" class="col-12"></label>
              <label for="" class="col-10">Fecha bautismo</label>
              <div class="col-12"><input type="date" class="form-control" id="bautismo" /></div>
              <label for="" class="col-10">Fecha membrecia</label>
              <div class="col-12"><input type="date" class="form-control" id="membrecia" /></div>
              <!-- ***** -->
              <label for="" class="col-12"></label>
              <div><b-link type="button" class="btn btn-warning" to="menu">atras</b-link></div>
            </div>
          </div>
        </div>
      </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>