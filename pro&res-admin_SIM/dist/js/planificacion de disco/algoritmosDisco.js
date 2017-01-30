// Funcion que se encarga de actualizar las tablas de los algoritmos FCFS y SSTF
function actualizar_tabla_PDD() {
  // Actualiza la tabla del algoritmo FCFS
  $("#procesos_FCFS").remove();
  $("#posiciones_FCFS").remove();
  $("#cabecera_FCFS").append(
    '<tr id="procesos_FCFS">' +
      '<th>Cola/Procesos</th>' +
    '</tr>'
  );
  $("#cont_FCFS").append(
    '<tr id="posiciones_FCFS">' +
      '<th>Cilindro</th>' +
    '</tr>'
  );

  // Actualiza la tabla del algoritmo SSTF
  $("#procesos_SSTF").remove();
  $("#posiciones_SSTF").remove();
  $("#cabecera_SSTF").append(
    '<tr id="procesos_SSTF">' +
      '<th>Cola/Procesos</th>' +
    '</tr>'
  );
  $("#cont_SSTF").append(
    '<tr id="posiciones_SSTF">' +
      '<th>Cilindro</th>' +
    '</tr>'
  );
}

// Funcion que ejecuta el algoritmo FCFS
function ejecutar_fcfs() {
  for ( posicion = 0; posicion < cola_Procesos[0].length; posicion++ ) {
    $("#procesos_FCFS").append('<th>' + cola_Procesos[0][posicion] + '</th>');
    $("#posiciones_FCFS").append('<th>' + cola_Procesos[1][posicion] + '</th>');
  }
}

// Funcion que ejecuta el algoritmo SSTF
function ejecutar_sstf() {
  // Variable que representa a la suma de las colas que se van procesando
  var suma_de_colas;
  // Cola a procesar, para no tomar por referencia el arreglo de colas fuente
  var cola_a_procesar = [];
  cola_a_procesar.push( cola_Procesos[0].slice(0) );
  cola_a_procesar.push( cola_Procesos[1].slice(0) );

  /* Inicializa el arreglo que contiene los datos de la cola para el algoritmo
   * SSTF.
   */
  cola_SSTF[0] = [];
  cola_SSTF[1] = [];

  // Mientras que hayan procesos en la cola ejecuta el ciclo
  while ( cola_a_procesar[0].length > 0 ) {
    // Inicializa la suma de colas como un arreglo vacio
    suma_de_colas = [];
    /* Ciclo que inicializa el arreglo suma_de_colas por cada proceso existente
     * en la cola restante.
     */
    for (posicion = 0; posicion < cola_a_procesar[0].length; posicion++) {
      suma_de_colas.push( valorAbsoluto( posicion_cabeza - cola_a_procesar[1][posicion] ) );
    }
    /* Almacena la posicion del resultado de evaluar el menor valor en el arreglo
     * de suma_de_colas.
     */
    posicion_resultado = menorValor(suma_de_colas);
    /* Agrega en la ultima posicion el nombre del proceso y su posicion en disco
     * en la cola dedicada exclusivamente al algoritmo SSTF.
     */
    cola_SSTF[0].push( cola_a_procesar[0][posicion_resultado] );
    cola_SSTF[1].push( cola_a_procesar[1][posicion_resultado] );
    // Luego elimina el proceso que fue tomado de la cola a procesar
    if (posicion_resultado > -1) {
      cola_a_procesar[0].splice(posicion_resultado, 1);
      cola_a_procesar[1].splice(posicion_resultado, 1);
    }
  }
   // Por ultimo, coloca los resultados en la tabla_SSTF
  for ( posicion = 0; posicion < cola_SSTF[0].length; posicion++ ) {
    $("#procesos_SSTF").append('<th>' + cola_SSTF[0][posicion] + '</th>');
    $("#posiciones_SSTF").append('<th>' + cola_SSTF[1][posicion] + '</th>');
  }
}

// Funcion que muestra los procesos en cola
function mostrar_Cola_Procesos() {
  $("#procesos_CP").remove();
  $("#posiciones_CP").remove();
  $("#cabecera_CP").append(
    '<tr id="procesos_CP">' +
      '<th>Cola/Procesos</th>' +
    '</tr>'
  );
  $("#cont_CP").append('<tr id="posiciones_CP"><th>Cilindro</th></tr>');
  for ( posicion = 0; posicion < cola_Procesos[0].length; posicion++ ) {
    $("#procesos_CP").append('<th>' + cola_Procesos[0][posicion] + '</th>');
    $("#posiciones_CP").append('<th>' + cola_Procesos[1][posicion] + '</th>');
  }
}
