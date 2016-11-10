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

-numProc_tabla: Variable que representa a la cantidad de procesos activos en el
                sistema, la cual se utiliza para determinar el numero de filas
                de las matrices a construir en el algoritmo de deteccion de in-
                terbloqueo.

  -Identificadores referentes a los elementos HTML5 en las funciones de JQuery:
  ----------------------------------------------------------------------------
  -Iconos:
  -------
    -activPi: Icono que se incluye en la estructura del HTML5 para poder ver
    cuales procesos i se encuentran activos.

  -Tablas:
  -------
    -btnproc_i: Representa al boton del proceso i (en este caso son ementos HTML5
                <a></a> que representan enlaces de vinculos) que lo activa y
                muestra su fila correspondiente en cada una de las tablas, para
                asi ser llenada luego con los valores deseados dentro de estas
                tablas.

    -tabla_asignados: ID de la tabla de los recursos asignados actualmente

    -tabla_peticiones: ID de la tabla de los peticiones de recursos al sistema

  -Filas:
  ------
    -fta_pi con 0 <= i <= 14: ID de cada una de las filas correspondientes a la
                              tabla de recursos asignados, con un indice i que
                              representa a cada uno de los procesos.

    -ftp_pi con 0 <= i <= 14: ID de cada una de las filas correspondientes a la
                              tabla de peticiones de recursos, con un indice i
                              que representa a cada uno de los procesos.

  -Columnas:
  ---------
    -ftaicolj con 0 <= i <=14 y 1 <= j <= 5: ID que representa la cantidad de
                                            recursos j asignados actualmente a
                                            los procesos i del sistema.

    -ftpicolj con 0 <= i <=14 y 1 <= j <= 5: ID que representa los peticiones
                                            por parte de los procesos i de una
                                            cantidad de recursos j del sistema.
*/
var procesos_flags = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
/*Objeto que contiene la informacion de la cantidad de procesos activos y sus
nombres, ademas de una funcion para agregar o sacar el nombre de algun proceso*/
var inf_proc = {
  numProc_tabla : 0,
  nom_procs : [],
  sacarProceso_nom: function(nom_sigla) {
    var indice_np = this.nom_procs.indexOf(nom_sigla);
    if (indice_np > -1) {
      this.nom_procs.splice(indice_np, 1);
    }
  }
};
$(document).ready(function(){
  $('#btnproc_0, #btnproc_1, #btnproc_2, #btnproc_3, #btnproc_4,  #btnproc_5, #btnproc_6, #btnproc_7, #btnproc_8, #btnproc_9, #btnproc_10, #btnproc_11, #btnproc_12, #btnproc_13, #btnproc_14').click(function(event){
    //Explorador
    if($(event.target).attr('id')=='btnproc_0'){
      if (procesos_flags[0] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_0").append('<i id="activP0" class="fa fa-circle text-success" style="margin-left:95px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p0"></tr>');
        $("#fta_p0").append("<th>Explorador</th>");
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta_exp0" style="border-radius:5px;"></th>');
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta_exp1" style="border-radius:5px;"></th>');
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta_exp2" style="border-radius:5px;"></th>');
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta_exp3" style="border-radius:5px;"></th>');
        $("#fta_p0").append('<th><input class="form-control input-sm" type="text" id="fta_exp4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p0"></tr>');
        $("#ftp_p0").append("<th>Explorador</th>");
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp_exp0" style="border-radius:5px;"></th>');
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp_exp1" style="border-radius:5px;"></th>');
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp_exp2" style="border-radius:5px;"></th>');
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp_exp3" style="border-radius:5px;"></th>');
        $("#ftp_p0").append('<th><input class="form-control input-sm" type="text" id="ftp_exp4" style="border-radius:5px;"></th>');
        procesos_flags[0] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("exp");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP0").remove();
        $("#fta_p0").remove();
        $("#ftp_p0").remove();
        procesos_flags[0] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("exp");
      }
    }
    //Chrome
    else if ($(event.target).attr('id')=='btnproc_1') {
      if (procesos_flags[1] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_1").append('<i id="activP1" class="fa fa-circle text-success" style="margin-left:116px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p1"></tr>');
        $("#fta_p1").append("<th>Chrome</th>");
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta_chr0" style="border-radius:5px;"></th>');
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta_chr1" style="border-radius:5px;"></th>');
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta_chr2" style="border-radius:5px;"></th>');
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta_chr3" style="border-radius:5px;"></th>');
        $("#fta_p1").append('<th><input class="form-control input-sm" type="text" id="fta_chr4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p1"></tr>');
        $("#ftp_p1").append("<th>Chrome</th>");
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp_chr0" style="border-radius:5px;"></th>');
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp_chr1" style="border-radius:5px;"></th>');
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp_chr2" style="border-radius:5px;"></th>');
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp_chr3" style="border-radius:5px;"></th>');
        $("#ftp_p1").append('<th><input class="form-control input-sm" type="text" id="ftp_chr4" style="border-radius:5px;"></th>');
        procesos_flags[1] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("chr");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP1").remove();
        $("#fta_p1").remove();
        $("#ftp_p1").remove();
        procesos_flags[1] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("chr");
      }
    }
    //Terminal del sistema
    else if ($(event.target).attr('id')=='btnproc_2') {
      if (procesos_flags[2] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_2").append('<i id="activP2" class="fa fa-circle text-success" style="margin-left:39px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p2"></tr>');
        $("#fta_p2").append("<th>Terminal del sistema</th>");
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta_ter0" style="border-radius:5px;"></th>');
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta_ter1" style="border-radius:5px;"></th>');
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta_ter2" style="border-radius:5px;"></th>');
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta_ter3" style="border-radius:5px;"></th>');
        $("#fta_p2").append('<th><input class="form-control input-sm" type="text" id="fta_ter4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p2"></tr>');
        $("#ftp_p2").append("<th>Terminal del sistema</th>");
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp_ter0" style="border-radius:5px;"></th>');
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp_ter1" style="border-radius:5px;"></th>');
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp_ter2" style="border-radius:5px;"></th>');
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp_ter3" style="border-radius:5px;"></th>');
        $("#ftp_p2").append('<th><input class="form-control input-sm" type="text" id="ftp_ter4" style="border-radius:5px;"></th>');
        procesos_flags[2] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("ter");
      }
      else {
        //Elimiacion de fila si el proceso esta activo y lo desactiva
        $("#activP2").remove();
        $("#fta_p2").remove();
        $("#ftp_p2").remove();
        procesos_flags[2] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("ter");
      }
    }
    //Reproductor Multimedia
    else if ($(event.target).attr('id')=='btnproc_3') {
      if (procesos_flags[3] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_3").append('<i id="activP3" class="fa fa-circle text-success" style="margin-left:44px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p3"></tr>');
        $("#fta_p3").append("<th>Reproductor Multimedia</th>");
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta_rep0" style="border-radius:5px;"></th>');
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta_rep1" style="border-radius:5px;"></th>');
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta_rep2" style="border-radius:5px;"></th>');
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta_rep3" style="border-radius:5px;"></th>');
        $("#fta_p3").append('<th><input class="form-control input-sm" type="text" id="fta_rep4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p3"></tr>');
        $("#ftp_p3").append("<th>Reproductor Multimedia</th>");
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp_rep0" style="border-radius:5px;"></th>');
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp_rep1" style="border-radius:5px;"></th>');
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp_rep2" style="border-radius:5px;"></th>');
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp_rep3" style="border-radius:5px;"></th>');
        $("#ftp_p3").append('<th><input class="form-control input-sm" type="text" id="ftp_rep4" style="border-radius:5px;"></th>');
        procesos_flags[3] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("rep");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP3").remove();
        $("#fta_p3").remove();
        $("#ftp_p3").remove();
        procesos_flags[3] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("rep");
      }
    }
    //Notepad++
    else if ($(event.target).attr('id')=='btnproc_4') {
      if (procesos_flags[4] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_4").append('<i id="activP4" class="fa fa-circle text-success" style="margin-left:95px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p4"></tr>');
        $("#fta_p4").append("<th>Notepad++</th>");
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta_not0" style="border-radius:5px;"></th>');
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta_not1" style="border-radius:5px;"></th>');
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta_not2" style="border-radius:5px;"></th>');
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta_not3" style="border-radius:5px;"></th>');
        $("#fta_p4").append('<th><input class="form-control input-sm" type="text" id="fta_not4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p4"></tr>');
        $("#ftp_p4").append("<th>Notepad++</th>");
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp_not0" style="border-radius:5px;"></th>');
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp_not1" style="border-radius:5px;"></th>');
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp_not2" style="border-radius:5px;"></th>');
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp_not3" style="border-radius:5px;"></th>');
        $("#ftp_p4").append('<th><input class="form-control input-sm" type="text" id="ftp_not4" style="border-radius:5px;"></th>');
        procesos_flags[4] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("not");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP4").remove();
        $("#fta_p4").remove();
        $("#ftp_p4").remove();
        procesos_flags[4] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("not");
      }
    }
    //Administrador de tareas
    else if ($(event.target).attr('id')=='btnproc_5') {
      if (procesos_flags[5] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_5").append('<i id="activP5" class="fa fa-circle text-success" style="margin-left:61px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p5"></tr>');
        $("#fta_p5").append("<th>Administrador de tareas</th>");
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta_adm0" style="border-radius:5px;"></th>');
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta_adm1" style="border-radius:5px;"></th>');
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta_adm2" style="border-radius:5px;"></th>');
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta_adm3" style="border-radius:5px;"></th>');
        $("#fta_p5").append('<th><input class="form-control input-sm" type="text" id="fta_adm4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p5"></tr>');
        $("#ftp_p5").append("<th>Administrador de tareas</th>");
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp_adm0" style="border-radius:5px;"></th>');
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp_adm1" style="border-radius:5px;"></th>');
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp_adm2" style="border-radius:5px;"></th>');
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp_adm3" style="border-radius:5px;"></th>');
        $("#ftp_p5").append('<th><input class="form-control input-sm" type="text" id="ftp_adm4" style="border-radius:5px;"></th>');
        procesos_flags[5] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("adm");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP5").remove();
        $("#fta_p5").remove();
        $("#ftp_p5").remove();
        procesos_flags[5] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("adm");
      }
    }
    //Skype
    else if ($(event.target).attr('id')=='btnproc_6') {
      if (procesos_flags[6] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_6").append('<i id="activP6" class="fa fa-circle text-success" style="margin-left:123px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p6"></tr>');
        $("#fta_p6").append("<th>Skype</th>");
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta_sky0" style="border-radius:5px;"></th>');
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta_sky1" style="border-radius:5px;"></th>');
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta_sky2" style="border-radius:5px;"></th>');
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta_sky3" style="border-radius:5px;"></th>');
        $("#fta_p6").append('<th><input class="form-control input-sm" type="text" id="fta_sky4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p6"></tr>');
        $("#ftp_p6").append("<th>Skype</th>");
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp_sky0" style="border-radius:5px;"></th>');
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp_sky1" style="border-radius:5px;"></th>');
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp_sky2" style="border-radius:5px;"></th>');
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp_sky3" style="border-radius:5px;"></th>');
        $("#ftp_p6").append('<th><input class="form-control input-sm" type="text" id="ftp_sky4" style="border-radius:5px;"></th>');
        procesos_flags[6] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("sky");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP6").remove();
        $("#fta_p6").remove();
        $("#ftp_p6").remove();
        procesos_flags[6] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("sky");
      }
    }
    //Hangouts
    else if ($(event.target).attr('id')=='btnproc_7') {
      if (procesos_flags[7] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_7").append('<i id="activP7" class="fa fa-circle text-success" style="margin-left:101px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p7"></tr>');
        $("#fta_p7").append("<th>Hangouts</th>");
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta_han0" style="border-radius:5px;"></th>');
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta_han1" style="border-radius:5px;"></th>');
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta_han2" style="border-radius:5px;"></th>');
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta_han3" style="border-radius:5px;"></th>');
        $("#fta_p7").append('<th><input class="form-control input-sm" type="text" id="fta_han4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p7"></tr>');
        $("#ftp_p7").append("<th>Hangouts</th>");
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp_han0" style="border-radius:5px;"></th>');
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp_han1" style="border-radius:5px;"></th>');
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp_han2" style="border-radius:5px;"></th>');
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp_han3" style="border-radius:5px;"></th>');
        $("#ftp_p7").append('<th><input class="form-control input-sm" type="text" id="ftp_han4" style="border-radius:5px;"></th>');
        procesos_flags[7] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("han");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP7").remove();
        $("#fta_p7").remove();
        $("#ftp_p7").remove();
        procesos_flags[7] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("han");
      }
    }
    //Winrar
    else if ($(event.target).attr('id')=='btnproc_8') {
      if (procesos_flags[8] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_8").append('<i id="activP8" class="fa fa-circle text-success" style="margin-left:119px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p8"></tr>');
        $("#fta_p8").append("<th>Winrar</th>");
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta_win0" style="border-radius:5px;"></th>');
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta_win1" style="border-radius:5px;"></th>');
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta_win2" style="border-radius:5px;"></th>');
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta_win3" style="border-radius:5px;"></th>');
        $("#fta_p8").append('<th><input class="form-control input-sm" type="text" id="fta_win4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p8"></tr>');
        $("#ftp_p8").append("<th>Winrar</th>");
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp_win0" style="border-radius:5px;"></th>');
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp_win1" style="border-radius:5px;"></th>');
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp_win2" style="border-radius:5px;"></th>');
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp_win3" style="border-radius:5px;"></th>');
        $("#ftp_p8").append('<th><input class="form-control input-sm" type="text" id="ftp_win4" style="border-radius:5px;"></th>');
        procesos_flags[8] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("win");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP8").remove();
        $("#fta_p8").remove();
        $("#ftp_p8").remove();
        procesos_flags[8] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("win");
      }
    }
    //Apache Server
    else if ($(event.target).attr('id')=='btnproc_9') {
      if (procesos_flags[9] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_9").append('<i id="activP9" class="fa fa-circle text-success" style="margin-left:73px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p9"></tr>');
        $("#fta_p9").append("<th>Apache Server</th>");
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta_apa0" style="border-radius:5px;"></th>');
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta_apa1" style="border-radius:5px;"></th>');
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta_apa2" style="border-radius:5px;"></th>');
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta_apa3" style="border-radius:5px;"></th>');
        $("#fta_p9").append('<th><input class="form-control input-sm" type="text" id="fta_apa4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p9"></tr>');
        $("#ftp_p9").append("<th>Apache Server</th>");
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp_apa0" style="border-radius:5px;"></th>');
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp_apa1" style="border-radius:5px;"></th>');
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp_apa2" style="border-radius:5px;"></th>');
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp_apa3" style="border-radius:5px;"></th>');
        $("#ftp_p9").append('<th><input class="form-control input-sm" type="text" id="ftp_apa4" style="border-radius:5px;"></th>');
        procesos_flags[9] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("apa");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activP9").remove();
        $("#fta_p9").remove();
        $("#ftp_p9").remove();
        procesos_flags[9] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("apa");
      }
    }
    //Whatsapp
    else if ($(event.target).attr('id')=='btnproc_10') {
      if (procesos_flags[10] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_10").append('<i id="activP10" class="fa fa-circle text-success" style="margin-left:98px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p10"></tr>');
        $("#fta_p10").append("<th>Whatsapp</th>");
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta_wha0" style="border-radius:5px;"></th>');
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta_wha1" style="border-radius:5px;"></th>');
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta_wha2" style="border-radius:5px;"></th>');
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta_wha3" style="border-radius:5px;"></th>');
        $("#fta_p10").append('<th><input class="form-control input-sm" type="text" id="fta_wha4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p10"></tr>');
        $("#ftp_p10").append("<th>Whatsapp</th>");
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp_wha0" style="border-radius:5px;"></th>');
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp_wha1" style="border-radius:5px;"></th>');
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp_wha2" style="border-radius:5px;"></th>');
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp_wha3" style="border-radius:5px;"></th>');
        $("#ftp_p10").append('<th><input class="form-control input-sm" type="text" id="ftp_wha4" style="border-radius:5px;"></th>');
        procesos_flags[10] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("wha");
      }
      else {
        //Elimiacion de la fila si el proceso esta activo y lo desactiva
        $("#activP10").remove();
        $("#fta_p10").remove();
        $("#ftp_p10").remove();
        procesos_flags[10] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("wha");
      }
    }
    //Git
    else if ($(event.target).attr('id')=='btnproc_11') {
      if (procesos_flags[11] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_11").append('<i id="activP11" class="fa fa-circle text-success" style="margin-left:140px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p11"></tr>');
        $("#fta_p11").append("<th>Git</th>");
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta_git0" style="border-radius:5px;"></th>');
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta_git1" style="border-radius:5px;"></th>');
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta_git2" style="border-radius:5px;"></th>');
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta_git3" style="border-radius:5px;"></th>');
        $("#fta_p11").append('<th><input class="form-control input-sm" type="text" id="fta_git4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p11"></tr>');
        $("#ftp_p11").append("<th>Git</th>");
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp_git0" style="border-radius:5px;"></th>');
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp_git1" style="border-radius:5px;"></th>');
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp_git2" style="border-radius:5px;"></th>');
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp_git3" style="border-radius:5px;"></th>');
        $("#ftp_p11").append('<th><input class="form-control input-sm" type="text" id="ftp_git4" style="border-radius:5px;"></th>');
        procesos_flags[11] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("git");
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activP11").remove();
        $("#fta_p11").remove();
        $("#ftp_p11").remove();
        procesos_flags[11] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("git");
      }
    }
    //Calculadora
    else if ($(event.target).attr('id')=='btnproc_12') {
      if (procesos_flags[12] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_12").append('<i id="activP12" class="fa fa-circle text-success" style="margin-left:86px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p12"></tr>');
        $("#fta_p12").append("<th>Calculadora</th>");
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta_cal0" style="border-radius:5px;"></th>');
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta_cal1" style="border-radius:5px;"></th>');
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta_cal2" style="border-radius:5px;"></th>');
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta_cal3" style="border-radius:5px;"></th>');
        $("#fta_p12").append('<th><input class="form-control input-sm" type="text" id="fta_cal4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p12"></tr>');
        $("#ftp_p12").append("<th>Calculadora</th>");
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp_cal0" style="border-radius:5px;"></th>');
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp_cal1" style="border-radius:5px;"></th>');
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp_cal2" style="border-radius:5px;"></th>');
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp_cal3" style="border-radius:5px;"></th>');
        $("#ftp_p12").append('<th><input class="form-control input-sm" type="text" id="ftp_cal4" style="border-radius:5px;"></th>');
        procesos_flags[12] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("cal");
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activP12").remove();
        $("#fta_p12").remove();
        $("#ftp_p12").remove();
        procesos_flags[12] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("cal");
      }
    }
    //Acrobat Reader
    else if ($(event.target).attr('id')=='btnproc_13') {
      if (procesos_flags[13] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_13").append('<i id="activP13" class="fa fa-circle text-success" style="margin-left:66px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p13"></tr>');
        $("#fta_p13").append("<th>Acrobat Reader</th>");
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta_acr0" style="border-radius:5px;"></th>');
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta_acr1" style="border-radius:5px;"></th>');
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta_acr2" style="border-radius:5px;"></th>');
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta_acr3" style="border-radius:5px;"></th>');
        $("#fta_p13").append('<th><input class="form-control input-sm" type="text" id="fta_acr4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p13"></tr>');
        $("#ftp_p13").append("<th>Acrobat Reader</th>");
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp_acr0" style="border-radius:5px;"></th>');
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp_acr1" style="border-radius:5px;"></th>');
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp_acr2" style="border-radius:5px;"></th>');
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp_acr3" style="border-radius:5px;"></th>');
        $("#ftp_p13").append('<th><input class="form-control input-sm" type="text" id="ftp_acr4" style="border-radius:5px;"></th>');
        procesos_flags[13] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("acr");
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activP13").remove();
        $("#fta_p13").remove();
        $("#ftp_p13").remove();
        procesos_flags[13] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("acr");
      }
    }
    //Gestion de la bateria
    else if ($(event.target).attr('id')=='btnproc_14') {
      if (procesos_flags[14] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btnproc_14").append('<i id="activP14" class="fa fa-circle text-success" style="margin-left:35px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_p14"></tr>');
        $("#fta_p14").append("<th>Gestion de la bateria</th>");
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta_ges0" style="border-radius:5px;"></th>');
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta_ges1" style="border-radius:5px;"></th>');
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta_ges2" style="border-radius:5px;"></th>');
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta_ges3" style="border-radius:5px;"></th>');
        $("#fta_p14").append('<th><input class="form-control input-sm" type="text" id="fta_ges4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_p14"></tr>');
        $("#ftp_p14").append("<th>Gestion de la bateria</th>");
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp_ges0" style="border-radius:5px;"></th>');
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp_ges1" style="border-radius:5px;"></th>');
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp_ges2" style="border-radius:5px;"></th>');
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp_ges3" style="border-radius:5px;"></th>');
        $("#ftp_p14").append('<th><input class="form-control input-sm" type="text" id="ftp_ges4" style="border-radius:5px;"></th>');
        procesos_flags[14] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("ges");
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activP14").remove();
        $("#fta_p14").remove();
        $("#ftp_p14").remove();
        procesos_flags[14] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("ges");
      }
    }
  });
});
