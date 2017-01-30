// Script que contiene los ejemplos a ejecutar en el simulador

/*Coloca los datos de los procesos en la tabla DAPE y de los recursos
en la tabla RES, a traves del boton Ejemplo (1)*/
function montarEjemplo_1() {
  if (ejemplo_1_montado === false) {
    ejemplo_1_montado = true;

    /*Coloca los columnas de los recursos de E/S del Ejemplo 1 en la tabla
    RES.*/
    nuevoRecurso(recursos_SIM[0][0], recursos_SIM[2][0]);
    nuevoRecurso(recursos_SIM[0][1], recursos_SIM[2][1]);
    nuevoRecurso(recursos_SIM[0][2], recursos_SIM[2][2]);
    nuevoRecurso(recursos_SIM[0][3], recursos_SIM[2][3]);
    nuevoRecurso(recursos_SIM[0][4], recursos_SIM[2][4]);

    //Coloca los datos de los procesos del Ejemplo 1 en la tabla DAPE.
    for (fila = 1; fila < lista_procesos.length + 3; fila++) {
      for (columna = 1; columna < 4; columna++) {
        if (fila < 16) {
          switch (columna) {
            case 1:
              $("#tDAPE_f"+fila+"c"+columna).html(lista_procesos[fila-1].cant_CPUs);
              break;
            case 2:
              $("#tDAPE_f"+fila+"c"+columna).html(lista_procesos[fila-1].espacio_MP);
              break;
            case 3:
              $("#tDAPE_f"+fila+"c"+columna).html(lista_procesos[fila-1].posicion_Disco);
              break;
            default:
              break;
          }
        }
        else {
          $("#tDAPE_f17c1").html(CPU_totales);
          $("#tDAPE_f17c2").html(MP_tamaño);
        }
      }
    }
  }
}
