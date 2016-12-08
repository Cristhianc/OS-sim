/*Coloca los datos de los procesos en la tabla DAPE y de los recursos
en la tabla RES, a traves del boton Ejemplo (1)*/
$(document).ready(function(){
  $("#btn_ejem1").click(function(event) {
      if (ejem1Montado === 0) {
        ejem1Montado = 1;
        /*Coloca los columnas de los recursos de E/S del Ejemplo 1 en la tabla
        RES.*/
        nuevoRecurso(recursos_SIM[0][0], recursos_SIM[2][0]);
        nuevoRecurso(recursos_SIM[0][1], recursos_SIM[2][1]);
        nuevoRecurso(recursos_SIM[0][2], recursos_SIM[2][2]);
        nuevoRecurso(recursos_SIM[0][3], recursos_SIM[2][3]);
        nuevoRecurso(recursos_SIM[0][4], recursos_SIM[2][4]);
        //Coloca los datos de los procesos del Ejemplo 1 en la tabla DAPE.
        for (i = 1; i < lista_proc.length + 3; i++) {
          for (j = 1; j < 3; j++) {
            if (i < 16) {
              if (j === 1) {
                $("#tDAPE_f"+i+"c"+j).html(lista_proc[i-1].cant_CPU);
              } else {
                $("#tDAPE_f"+i+"c"+j).html(lista_proc[i-1].espacio_MP);
              }
            }
            else {
              $("#tDAPE_f17c1").html(cantCPU);
              $("#tDAPE_f17c2").html(tamMP);
            }
          }
        }
      }
  });
});
