$(document).ready(function(){
    $("#btn_ibalg").click(function(event){
      /*Declaracion e instanciacion de la matriz de la tabla de recursos del
      sistema asignados actualmente y de la tabla de peticiones de recursos del
      sistema por parte de los procesos, asi como el arreglo de recursos
      disponibles del sistema.*/
      var matriz_ta = new Array(inf_proc.numProc_tabla);
      var matriz_tp = new Array(inf_proc.numProc_tabla);
      var recursos_disp = new Array(5);
      for (i = 0; i < inf_proc.numProc_tabla; i++) {
        matriz_ta[i] = new Array(5);
        matriz_tp[i] = new Array(5);
      }
      //Construccion del arreglo de los recursos disponibles del sistema
      for (i = 0; i < 5; i++) {
        recursos_disp[i] = parseInt($("#rdcol"+i).val());
      }
      //Construccion de la matriz de recursos del sistema asignados actualmente
      for (i=0; i < inf_proc.numProc_tabla; i++) {
        for (j=0; j < 5; j++) {
          matriz_ta[i][j] = parseInt($("#fta_"+inf_proc.nom_procs[i]+j).val());
        }
      }
      //Construccion de la matriz de peticiones de recursos al sistema
      for (i=0; i < inf_proc.numProc_tabla; i++) {
        for (j=0; j < 5; j++) {
          matriz_tp[i][j] = parseInt($("#ftp_"+inf_proc.nom_procs[i]+j).val());
        }
      }

      /*Declaracion del arreglo finalizar que representa si un proceso logra
      finalizar o no. Tambien un arreglo copia de recursos_disp que permite
      la comparacion de la peticion de recursos con los recursos disponibles
      del sistema*/
      var proc_status;
      var finalizar = new Array(inf_proc.numProc_tabla);
      var vacum_rec = [
        recursos_disp[0],
        recursos_disp[1],
        recursos_disp[2],
        recursos_disp[3],
        recursos_disp[4]
      ];
      //Algoritmo de deteccion de interbloqueos
      /*Primero se comprueba si todas las asignaciones de los recursos j a los
      procesos i son iguales a 0. Si es asi, el proceso se encuentra en un es-
      tado de falsedad; de lo contrario, el proceso se encuentra en un estado
      de verdad.*/
      for (i = 0; i < inf_proc.numProc_tabla; i++) {
        for (j = 0; j < 5; j++) {
          if (matriz_ta[i][j] != 0) {
            finalizar[i] = false;
            break;
          }
          else {
            finalizar[i] = true;
          }
        }
      }
      /*Luego se procede a comparar si el vector fila de las peticiones del
      recurso j por parte del proceso i es menor o igual que el vector de acu-
      mulacion de recursos hasta el momento. Si lo es, entonces se realiza la
      suma entre estos vectores; de lo contrario, se determina que hubo un
      interbloqueo al proceso i.*/
      for (i = 0; i < inf_proc.numProc_tabla; i++) {
        proc_status=0;
        if (finalizar[i] != true) {
          for (j = 0; j < 5; j++) {
            if (!(matriz_tp[i][j] <= vacum_rec[j])) {
              proc_status=1;
              $("#fta_"+inf_proc.nom_procs[i]).append('<th id="fta_'+inf_proc.nom_procs[i]+'5" style="background-color:#f56954;">Bloqueado</th>');
              break;
            }
          }
        }
        if (proc_status == 0) {
          $("#fta_"+inf_proc.nom_procs[i]).append('<th id="fta_'+inf_proc.nom_procs[i]+'5" style="background-color:#00a65a;">Finalizado</th>');
          for (j=0; j < 5; j++) {
            vacum_rec[j] += matriz_ta[i][j];
          }
        }
      }
      /*Al final se muestran los recursos que se lograron devolver. Si se de-
      volvieron todos es porque no hubo interbloqueo en el sistema y se en-
      cuentra en un estado seguro.*/
      for (i=0; i < 5; i++) {
        $("#rdcol"+i).val(vacum_rec[i]);
      }
    });
});
