/* Script que se encargar de crear las particiones de la memoria principal,
 * manejar estas y administrar la memoria principal a los procesos.
 */

/* Crea las particiones de la memoria principal dependiendo del orden que se
 * establezca.
 */
function crear_Particiones(orden, reg_Base) {
  if (orden > 0) {
    return new BloquePadre(orden,
      crear_Particiones(orden - 1, reg_Base),
      crear_Particiones(orden - 1, reg_Base + elevarN(2, orden - 1) * 64),
      reg_Base,
      reg_Base + (elevarN(2, orden) * 64)
    );
  } else {
    return new BloqueHijo(orden, reg_Base, reg_Base + (elevarN(2, orden) * 64));
  }
};

/* Funcion que se encarga de asignar un espacio en la memoria principal a un
 * proceso. Realiza las verificaciones necesarias y si confirma que se cumplen,
 * aloja un proceso en el bloque de memoria correspondiente al momento.
 */
function asignar_proceso_MP(bloque_MP, proceso) {
  // Comprueba si el orden del bloque es mayor y si el proceso esta en disco
  if (bloque_MP.orden > 0 && proceso.estado === "En Disco") {
    lim_Actual = elevarN(2, bloque_MP.orden) * 64;
    lim_Anterior = elevarN(2, bloque_MP.orden - 1) * 64;
    /* Comprueba si el espacio en memoria principal requerido por el proceso se
     * encuentra dentro del intervalo indicado. De ser */
    if (lim_Anterior < proceso.espacio_MP && proceso.espacio_MP <= lim_Actual &&
        bloque_MP.estado === "disponible") {
          bloque_MP.estado = "ocupado";
          bloque_MP.proceso_Alojado = proceso.nombre;
          bloque_MP.MP_usada = proceso.espacio_MP;
          proceso.estado = "En ejecucion";
          proceso.reg_Base = bloque_MP.reg_Base;
          proceso.reg_Limite = bloque_MP.reg_Limite;
          recursos_SIM[5] -= elevarN(2, bloque_MP.orden) * 64;
          recursos_SIM[8] += elevarN(2, bloque_MP.orden) * 64;
    }
    else if (proceso.espacio_MP <= lim_Anterior &&
      (bloque_MP.estado === "disponible" || bloque_MP.estado === "particionado")) {
      bloque_MP.estado = "particionado";
      asignar_proceso_MP(bloque_MP.bloque_IZQ, proceso);
      asignar_proceso_MP(bloque_MP.bloque_DER, proceso);
    }
  } else if (bloque_MP.orden === 0  && bloque_MP.estado === "disponible" &&
      proceso.estado === "En Disco" && proceso.espacio_MP <=
      elevarN(2, bloque_MP.orden) * 64) {
      bloque_MP.estado = "ocupado";
      bloque_MP.proceso_Alojado = proceso.nombre;
      bloque_MP.MP_usada = proceso.espacio_MP;
      proceso.estado = "En ejecucion";
      proceso.reg_Base = bloque_MP.reg_Base;
      proceso.reg_Limite = bloque_MP.reg_Limite;
      recursos_SIM[5] -= elevarN(2, bloque_MP.orden) * 64;
      recursos_SIM[8] += elevarN(2, bloque_MP.orden) * 64;
  }
};

/*Añade un par de filas a la tabla MP que representan a una determinada
particion dependiendo de la situacion en que se encuentre la misma.*/
function pintarParticion(blockParticion) {
  if (blockParticion.estado === "disponible") {
    $("#cont_MP").append('<tr id="trMP' + blockParticion.proceso_Alojado +
      '"><th>Reg. Base: ' + blockParticion.reg_Base +
      '</th><th class="top-ran-empty">' + '</th><th>Tamaño: ' +
      elevarN(2, blockParticion.orden) * 64 + "KB</th></tr>" +
      '<tr id="trMP' + blockParticion.proceso_Alojado +
      '"><th>Reg. Limite: ' + blockParticion.reg_Limite +
      '</th><th class="bottom-ran-empty"></th>' +
      "<th>Usada: 0KB</th></tr>");
  } else if (blockParticion.MP_usada < 64 * elevarN(2, blockParticion.orden)) {
    $("#cont_MP").append('<tr id="trMP' + blockParticion.proceso_Alojado +
      '"><th>Reg. Base: ' + blockParticion.reg_Base +
      '</th><th class="top-ran-fill">' + blockParticion.proceso_Alojado +
      '</th><th>Tamaño: ' + elevarN(2, blockParticion.orden) * 64 +
      "KB</th></tr>" + '<tr id="trMP' + blockParticion.proceso_Alojado +
      '"><th>Reg. Limite: ' + blockParticion.reg_Limite +
      '</th><th class="bottom-ran-frag"></th>' +
      "<th>Usada: " + blockParticion.MP_usada + "KB</th></tr>");

  } else if (blockParticion.MP_usada === 64 * elevarN(2, blockParticion.orden)) {
    $("#cont_MP").append('<tr id="trMP' + blockParticion.proceso_Alojado +
      '"><th>Reg. Base: ' + blockParticion.reg_Base +
      '</th><th class="top-ran-fill">' + blockParticion.proceso_Alojado +
      '</th><th>Tamaño: ' + elevarN(2, blockParticion.orden) * 64 +
      "KB</th></tr>" + '<tr id="trMP' + blockParticion.proceso_Alojado +
      '"><th>Reg. Limite: ' + blockParticion.reg_Limite +
      '</th><th class="bottom-ran-fill"></th>' +
      "<th>Usada: " + blockParticion.MP_usada + "KB</th></tr>");
  }
};

//Grafica la Memoria Principal segun la ocupacion actual de la misma.
function graficarMP(blockListo) {
  if (blockListo.orden > 0) {
    if (blockListo.estado === "ocupado" ||
      blockListo.estado === "disponible") {
        pintarParticion(blockListo);
    }
    else if (blockListo.orden > 0 && blockListo.estado === "particionado") {
      graficarMP(blockListo.bloque_IZQ);
      graficarMP(blockListo.bloque_DER);
    }
  }
  else if (blockListo.orden === 0 && (blockListo.estado === "ocupado" ||
      blockListo.estado === "disponible")) {
      pintarParticion(blockListo);
  }
};

/* Funcion que se encarga de liberar espacio en la memoria principal, liberando
 * aquellos bloques que se encuentren ocupados y dejandolos disponibles.
 */
function liberarMP(blockEsclavo, procesoEsclavo) {
  if (blockEsclavo.orden > 0) {
    if (procesoEsclavo.nombre === blockEsclavo.proceso_Alojado) {
      blockEsclavo.proceso_Alojado = "";
      blockEsclavo.estado = "disponible";
      blockEsclavo.MP_usada = 0;
      procesoEsclavo.estado = "En Disco";
      procesoEsclavo.reg_Base = 0;
      procesoEsclavo.reg_Limite = 0;
      recursos_SIM[5] += elevarN(2, blockEsclavo.orden) * 64;
      recursos_SIM[8] -= elevarN(2, blockEsclavo.orden) * 64;
    }
    else {
      liberarMP(blockEsclavo.bloque_IZQ, procesoEsclavo);
      liberarMP(blockEsclavo.bloque_DER, procesoEsclavo);
    }
  } else {
    if (procesoEsclavo.nombre === blockEsclavo.proceso_Alojado) {
      blockEsclavo.proceso_Alojado = "";
      blockEsclavo.estado = "disponible";
      blockEsclavo.MP_usada = 0;
      procesoEsclavo.estado = "En Disco";
      procesoEsclavo.reg_Base = 0;
      procesoEsclavo.reg_Limite = 0;
      recursos_SIM[5] += elevarN(2, blockEsclavo.orden) * 64;
      recursos_SIM[8] -= elevarN(2, blockEsclavo.orden) * 64;
    }
  }
};

/*Funcion que recorre la memoria principal en busca de particiones disponibles
  entre colegas. Si encuentra dos particiones que son colegas, entonces compac-
  ta la memoria para devolver una particion con un orden por encima de estas.*/
function compactarBuddies(blockBuddy) {
  if (blockBuddy.orden > 0) {
    compactarBuddies(blockBuddy.bloque_IZQ);
    compactarBuddies(blockBuddy.bloque_DER);
    if (blockBuddy.estado === "particionado" &&
        blockBuddy.bloque_IZQ.estado === "disponible" &&
        blockBuddy.bloque_DER.estado === "disponible") {
      blockBuddy.estado = "disponible";
    }

  }
};

// Esta es la memoria principal particionada en forma de arbol binario
particiones_MP = crear_Particiones(4, 0);
