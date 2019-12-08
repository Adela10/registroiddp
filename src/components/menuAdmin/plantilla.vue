<template>
    <div class="body">
        

      <div class="sidebar-container">

     <img src="@/assets/gif/boletin.gif"  width="90%" class="center">
  <ul class="sidebar-navigation">
    <li class="header">Registros</li>
    <li>
      <a href="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Usuarios</a>
       <ul class="collapse list-unstyled" id="homeSubmenu">
         <b-form-select>
           <option value="inf-usuario">Inf Usuario</option>
         </b-form-select>
       </ul>
    </li>
  </ul>
</div>

 <div class="content-container" >
    <nav  class="navbar navbar-default " style="background-color:gray-200">
           <div class="col-2 float-left">
               <div align="left" >
                  <img src="@/assets/image/escudo.jpg"  width="60%" height="60%"/>
               </div>
           </div>
           <div  align="center">
             <h1>IGLESIA DIOS DE LA PROFESIA</h1>
           </div>
           <div class="float-right">
                <div >
                <img class="imgRedonda" src="@/assets/image/usuario.png" />
          </div>
       </div>
     </nav> 
   </div>
 </div>
</template>

<script>
    export default {
        
    }
</script>

<style >
.sidebar-container {
  position: fixed;
  width: 220px;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #1a1a1a;
  color: #fff;
}

.content-container {
  padding-top: 20px;
}

.sidebar-logo {
  padding: 10px 15px 10px 30px;
  font-size: 20px;
  background-color: #2574A9;
}

.sidebar-navigation {
  padding: 0;
  margin: 0;
  list-style-type: none;
  position: relative;
}

.sidebar-navigation li {
  background-color: transparent;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 20px;
}

.sidebar-navigation li a {
  padding: 10px 15px 10px 30px;
  display: block;
  color: #fff;
}

.sidebar-navigation li .fa {
  margin-right: 10px;
}

.sidebar-navigation li a:active,
.sidebar-navigation li a:hover,
.sidebar-navigation li a:focus {
  text-decoration: none;
  outline: none;
}

.sidebar-navigation li::before {
  background-color: #2574A9;
  position: absolute;
  content: '';
  height: 100%;
  left: 0;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

.sidebar-navigation li:hover::before {
  width: 100%;
}

.sidebar-navigation .header {
  font-size: 12px;
  text-transform: uppercase;
  background-color: #151515;
  padding: 10px 15px 10px 30px;
}

.sidebar-navigation .header::before {
  background-color: transparent;
}

.content-container {
  padding-left: 220px;
}
</style>