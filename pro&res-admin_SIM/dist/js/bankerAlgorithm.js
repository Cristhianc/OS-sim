$(document).ready(function(){
    $("#btn_ibalg").click(function(event){
      /*Declaracion e instanciacion de la matriz de la tabla de recursos del
      sistema asignados actualmente y de la tabla de peticiones de recursos del
      sistema por parte de los procesos, asi como el arreglo de recursos
      disponibles del sistema.*/
      var matriz_ta = new array(inf_proc.numProc_tabla);
      var matriz_tp = new array(inf_proc.numProc_tabla);
      var recursos_disp = new array(5);

      for (i = 0; i < inf_proc.numProc_tabla; i++) {
        matriz_ta[i] = new array(5);
        matriz_tp[i] = new array(5);
      }
      //Construccion de la matriz de recursos del sistema asignados actualmente
      for (i=0; i < inf_proc.numProc_tabla; i++) {
        for (j=0; j < 5; j++) {
          
        }
      }
    });
});
