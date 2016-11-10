$(document).ready(function(){
    $("#btn_ibalg").click(function(event){
      /*Declaracion e instanciacion de la matriz de la tabla de recursos del
      sistema asignados actualmente y de la tabla de peticiones de recursos del
      sistema por parte de los procesos, asi como el arreglo de recursos
      disponibles del sistema.*/
      console.log(inf_proc.numProc_tabla);
      var matriz_ta = new Array(inf_proc.numProc_tabla);
      var matriz_tp = new Array(inf_proc.numProc_tabla);
      var recursos_disp = new Array(3);
      for (i = 0; i < inf_proc.numProc_tabla; i++) {
        matriz_ta[i] = new Array(3);
        matriz_tp[i] = new Array(3);
      }
      //Construccion del arreglo de los recursos disponibles del sistema
      for (i = 0; i < 3; i++) {
        recursos_disp[i] = $("#rdcol"+i).val();
      }
      //Construccion de la matriz de recursos del sistema asignados actualmente
      for (i=0; i < inf_proc.numProc_tabla; i++) {
        for (j=0; j < 3; j++) {
          matriz_ta[i][j] = $("#fta_"+inf_proc.nom_procs[i]+j).val();
        }
      }
      //Construccion de la matriz de peticiones de recursos al sistema
      for (i=0; i < inf_proc.numProc_tabla; i++) {
        for (j=0; j < 3; j++) {
          matriz_tp[i][j] = $("#ftp_"+inf_proc.nom_procs[i]+j).val();
        }
      }

      /*Declaracion del arreglo finalizar que representa si un proceso logra
      finalizar o no. Tambien un arreglo copia de recursos_disp que permite
      la comparacion de la peticion de recursos con los recursos disponibles
      del sistema*/
      var procs_intb = new Array(inf_proc.numProc_tabla);
      var finalizar = new Array(3);
      var comparar_rec = [
        recursos_disp[0],
        recursos_disp[1],
        recursos_disp[2],
        //recursos_disp[3],
        //recursos_disp[4]
      ];

      //Algoritmo de deteccion de interbloqueos
      for (i = 0; i < inf_proc.numProc_tabla; i++) {
        for (j = 0; j < 3; j++) {
          /*Verifica si hay algun recurso del tipo j asignado al proceso i, de
          ser asi, indica que todavia no ha finalizado. De lo contrario, indica
          que si ha finalizado.*/
          if (matriz_ta[i][j]===0) {
            finalizar[j] = true;
          }
          else {
            finalizar[j] = false;
          }
          /*Luego verifica si hay algun proceso i con un recurso j faltante a
          asignar debido a una peticion del mismo al sistema y si, tambien los
          recursos pedidos son menores o iguales a los disponibles. De ser asi,
          devuelve los recursos al sistema y da por finalizado el proceso.

          De lo contrario, se sale de la evaluacion del proceso i y se determi-
          na que ese proceso esta interbloqueado.*/
          if (finalizar[j] === false && matriz_tp[i][j] <= comparar_rec[j]) {
            comparar_rec[j] += matriz_ta[i][j];
            finalizar[j] = true;
          }
          else {
            j=-1;
            $("#activ_"+inf_proc.nom_procs).remove();
            $("#tabla_asignados").append('<tr id="fta_'+inf_proc.nom_procs[i]+'">Bloqueado</tr>');
          }
        }
        if (j !== -1) {
          $("#activ_"+inf_proc.nom_procs).remove();
          $("#tabla_asignados").append('<tr id="fta_'+inf_proc.nom_procs[i]+'">Finalizado</tr>');
        }
      }
    });
});
