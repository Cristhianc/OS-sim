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
  $('#btn_exp, #btn_chr, #btn_ter, #btn_rep, #btn_not,  #btn_adm, #btn_sky, #btn_han, #btn_win, #btn_apa, #btn_wha, #btn_git, #btn_cal, #btn_acr, #btn_ges').click(function(event){
    //Explorador
    if($(event.target).attr('id')=='btn_exp'){
      if (procesos_flags[0] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_exp").append('<i id="activ_exp" class="fa fa-circle text-success" style="margin-left:95px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_exp"></tr>');
        $("#fta_exp").append("<th>Explorador</th>");
        $("#fta_exp").append('<th><input class="form-control input-sm" type="text" id="fta_exp0" style="border-radius:5px;"></th>');
        $("#fta_exp").append('<th><input class="form-control input-sm" type="text" id="fta_exp1" style="border-radius:5px;"></th>');
        $("#fta_exp").append('<th><input class="form-control input-sm" type="text" id="fta_exp2" style="border-radius:5px;"></th>');
        $("#fta_exp").append('<th><input class="form-control input-sm" type="text" id="fta_exp3" style="border-radius:5px;"></th>');
        $("#fta_exp").append('<th><input class="form-control input-sm" type="text" id="fta_exp4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_exp"></tr>');
        $("#ftp_exp").append("<th>Explorador</th>");
        $("#ftp_exp").append('<th><input class="form-control input-sm" type="text" id="ftp_exp0" style="border-radius:5px;"></th>');
        $("#ftp_exp").append('<th><input class="form-control input-sm" type="text" id="ftp_exp1" style="border-radius:5px;"></th>');
        $("#ftp_exp").append('<th><input class="form-control input-sm" type="text" id="ftp_exp2" style="border-radius:5px;"></th>');
        $("#ftp_exp").append('<th><input class="form-control input-sm" type="text" id="ftp_exp3" style="border-radius:5px;"></th>');
        $("#ftp_exp").append('<th><input class="form-control input-sm" type="text" id="ftp_exp4" style="border-radius:5px;"></th>');
        procesos_flags[0] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("exp");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activ_exp").remove();
        $("#fta_exp").remove();
        $("#ftp_exp").remove();
        procesos_flags[0] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("exp");
      }
    }
    //Chrome
    else if ($(event.target).attr('id')=='btn_chr') {
      if (procesos_flags[1] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_chr").append('<i id="activ_chr" class="fa fa-circle text-success" style="margin-left:116px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_chr"></tr>');
        $("#fta_chr").append("<th>Chrome</th>");
        $("#fta_chr").append('<th><input class="form-control input-sm" type="text" id="fta_chr0" style="border-radius:5px;"></th>');
        $("#fta_chr").append('<th><input class="form-control input-sm" type="text" id="fta_chr1" style="border-radius:5px;"></th>');
        $("#fta_chr").append('<th><input class="form-control input-sm" type="text" id="fta_chr2" style="border-radius:5px;"></th>');
        $("#fta_chr").append('<th><input class="form-control input-sm" type="text" id="fta_chr3" style="border-radius:5px;"></th>');
        $("#fta_chr").append('<th><input class="form-control input-sm" type="text" id="fta_chr4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_chr"></tr>');
        $("#ftp_chr").append("<th>Chrome</th>");
        $("#ftp_chr").append('<th><input class="form-control input-sm" type="text" id="ftp_chr0" style="border-radius:5px;"></th>');
        $("#ftp_chr").append('<th><input class="form-control input-sm" type="text" id="ftp_chr1" style="border-radius:5px;"></th>');
        $("#ftp_chr").append('<th><input class="form-control input-sm" type="text" id="ftp_chr2" style="border-radius:5px;"></th>');
        $("#ftp_chr").append('<th><input class="form-control input-sm" type="text" id="ftp_chr3" style="border-radius:5px;"></th>');
        $("#ftp_chr").append('<th><input class="form-control input-sm" type="text" id="ftp_chr4" style="border-radius:5px;"></th>');
        procesos_flags[1] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("chr");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activ_chr").remove();
        $("#fta_chr").remove();
        $("#ftp_chr").remove();
        procesos_flags[1] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("chr");
      }
    }
    //Terminal del sistema
    else if ($(event.target).attr('id')=='btn_ter') {
      if (procesos_flags[2] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_ter").append('<i id="activ_ter" class="fa fa-circle text-success" style="margin-left:39px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_ter"></tr>');
        $("#fta_ter").append("<th>Terminal del sistema</th>");
        $("#fta_ter").append('<th><input class="form-control input-sm" type="text" id="fta_ter0" style="border-radius:5px;"></th>');
        $("#fta_ter").append('<th><input class="form-control input-sm" type="text" id="fta_ter1" style="border-radius:5px;"></th>');
        $("#fta_ter").append('<th><input class="form-control input-sm" type="text" id="fta_ter2" style="border-radius:5px;"></th>');
        $("#fta_ter").append('<th><input class="form-control input-sm" type="text" id="fta_ter3" style="border-radius:5px;"></th>');
        $("#fta_ter").append('<th><input class="form-control input-sm" type="text" id="fta_ter4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_ter"></tr>');
        $("#ftp_ter").append("<th>Terminal del sistema</th>");
        $("#ftp_ter").append('<th><input class="form-control input-sm" type="text" id="ftp_ter0" style="border-radius:5px;"></th>');
        $("#ftp_ter").append('<th><input class="form-control input-sm" type="text" id="ftp_ter1" style="border-radius:5px;"></th>');
        $("#ftp_ter").append('<th><input class="form-control input-sm" type="text" id="ftp_ter2" style="border-radius:5px;"></th>');
        $("#ftp_ter").append('<th><input class="form-control input-sm" type="text" id="ftp_ter3" style="border-radius:5px;"></th>');
        $("#ftp_ter").append('<th><input class="form-control input-sm" type="text" id="ftp_ter4" style="border-radius:5px;"></th>');
        procesos_flags[2] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("ter");
      }
      else {
        //Elimiacion de fila si el proceso esta activo y lo desactiva
        $("#activ_ter").remove();
        $("#fta_ter").remove();
        $("#ftp_ter").remove();
        procesos_flags[2] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("ter");
      }
    }
    //Reproductor Multimedia
    else if ($(event.target).attr('id')=='btn_rep') {
      if (procesos_flags[3] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_rep").append('<i id="activ_rep" class="fa fa-circle text-success" style="margin-left:44px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_rep"></tr>');
        $("#fta_rep").append("<th>Reproductor Multimedia</th>");
        $("#fta_rep").append('<th><input class="form-control input-sm" type="text" id="fta_rep0" style="border-radius:5px;"></th>');
        $("#fta_rep").append('<th><input class="form-control input-sm" type="text" id="fta_rep1" style="border-radius:5px;"></th>');
        $("#fta_rep").append('<th><input class="form-control input-sm" type="text" id="fta_rep2" style="border-radius:5px;"></th>');
        $("#fta_rep").append('<th><input class="form-control input-sm" type="text" id="fta_rep3" style="border-radius:5px;"></th>');
        $("#fta_rep").append('<th><input class="form-control input-sm" type="text" id="fta_rep4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_rep"></tr>');
        $("#ftp_rep").append("<th>Reproductor Multimedia</th>");
        $("#ftp_rep").append('<th><input class="form-control input-sm" type="text" id="ftp_rep0" style="border-radius:5px;"></th>');
        $("#ftp_rep").append('<th><input class="form-control input-sm" type="text" id="ftp_rep1" style="border-radius:5px;"></th>');
        $("#ftp_rep").append('<th><input class="form-control input-sm" type="text" id="ftp_rep2" style="border-radius:5px;"></th>');
        $("#ftp_rep").append('<th><input class="form-control input-sm" type="text" id="ftp_rep3" style="border-radius:5px;"></th>');
        $("#ftp_rep").append('<th><input class="form-control input-sm" type="text" id="ftp_rep4" style="border-radius:5px;"></th>');
        procesos_flags[3] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("rep");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activ_rep").remove();
        $("#fta_rep").remove();
        $("#ftp_rep").remove();
        procesos_flags[3] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("rep");
      }
    }
    //Notepad++
    else if ($(event.target).attr('id')=='btn_not') {
      if (procesos_flags[4] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_not").append('<i id="activ_not" class="fa fa-circle text-success" style="margin-left:95px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_not"></tr>');
        $("#fta_not").append("<th>Notepad++</th>");
        $("#fta_not").append('<th><input class="form-control input-sm" type="text" id="fta_not0" style="border-radius:5px;"></th>');
        $("#fta_not").append('<th><input class="form-control input-sm" type="text" id="fta_not1" style="border-radius:5px;"></th>');
        $("#fta_not").append('<th><input class="form-control input-sm" type="text" id="fta_not2" style="border-radius:5px;"></th>');
        $("#fta_not").append('<th><input class="form-control input-sm" type="text" id="fta_not3" style="border-radius:5px;"></th>');
        $("#fta_not").append('<th><input class="form-control input-sm" type="text" id="fta_not4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_not"></tr>');
        $("#ftp_not").append("<th>Notepad++</th>");
        $("#ftp_not").append('<th><input class="form-control input-sm" type="text" id="ftp_not0" style="border-radius:5px;"></th>');
        $("#ftp_not").append('<th><input class="form-control input-sm" type="text" id="ftp_not1" style="border-radius:5px;"></th>');
        $("#ftp_not").append('<th><input class="form-control input-sm" type="text" id="ftp_not2" style="border-radius:5px;"></th>');
        $("#ftp_not").append('<th><input class="form-control input-sm" type="text" id="ftp_not3" style="border-radius:5px;"></th>');
        $("#ftp_not").append('<th><input class="form-control input-sm" type="text" id="ftp_not4" style="border-radius:5px;"></th>');
        procesos_flags[4] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("not");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activ_not").remove();
        $("#fta_not").remove();
        $("#ftp_not").remove();
        procesos_flags[4] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("not");
      }
    }
    //Administrador de tareas
    else if ($(event.target).attr('id')=='btn_adm') {
      if (procesos_flags[5] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_adm").append('<i id="activ_adm" class="fa fa-circle text-success" style="margin-left:61px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_adm"></tr>');
        $("#fta_adm").append("<th>Administrador de tareas</th>");
        $("#fta_adm").append('<th><input class="form-control input-sm" type="text" id="fta_adm0" style="border-radius:5px;"></th>');
        $("#fta_adm").append('<th><input class="form-control input-sm" type="text" id="fta_adm1" style="border-radius:5px;"></th>');
        $("#fta_adm").append('<th><input class="form-control input-sm" type="text" id="fta_adm2" style="border-radius:5px;"></th>');
        $("#fta_adm").append('<th><input class="form-control input-sm" type="text" id="fta_adm3" style="border-radius:5px;"></th>');
        $("#fta_adm").append('<th><input class="form-control input-sm" type="text" id="fta_adm4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_adm"></tr>');
        $("#ftp_adm").append("<th>Administrador de tareas</th>");
        $("#ftp_adm").append('<th><input class="form-control input-sm" type="text" id="ftp_adm0" style="border-radius:5px;"></th>');
        $("#ftp_adm").append('<th><input class="form-control input-sm" type="text" id="ftp_adm1" style="border-radius:5px;"></th>');
        $("#ftp_adm").append('<th><input class="form-control input-sm" type="text" id="ftp_adm2" style="border-radius:5px;"></th>');
        $("#ftp_adm").append('<th><input class="form-control input-sm" type="text" id="ftp_adm3" style="border-radius:5px;"></th>');
        $("#ftp_adm").append('<th><input class="form-control input-sm" type="text" id="ftp_adm4" style="border-radius:5px;"></th>');
        procesos_flags[5] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("adm");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activ_adm").remove();
        $("#fta_adm").remove();
        $("#ftp_adm").remove();
        procesos_flags[5] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("adm");
      }
    }
    //Skype
    else if ($(event.target).attr('id')=='btn_sky') {
      if (procesos_flags[6] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_sky").append('<i id="activ_sky" class="fa fa-circle text-success" style="margin-left:123px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_sky"></tr>');
        $("#fta_sky").append("<th>Skype</th>");
        $("#fta_sky").append('<th><input class="form-control input-sm" type="text" id="fta_sky0" style="border-radius:5px;"></th>');
        $("#fta_sky").append('<th><input class="form-control input-sm" type="text" id="fta_sky1" style="border-radius:5px;"></th>');
        $("#fta_sky").append('<th><input class="form-control input-sm" type="text" id="fta_sky2" style="border-radius:5px;"></th>');
        $("#fta_sky").append('<th><input class="form-control input-sm" type="text" id="fta_sky3" style="border-radius:5px;"></th>');
        $("#fta_sky").append('<th><input class="form-control input-sm" type="text" id="fta_sky4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_sky"></tr>');
        $("#ftp_sky").append("<th>Skype</th>");
        $("#ftp_sky").append('<th><input class="form-control input-sm" type="text" id="ftp_sky0" style="border-radius:5px;"></th>');
        $("#ftp_sky").append('<th><input class="form-control input-sm" type="text" id="ftp_sky1" style="border-radius:5px;"></th>');
        $("#ftp_sky").append('<th><input class="form-control input-sm" type="text" id="ftp_sky2" style="border-radius:5px;"></th>');
        $("#ftp_sky").append('<th><input class="form-control input-sm" type="text" id="ftp_sky3" style="border-radius:5px;"></th>');
        $("#ftp_sky").append('<th><input class="form-control input-sm" type="text" id="ftp_sky4" style="border-radius:5px;"></th>');
        procesos_flags[6] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("sky");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activ_sky").remove();
        $("#fta_sky").remove();
        $("#ftp_sky").remove();
        procesos_flags[6] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("sky");
      }
    }
    //Hangouts
    else if ($(event.target).attr('id')=='btn_han') {
      if (procesos_flags[7] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_han").append('<i id="activ_han" class="fa fa-circle text-success" style="margin-left:101px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_han"></tr>');
        $("#fta_han").append("<th>Hangouts</th>");
        $("#fta_han").append('<th><input class="form-control input-sm" type="text" id="fta_han0" style="border-radius:5px;"></th>');
        $("#fta_han").append('<th><input class="form-control input-sm" type="text" id="fta_han1" style="border-radius:5px;"></th>');
        $("#fta_han").append('<th><input class="form-control input-sm" type="text" id="fta_han2" style="border-radius:5px;"></th>');
        $("#fta_han").append('<th><input class="form-control input-sm" type="text" id="fta_han3" style="border-radius:5px;"></th>');
        $("#fta_han").append('<th><input class="form-control input-sm" type="text" id="fta_han4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_han"></tr>');
        $("#ftp_han").append("<th>Hangouts</th>");
        $("#ftp_han").append('<th><input class="form-control input-sm" type="text" id="ftp_han0" style="border-radius:5px;"></th>');
        $("#ftp_han").append('<th><input class="form-control input-sm" type="text" id="ftp_han1" style="border-radius:5px;"></th>');
        $("#ftp_han").append('<th><input class="form-control input-sm" type="text" id="ftp_han2" style="border-radius:5px;"></th>');
        $("#ftp_han").append('<th><input class="form-control input-sm" type="text" id="ftp_han3" style="border-radius:5px;"></th>');
        $("#ftp_han").append('<th><input class="form-control input-sm" type="text" id="ftp_han4" style="border-radius:5px;"></th>');
        procesos_flags[7] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("han");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activ_han").remove();
        $("#fta_han").remove();
        $("#ftp_han").remove();
        procesos_flags[7] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("han");
      }
    }
    //Winrar
    else if ($(event.target).attr('id')=='btn_win') {
      if (procesos_flags[8] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_win").append('<i id="activ_win" class="fa fa-circle text-success" style="margin-left:119px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_win"></tr>');
        $("#fta_win").append("<th>Winrar</th>");
        $("#fta_win").append('<th><input class="form-control input-sm" type="text" id="fta_win0" style="border-radius:5px;"></th>');
        $("#fta_win").append('<th><input class="form-control input-sm" type="text" id="fta_win1" style="border-radius:5px;"></th>');
        $("#fta_win").append('<th><input class="form-control input-sm" type="text" id="fta_win2" style="border-radius:5px;"></th>');
        $("#fta_win").append('<th><input class="form-control input-sm" type="text" id="fta_win3" style="border-radius:5px;"></th>');
        $("#fta_win").append('<th><input class="form-control input-sm" type="text" id="fta_win4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_win"></tr>');
        $("#ftp_win").append("<th>Winrar</th>");
        $("#ftp_win").append('<th><input class="form-control input-sm" type="text" id="ftp_win0" style="border-radius:5px;"></th>');
        $("#ftp_win").append('<th><input class="form-control input-sm" type="text" id="ftp_win1" style="border-radius:5px;"></th>');
        $("#ftp_win").append('<th><input class="form-control input-sm" type="text" id="ftp_win2" style="border-radius:5px;"></th>');
        $("#ftp_win").append('<th><input class="form-control input-sm" type="text" id="ftp_win3" style="border-radius:5px;"></th>');
        $("#ftp_win").append('<th><input class="form-control input-sm" type="text" id="ftp_win4" style="border-radius:5px;"></th>');
        procesos_flags[8] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("win");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activ_win").remove();
        $("#fta_win").remove();
        $("#ftp_win").remove();
        procesos_flags[8] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("win");
      }
    }
    //Apache Server
    else if ($(event.target).attr('id')=='btn_apa') {
      if (procesos_flags[9] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_apa").append('<i id="activ_apa" class="fa fa-circle text-success" style="margin-left:73px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_apa"></tr>');
        $("#fta_apa").append("<th>Apache Server</th>");
        $("#fta_apa").append('<th><input class="form-control input-sm" type="text" id="fta_apa0" style="border-radius:5px;"></th>');
        $("#fta_apa").append('<th><input class="form-control input-sm" type="text" id="fta_apa1" style="border-radius:5px;"></th>');
        $("#fta_apa").append('<th><input class="form-control input-sm" type="text" id="fta_apa2" style="border-radius:5px;"></th>');
        $("#fta_apa").append('<th><input class="form-control input-sm" type="text" id="fta_apa3" style="border-radius:5px;"></th>');
        $("#fta_apa").append('<th><input class="form-control input-sm" type="text" id="fta_apa4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_apa"></tr>');
        $("#ftp_apa").append("<th>Apache Server</th>");
        $("#ftp_apa").append('<th><input class="form-control input-sm" type="text" id="ftp_apa0" style="border-radius:5px;"></th>');
        $("#ftp_apa").append('<th><input class="form-control input-sm" type="text" id="ftp_apa1" style="border-radius:5px;"></th>');
        $("#ftp_apa").append('<th><input class="form-control input-sm" type="text" id="ftp_apa2" style="border-radius:5px;"></th>');
        $("#ftp_apa").append('<th><input class="form-control input-sm" type="text" id="ftp_apa3" style="border-radius:5px;"></th>');
        $("#ftp_apa").append('<th><input class="form-control input-sm" type="text" id="ftp_apa4" style="border-radius:5px;"></th>');
        procesos_flags[9] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("apa");
      }
      else {
        //Eliminacion de fila si el proceso esta activo y lo desactiva
        $("#activ_apa").remove();
        $("#fta_apa").remove();
        $("#ftp_apa").remove();
        procesos_flags[9] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("apa");
      }
    }
    //Whatsapp
    else if ($(event.target).attr('id')=='btn_wha') {
      if (procesos_flags[10] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_wha").append('<i id="activ_wha" class="fa fa-circle text-success" style="margin-left:98px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_wha"></tr>');
        $("#fta_wha").append("<th>Whatsapp</th>");
        $("#fta_wha").append('<th><input class="form-control input-sm" type="text" id="fta_wha0" style="border-radius:5px;"></th>');
        $("#fta_wha").append('<th><input class="form-control input-sm" type="text" id="fta_wha1" style="border-radius:5px;"></th>');
        $("#fta_wha").append('<th><input class="form-control input-sm" type="text" id="fta_wha2" style="border-radius:5px;"></th>');
        $("#fta_wha").append('<th><input class="form-control input-sm" type="text" id="fta_wha3" style="border-radius:5px;"></th>');
        $("#fta_wha").append('<th><input class="form-control input-sm" type="text" id="fta_wha4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_wha"></tr>');
        $("#ftp_wha").append("<th>Whatsapp</th>");
        $("#ftp_wha").append('<th><input class="form-control input-sm" type="text" id="ftp_wha0" style="border-radius:5px;"></th>');
        $("#ftp_wha").append('<th><input class="form-control input-sm" type="text" id="ftp_wha1" style="border-radius:5px;"></th>');
        $("#ftp_wha").append('<th><input class="form-control input-sm" type="text" id="ftp_wha2" style="border-radius:5px;"></th>');
        $("#ftp_wha").append('<th><input class="form-control input-sm" type="text" id="ftp_wha3" style="border-radius:5px;"></th>');
        $("#ftp_wha").append('<th><input class="form-control input-sm" type="text" id="ftp_wha4" style="border-radius:5px;"></th>');
        procesos_flags[10] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("wha");
      }
      else {
        //Elimiacion de la fila si el proceso esta activo y lo desactiva
        $("#activ_wha").remove();
        $("#fta_wha").remove();
        $("#ftp_wha").remove();
        procesos_flags[10] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("wha");
      }
    }
    //Git
    else if ($(event.target).attr('id')=='btn_git') {
      if (procesos_flags[11] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_git").append('<i id="activ_git" class="fa fa-circle text-success" style="margin-left:140px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_git"></tr>');
        $("#fta_git").append("<th>Git</th>");
        $("#fta_git").append('<th><input class="form-control input-sm" type="text" id="fta_git0" style="border-radius:5px;"></th>');
        $("#fta_git").append('<th><input class="form-control input-sm" type="text" id="fta_git1" style="border-radius:5px;"></th>');
        $("#fta_git").append('<th><input class="form-control input-sm" type="text" id="fta_git2" style="border-radius:5px;"></th>');
        $("#fta_git").append('<th><input class="form-control input-sm" type="text" id="fta_git3" style="border-radius:5px;"></th>');
        $("#fta_git").append('<th><input class="form-control input-sm" type="text" id="fta_git4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_git"></tr>');
        $("#ftp_git").append("<th>Git</th>");
        $("#ftp_git").append('<th><input class="form-control input-sm" type="text" id="ftp_git0" style="border-radius:5px;"></th>');
        $("#ftp_git").append('<th><input class="form-control input-sm" type="text" id="ftp_git1" style="border-radius:5px;"></th>');
        $("#ftp_git").append('<th><input class="form-control input-sm" type="text" id="ftp_git2" style="border-radius:5px;"></th>');
        $("#ftp_git").append('<th><input class="form-control input-sm" type="text" id="ftp_git3" style="border-radius:5px;"></th>');
        $("#ftp_git").append('<th><input class="form-control input-sm" type="text" id="ftp_git4" style="border-radius:5px;"></th>');
        procesos_flags[11] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("git");
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activ_git").remove();
        $("#fta_git").remove();
        $("#ftp_git").remove();
        procesos_flags[11] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("git");
      }
    }
    //Calculadora
    else if ($(event.target).attr('id')=='btn_cal') {
      if (procesos_flags[12] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_cal").append('<i id="activ_cal" class="fa fa-circle text-success" style="margin-left:86px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_cal"></tr>');
        $("#fta_cal").append("<th>Calculadora</th>");
        $("#fta_cal").append('<th><input class="form-control input-sm" type="text" id="fta_cal0" style="border-radius:5px;"></th>');
        $("#fta_cal").append('<th><input class="form-control input-sm" type="text" id="fta_cal1" style="border-radius:5px;"></th>');
        $("#fta_cal").append('<th><input class="form-control input-sm" type="text" id="fta_cal2" style="border-radius:5px;"></th>');
        $("#fta_cal").append('<th><input class="form-control input-sm" type="text" id="fta_cal3" style="border-radius:5px;"></th>');
        $("#fta_cal").append('<th><input class="form-control input-sm" type="text" id="fta_cal4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_cal"></tr>');
        $("#ftp_cal").append("<th>Calculadora</th>");
        $("#ftp_cal").append('<th><input class="form-control input-sm" type="text" id="ftp_cal0" style="border-radius:5px;"></th>');
        $("#ftp_cal").append('<th><input class="form-control input-sm" type="text" id="ftp_cal1" style="border-radius:5px;"></th>');
        $("#ftp_cal").append('<th><input class="form-control input-sm" type="text" id="ftp_cal2" style="border-radius:5px;"></th>');
        $("#ftp_cal").append('<th><input class="form-control input-sm" type="text" id="ftp_cal3" style="border-radius:5px;"></th>');
        $("#ftp_cal").append('<th><input class="form-control input-sm" type="text" id="ftp_cal4" style="border-radius:5px;"></th>');
        procesos_flags[12] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("cal");
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activ_cal").remove();
        $("#fta_cal").remove();
        $("#ftp_cal").remove();
        procesos_flags[12] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("cal");
      }
    }
    //Acrobat Reader
    else if ($(event.target).attr('id')=='btn_acr') {
      if (procesos_flags[13] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_acr").append('<i id="activ_acr" class="fa fa-circle text-success" style="margin-left:66px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_acr"></tr>');
        $("#fta_acr").append("<th>Acrobat Reader</th>");
        $("#fta_acr").append('<th><input class="form-control input-sm" type="text" id="fta_acr0" style="border-radius:5px;"></th>');
        $("#fta_acr").append('<th><input class="form-control input-sm" type="text" id="fta_acr1" style="border-radius:5px;"></th>');
        $("#fta_acr").append('<th><input class="form-control input-sm" type="text" id="fta_acr2" style="border-radius:5px;"></th>');
        $("#fta_acr").append('<th><input class="form-control input-sm" type="text" id="fta_acr3" style="border-radius:5px;"></th>');
        $("#fta_acr").append('<th><input class="form-control input-sm" type="text" id="fta_acr4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_acr"></tr>');
        $("#ftp_acr").append("<th>Acrobat Reader</th>");
        $("#ftp_acr").append('<th><input class="form-control input-sm" type="text" id="ftp_acr0" style="border-radius:5px;"></th>');
        $("#ftp_acr").append('<th><input class="form-control input-sm" type="text" id="ftp_acr1" style="border-radius:5px;"></th>');
        $("#ftp_acr").append('<th><input class="form-control input-sm" type="text" id="ftp_acr2" style="border-radius:5px;"></th>');
        $("#ftp_acr").append('<th><input class="form-control input-sm" type="text" id="ftp_acr3" style="border-radius:5px;"></th>');
        $("#ftp_acr").append('<th><input class="form-control input-sm" type="text" id="ftp_acr4" style="border-radius:5px;"></th>');
        procesos_flags[13] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("acr");
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activ_acr").remove();
        $("#fta_acr").remove();
        $("#ftp_acr").remove();
        procesos_flags[13] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("acr");
      }
    }
    //Gestion de la bateria
    else if ($(event.target).attr('id')=='btn_ges') {
      if (procesos_flags[14] === 0) {

        //Insertar nueva filas con respectivas columnas en la tabla de Recursos asignados actualmente
        $("#btn_ges").append('<i id="activ_ges" class="fa fa-circle text-success" style="margin-left:35px;"></i>');
        $("#tabla_asignados").append('<tr id="fta_ges"></tr>');
        $("#fta_ges").append("<th>Gestion de la bateria</th>");
        $("#fta_ges").append('<th><input class="form-control input-sm" type="text" id="fta_ges0" style="border-radius:5px;"></th>');
        $("#fta_ges").append('<th><input class="form-control input-sm" type="text" id="fta_ges1" style="border-radius:5px;"></th>');
        $("#fta_ges").append('<th><input class="form-control input-sm" type="text" id="fta_ges2" style="border-radius:5px;"></th>');
        $("#fta_ges").append('<th><input class="form-control input-sm" type="text" id="fta_ges3" style="border-radius:5px;"></th>');
        $("#fta_ges").append('<th><input class="form-control input-sm" type="text" id="fta_ges4" style="border-radius:5px;"></th>');

        //Insercion de nuevas filas con respectivas columnas en la tabla de peticiones de recursos al sistema
        $("#tabla_peticiones").append('<tr id="ftp_ges"></tr>');
        $("#ftp_ges").append("<th>Gestion de la bateria</th>");
        $("#ftp_ges").append('<th><input class="form-control input-sm" type="text" id="ftp_ges0" style="border-radius:5px;"></th>');
        $("#ftp_ges").append('<th><input class="form-control input-sm" type="text" id="ftp_ges1" style="border-radius:5px;"></th>');
        $("#ftp_ges").append('<th><input class="form-control input-sm" type="text" id="ftp_ges2" style="border-radius:5px;"></th>');
        $("#ftp_ges").append('<th><input class="form-control input-sm" type="text" id="ftp_ges3" style="border-radius:5px;"></th>');
        $("#ftp_ges").append('<th><input class="form-control input-sm" type="text" id="ftp_ges4" style="border-radius:5px;"></th>');
        procesos_flags[14] = 1;
        ++inf_proc.numProc_tabla;
        inf_proc.nom_procs.push("ges");
      }
      else {
        //Eliminacion de la fila si el proceso esta activo y lo desactiva
        $("#activ_ges").remove();
        $("#fta_ges").remove();
        $("#ftp_ges").remove();
        procesos_flags[14] = 0;
        --inf_proc.numProc_tabla;
        inf_proc.sacarProceso_nom("ges");
      }
    }
  });
});
