function limpiarCampos() {
  //Limpia los campos o input de los recursos disponibles del sistema
  for (i = 0; i < 5; i++) {
    $("#rdcol"+i).val("");
  }
  /*Limpia los campos o input de la tabla de recursos asignados actualmente y
  de la tabla de peticiones de recursos al sistema.*/
  for (i = 0; i < inf_proc.numProc_tabla; i++) {
    for (j = 0; j < 6; j++) {
      $("#fta_"+inf_proc.nom_procs[i]+j).val(" ");
      $("#ftp_"+inf_proc.nom_procs[i]+j).val(" ");
    }
  }
};
