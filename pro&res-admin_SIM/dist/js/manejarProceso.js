/*Descripcion del script:
------------------------

Javascript que activa y desactiva cualquiera de los 15 procesos del sistema,
para asi mostrar o no la informacion correspondiente a la tablas de recursos
asignados actualmente a los procesos del sistema y la tabla de peticiones al
mismo por parte de estos procesos.

Entradas en la funcion principal de este Javascript:
---------------------------------------------------

-Nota inicial: Los 15 procesos en algunos identificadores estan referenciados
              en el orden en que aparacen en la vista de la pagina en orden
              descendente desde el 0 hasta el 14.

-procesos_flags: Estados de cada uno de los 15 procesos, siendo 1 la representa-
cion del estado activo y 0 la del estado inactivo.

  -Identificadores referentes a los elementos HTML5 en las funciones de JQuery:
  ----------------------------------------------------------------------------
  -Iconos:
  -------
    -activPi: icono que se incluye en la estructura del HTML5 para poder ver
    cuales procesos i se encuentran activos.

  -Tablas:
  -------
    -btnproc_i: Representa al boton del proceso i (en este caso son ementos HTML5
    <a></a> que representan enlaces de vinculos) que lo activa y muestra su fila
    correspondiente en cada una de las tablas, para asi ser llenada luego con los
    valores deseados dentro de estas tablas.

    -tabla_asignados: id de la tabla de los recursos asignados actualmente

    -tabla_peticiones: id de la tabla de los peticiones de recursos al sistema

  -Filas:
  ------
    -fta_pi con 0 <= i <= 14: id de cada una de las filas correspondientes a la
    tabla de recursos asignados, con un indice i que representa a cada uno de
    los procesos.

    -ftp_pi con 0 <= i <= 14: id de cada una de las filas correspondientes a la
    tabla de peticiones de recursos, con un indice i que representa a cada uno
    de los procesos.

  -Columnas:
  ---------
    -ftaicolj con 0 <= i <=14 y 1 <= j <= 5: id que representa la cantidad de
    recursos j asignados actualmente a los procesos i del sistema.

    -ftpicolj con 0 <= i <=14 y 1 <= j <= 5: id que representa los peticiones
    por parte de los procesos i de una cantidad de recursos j del sistema.
*/
$(document).ready(function(){
  var procesos_flags = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  $('#btnproc_0, #btnproc_1, #btnproc_2, #btnproc_3, #btnproc_4,  #btnproc_5, #btnproc_6, #btnproc_7, #btnproc_8, #btnproc_9, #btnproc_10, #btnproc_11, #btnproc_12, #btnproc_13, #btnproc_14').click(function(event){
    //Explorador
    if($(event.target).attr('id')=='btnproc_0'){
      if (procesos_flags[0] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_0").append('<i id="activP0" class="fa fa-circle text-success" style="margin-left:95px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p0"></tr>');
        $("#fta_p0").append("<th>Explorador</th>");
        //$("#fta_p0").append('<th id="fta0col0">Activo</th>');
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta0col1" style="border-radius:5px;"></th>');
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta0col2" style="border-radius:5px;"></th>');
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta0col3" style="border-radius:5px;"></th>');
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta0col4" style="border-radius:5px;"></th>');
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta0col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p0"></tr>');
        $("#ftp_p0").append("<th>Explorador</th>");
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp0col1" style="border-radius:5px;"></th>');
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp0col2" style="border-radius:5px;"></th>');
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp0col3" style="border-radius:5px;"></th>');
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp0col4" style="border-radius:5px;"></th>');
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp0col5" style="border-radius:5px;"></th>');
        procesos_flags[0] = 1;
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP0").remove();
        $("#fta_p0").remove();
        $("#ftp_p0").remove();
        procesos_flags[0] = 0;
      }
    }
    //Chrome
    else if ($(event.target).attr('id')=='btnproc_1') {
      if (procesos_flags[1] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_1").append('<i id="activP1" class="fa fa-circle text-success" style="margin-left:116px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p1"></tr>');
        $("#fta_p1").append("<th>Chrome</th>");
        //$("#fta_p1").append('<th id="fta1col0">Activo</th>');
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta1col1" style="border-radius:5px;"></th>');
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta1col2" style="border-radius:5px;"></th>');
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta1col3" style="border-radius:5px;"></th>');
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta1col4" style="border-radius:5px;"></th>');
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta1col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p1"></tr>');
        $("#ftp_p1").append("<th>Chrome</th>");
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp1col1" style="border-radius:5px;"></th>');
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp1col2" style="border-radius:5px;"></th>');
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp1col3" style="border-radius:5px;"></th>');
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp1col4" style="border-radius:5px;"></th>');
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp1col5" style="border-radius:5px;"></th>');
        procesos_flags[1] = 1;
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP1").remove();
        $("#fta_p1").remove();
        $("#ftp_p1").remove();
        procesos_flags[1] = 0;
      }
    }
    //Terminal del sistema
    else if ($(event.target).attr('id')=='btnproc_2') {
      if (procesos_flags[2] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_2").append('<i id="activP2" class="fa fa-circle text-success" style="margin-left:39px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p2"></tr>');
        $("#fta_p2").append("<th>Terminal del sistema</th>");
        //$("#fta_p2").append('<th id="fta2col0">Activo</th>');
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta2col1" style="border-radius:5px;"></th>');
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta2col2" style="border-radius:5px;"></th>');
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta2col3" style="border-radius:5px;"></th>');
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta2col4" style="border-radius:5px;"></th>');
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta2col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p2"></tr>');
        $("#ftp_p2").append("<th>Terminal del sistema</th>");
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp2col1" style="border-radius:5px;"></th>');
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp2col2" style="border-radius:5px;"></th>');
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp2col3" style="border-radius:5px;"></th>');
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp2col4" style="border-radius:5px;"></th>');
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp2col5" style="border-radius:5px;"></th>');
        procesos_flags[2] = 1;
      }
      else {
        //Elimiacion de fila si el proceso esta activo y lo desactiva
        $("#activP2").remove();
        $("#fta_p2").remove();
        $("#ftp_p2").remove();
        procesos_flags[2] = 0;
      }
    }
    //Reproductor Multimedia
    else if ($(event.target).attr('id')=='btnproc_3') {
      if (procesos_flags[3] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_3").append('<i id="activP3" class="fa fa-circle text-success" style="margin-left:44px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p3"></tr>');
        $("#fta_p3").append("<th>Reproductor Multimedia</th>");
        //$("#fta_p3").append('<th id="fta3col0">Activo</th>');
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta3col1" style="border-radius:5px;"></th>');
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta3col2" style="border-radius:5px;"></th>');
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta3col3" style="border-radius:5px;"></th>');
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta3col4" style="border-radius:5px;"></th>');
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta3col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p3"></tr>');
        $("#ftp_p3").append("<th>Reproductor Multimedia</th>");
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp3col1" style="border-radius:5px;"></th>');
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp3col2" style="border-radius:5px;"></th>');
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp3col3" style="border-radius:5px;"></th>');
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp3col4" style="border-radius:5px;"></th>');
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp3col5" style="border-radius:5px;"></th>');
        procesos_flags[3] = 1;
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP3").remove();
        $("#fta_p3").remove();
        $("#ftp_p3").remove();
        procesos_flags[3] = 0;
      }
    }
    //Notepad++
    else if ($(event.target).attr('id')=='btnproc_4') {
      if (procesos_flags[4] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_4").append('<i id="activP4" class="fa fa-circle text-success" style="margin-left:95px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p4"></tr>');
        $("#fta_p4").append("<th>Notepad++</th>");
        //$("#fta_p4").append('<th id="fta4col0">Activo</th>');
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta4col1" style="border-radius:5px;"></th>');
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta4col2" style="border-radius:5px;"></th>');
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta4col3" style="border-radius:5px;"></th>');
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta4col4" style="border-radius:5px;"></th>');
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta4col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p4"></tr>');
        $("#ftp_p4").append("<th>Notepad++</th>");
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp4col1" style="border-radius:5px;"></th>');
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp4col2" style="border-radius:5px;"></th>');
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp4col3" style="border-radius:5px;"></th>');
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp4col4" style="border-radius:5px;"></th>');
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp4col5" style="border-radius:5px;"></th>');
        procesos_flags[4] = 1;
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP4").remove();
        $("#fta_p4").remove();
        $("#ftp_p4").remove();
        procesos_flags[4] = 0;
      }
    }
    //Administrador de tareas
    else if ($(event.target).attr('id')=='btnproc_5') {
      if (procesos_flags[5] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_5").append('<i id="activP5" class="fa fa-circle text-success" style="margin-left:61px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p5"></tr>');
        $("#fta_p5").append("<th>Administrador de tareas</th>");
        //$("#fta_p5").append('<th id="fta5col0">Activo</th>');
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta5col1" style="border-radius:5px;"></th>');
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta5col2" style="border-radius:5px;"></th>');
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta5col3" style="border-radius:5px;"></th>');
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta5col4" style="border-radius:5px;"></th>');
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta5col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p5"></tr>');
        $("#ftp_p5").append("<th>Administrador de tareas</th>");
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp5col1" style="border-radius:5px;"></th>');
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp5col2" style="border-radius:5px;"></th>');
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp5col3" style="border-radius:5px;"></th>');
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp5col4" style="border-radius:5px;"></th>');
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp5col5" style="border-radius:5px;"></th>');
        procesos_flags[5] = 1;
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP5").remove();
        $("#fta_p5").remove();
        $("#ftp_p5").remove();
        procesos_flags[5] = 0;
      }
    }
    //Skype
    else if ($(event.target).attr('id')=='btnproc_6') {
      if (procesos_flags[6] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_6").append('<i id="activP6" class="fa fa-circle text-success" style="margin-left:123px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p6"></tr>');
        $("#fta_p6").append("<th>Skype</th>");
        //$("#fta_p6").append('<th id="fta6col0">Activo</th>');
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta6col1" style="border-radius:5px;"></th>');
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta6col2" style="border-radius:5px;"></th>');
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta6col3" style="border-radius:5px;"></th>');
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta6col4" style="border-radius:5px;"></th>');
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta6col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p6"></tr>');
        $("#ftp_p6").append("<th>Skype</th>");
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp6col1" style="border-radius:5px;"></th>');
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp6col2" style="border-radius:5px;"></th>');
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp6col3" style="border-radius:5px;"></th>');
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp6col4" style="border-radius:5px;"></th>');
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp6col5" style="border-radius:5px;"></th>');
        procesos_flags[6] = 1;
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP6").remove();
        $("#fta_p6").remove();
        $("#ftp_p6").remove();
        procesos_flags[6] = 0;
      }
    }
    //Hangouts
    else if ($(event.target).attr('id')=='btnproc_7') {
      if (procesos_flags[7] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_7").append('<i id="activP7" class="fa fa-circle text-success" style="margin-left:101px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p7"></tr>');
        $("#fta_p7").append("<th>Hangouts</th>");
        //$("#fta_p7").append('<th id="fta7col0">Activo</th>');
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta7col1" style="border-radius:5px;"></th>');
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta7col2" style="border-radius:5px;"></th>');
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta7col3" style="border-radius:5px;"></th>');
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta7col4" style="border-radius:5px;"></th>');
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta7col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p7"></tr>');
        $("#ftp_p7").append("<th>Hangouts</th>");
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp7col1" style="border-radius:5px;"></th>');
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp7col2" style="border-radius:5px;"></th>');
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp7col3" style="border-radius:5px;"></th>');
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp7col4" style="border-radius:5px;"></th>');
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp7col5" style="border-radius:5px;"></th>');
        procesos_flags[7] = 1;
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP7").remove();
        $("#fta_p7").remove();
        $("#ftp_p7").remove();
        procesos_flags[7] = 0;
      }
    }
    //Winrar
    else if ($(event.target).attr('id')=='btnproc_8') {
      if (procesos_flags[8] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_8").append('<i id="activP8" class="fa fa-circle text-success" style="margin-left:119px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p8"></tr>');
        $("#fta_p8").append("<th>Winrar</th>");
        //$("#fta_p8").append('<th id="fta8col0">Activo</th>');
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta8col1" style="border-radius:5px;"></th>');
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta8col2" style="border-radius:5px;"></th>');
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta8col3" style="border-radius:5px;"></th>');
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta8col4" style="border-radius:5px;"></th>');
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta8col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p8"></tr>');
        $("#ftp_p8").append("<th>Winrar</th>");
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp8col1" style="border-radius:5px;"></th>');
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp8col2" style="border-radius:5px;"></th>');
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp8col3" style="border-radius:5px;"></th>');
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp8col4" style="border-radius:5px;"></th>');
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp8col5" style="border-radius:5px;"></th>');
        procesos_flags[8] = 1;
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP8").remove();
        $("#fta_p8").remove();
        $("#ftp_p8").remove();
        procesos_flags[8] = 0;
      }
    }
    //Apache Server
    else if ($(event.target).attr('id')=='btnproc_9') {
      if (procesos_flags[9] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_9").append('<i id="activP9" class="fa fa-circle text-success" style="margin-left:73px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p9"></tr>');
        $("#fta_p9").append("<th>Apache Server</th>");
        //$("#fta_p9").append('<th id="fta9col0">Activo</th>');
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta9col1" style="border-radius:5px;"></th>');
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta9col2" style="border-radius:5px;"></th>');
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta9col3" style="border-radius:5px;"></th>');
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta9col4" style="border-radius:5px;"></th>');
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta9col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p9"></tr>');
        $("#ftp_p9").append("<th>Apache Server</th>");
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp9col1" style="border-radius:5px;"></th>');
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp9col2" style="border-radius:5px;"></th>');
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp9col3" style="border-radius:5px;"></th>');
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp9col4" style="border-radius:5px;"></th>');
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp9col5" style="border-radius:5px;"></th>');
        procesos_flags[9] = 1;
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP9").remove();
        $("#fta_p9").remove();
        $("#ftp_p9").remove();
        procesos_flags[9] = 0;
      }
    }
    //Whatsapp
    else if ($(event.target).attr('id')=='btnproc_10') {
      if (procesos_flags[10] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_10").append('<i id="activP10" class="fa fa-circle text-success" style="margin-left:98px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p10"></tr>');
        $("#fta_p10").append("<th>Whatsapp</th>");
        //$("#fta_p10").append('<th id="fta10col0">Activo</th>');
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta10col1" style="border-radius:5px;"></th>');
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta10col2" style="border-radius:5px;"></th>');
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta10col3" style="border-radius:5px;"></th>');
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta10col4" style="border-radius:5px;"></th>');
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta10col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p10"></tr>');
        $("#ftp_p10").append("<th>Whatsapp</th>");
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp10col1" style="border-radius:5px;"></th>');
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp10col2" style="border-radius:5px;"></th>');
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp10col3" style="border-radius:5px;"></th>');
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp10col4" style="border-radius:5px;"></th>');
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp10col5" style="border-radius:5px;"></th>');
        procesos_flags[10] = 1;
      }
      else {
        //Elimiacion de la fila si el proceso esta activo y lo desactiva
        $("#activP10").remove();
        $("#fta_p10").remove();
        $("#ftp_p10").remove();
        procesos_flags[10] = 0;
      }
    }
    //Git
    else if ($(event.target).attr('id')=='btnproc_11') {
      if (procesos_flags[11] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_11").append('<i id="activP11" class="fa fa-circle text-success" style="margin-left:140px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p11"></tr>');
        $("#fta_p11").append("<th>Git</th>");
        //$("#fta_p11").append('<th id="fta11col0">Activo</th>');
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta11col1" style="border-radius:5px;"></th>');
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta11col2" style="border-radius:5px;"></th>');
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta11col3" style="border-radius:5px;"></th>');
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta11col4" style="border-radius:5px;"></th>');
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta11col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p11"></tr>');
        $("#ftp_p11").append("<th>Git</th>");
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp11col1" style="border-radius:5px;"></th>');
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp11col2" style="border-radius:5px;"></th>');
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp11col3" style="border-radius:5px;"></th>');
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp11col4" style="border-radius:5px;"></th>');
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp11col5" style="border-radius:5px;"></th>');
        procesos_flags[11] = 1;
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activP11").remove();
        $("#fta_p11").remove();
        $("#ftp_p11").remove();
        procesos_flags[11] = 0;
      }
    }
    //Calculadora
    else if ($(event.target).attr('id')=='btnproc_12') {
      if (procesos_flags[12] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_12").append('<i id="activP12" class="fa fa-circle text-success" style="margin-left:86px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p12"></tr>');
        $("#fta_p12").append("<th>Calculadora</th>");
        //$("#fta_p12").append('<th id="fta12col0">Activo</th>');
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta12col1" style="border-radius:5px;"></th>');
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta12col2" style="border-radius:5px;"></th>');
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta12col3" style="border-radius:5px;"></th>');
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta12col4" style="border-radius:5px;"></th>');
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta12col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p12"></tr>');
        $("#ftp_p12").append("<th>Calculadora</th>");
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp12col1" style="border-radius:5px;"></th>');
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp12col2" style="border-radius:5px;"></th>');
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp12col3" style="border-radius:5px;"></th>');
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp12col4" style="border-radius:5px;"></th>');
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp12col5" style="border-radius:5px;"></th>');
        procesos_flags[12] = 1;
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activP12").remove();
        $("#fta_p12").remove();
        $("#ftp_p12").remove();
        procesos_flags[12] = 0;
      }
    }
    //Acrobat Reader
    else if ($(event.target).attr('id')=='btnproc_13') {
      if (procesos_flags[13] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_13").append('<i id="activP13" class="fa fa-circle text-success" style="margin-left:66px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p13"></tr>');
        $("#fta_p13").append("<th>Acrobat Reader</th>");
        //$("#fta_p13").append('<th id="fta13col0">Activo</th>');
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta13col1" style="border-radius:5px;"></th>');
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta13col2" style="border-radius:5px;"></th>');
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta13col3" style="border-radius:5px;"></th>');
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta13col4" style="border-radius:5px;"></th>');
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta13col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p13"></tr>');
        $("#ftp_p13").append("<th>Acrobat Reader</th>");
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp13col1" style="border-radius:5px;"></th>');
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp13col2" style="border-radius:5px;"></th>');
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp13col3" style="border-radius:5px;"></th>');
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp13col4" style="border-radius:5px;"></th>');
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp13col5" style="border-radius:5px;"></th>');
        procesos_flags[13] = 1;
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activP13").remove();
        $("#fta_p13").remove();
        $("#ftp_p13").remove();
        procesos_flags[13] = 0;
      }
    }
    //Gestion de la bateria
    else if ($(event.target).attr('id')=='btnproc_14') {
      if (procesos_flags[14] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_14").append('<i id="activP14" class="fa fa-circle text-success" style="margin-left:35px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p14"></tr>');
        $("#fta_p14").append("<th>Gestion de la bateria</th>");
        //$("#fta_p14").append('<th id="fta14col0">Activo</th>');
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta14col1" style="border-radius:5px;"></th>');
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta14col2" style="border-radius:5px;"></th>');
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta14col3" style="border-radius:5px;"></th>');
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta14col4" style="border-radius:5px;"></th>');
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta14col5" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p14"></tr>');
        $("#ftp_p14").append("<th>Gestion de la bateria</th>");
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp14col1" style="border-radius:5px;"></th>');
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp14col2" style="border-radius:5px;"></th>');
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp14col3" style="border-radius:5px;"></th>');
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp14col4" style="border-radius:5px;"></th>');
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp14col5" style="border-radius:5px;"></th>');
        procesos_flags[14] = 1;
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activP14").remove();
        $("#fta_p14").remove();
        $("#ftp_p14").remove();
        procesos_flags[14] = 0;
      }
    }
  });
});
