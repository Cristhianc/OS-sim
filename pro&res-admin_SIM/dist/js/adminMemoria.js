
function total_partMP(orden, rB) {
  if (orden > 0) {
    return new BloqueP(orden,
      total_partMP(orden - 1, rB),
      total_partMP(orden - 1, rB + elevarN(2, orden - 1) * 64),
      rB,
      rB + (elevarN(2, orden) * 64)
    );
  } else {
    return new BloqueH(orden, rB, rB + (elevarN(2, orden) * 64));
  }
};

function ubicar_procMP(bloqueMP, proceso) {
  if (bloqueMP.ordenBloq > 0 && proceso.estadoP === "En Disco") {
    lim_Actual = elevarN(2, bloqueMP.ordenBloq) * 64;
    lim_Anterior = elevarN(2, bloqueMP.ordenBloq - 1) * 64;
    if (lim_Anterior < proceso.espacio_MP && proceso.espacio_MP <= lim_Actual &&
        bloqueMP.estadoBloq === "disponible") {
          bloqueMP.estadoBloq = "ocupado";
          bloqueMP.procAlojado = proceso.nombre;
          bloqueMP.usadaMP = proceso.espacio_MP;
          proceso.estadoP = "En ejecucion";
          proceso.regBase = bloqueMP.regB;
          proceso.regLim = bloqueMP.regL;
    }
    else if (proceso.espacio_MP <= lim_Anterior &&
      (bloqueMP.estadoBloq === "disponible" ||
      bloqueMP.estadoBloq === "particionado")) {
      bloqueMP.estadoBloq = "particionado";
      ubicar_procMP(bloqueMP.blockIzq, proceso);
      ubicar_procMP(bloqueMP.blockDer, proceso);
    }
  } else if (bloqueMP.ordenBloq === 0  && bloqueMP.estadoBloq === "disponible" &&
      proceso.estadoP === "En Disco" && proceso.espacio_MP <=
      elevarN(2, bloqueMP.ordenBloq) * 64) {
      bloqueMP.estadoBloq = "ocupado";
      bloqueMP.procAlojado = proceso.nombre;
      bloqueMP.usadaMP = proceso.espacio_MP;
      proceso.estadoP = "En ejecucion";
      proceso.regBase = bloqueMP.regB;
      proceso.regLim = bloqueMP.regL;
  }
};

/*Añade un par de filas a la tabla MP que representan a una determinada
particion dependiendo de la situacion en que se encuentre la misma.*/
function pintarParticion(blockParticion) {
  if (blockParticion.estadoBloq === "disponible") {
    $("#cont_MP").append('<tr id="trMP' + blockParticion.procAlojado +
      '"><th>Reg. Base: ' + blockParticion.regB +
      '</th><th class="top-ran-empty">' + '</th><th>Tamaño: ' +
      elevarN(2, blockParticion.ordenBloq) * 64 + "KB</th></tr>" +
      '<tr id="trMP' + blockParticion.procAlojado +
      '"><th>Reg. Limite: ' + blockParticion.regL +
      '</th><th class="bottom-ran-empty"></th>' +
      "<th>Usada: 0KB</th></tr>");
  } else if (blockParticion.usadaMP < 64 * elevarN(2, blockParticion.ordenBloq)) {
    $("#cont_MP").append('<tr id="trMP' + blockParticion.procAlojado +
      '"><th>Reg. Base: ' + blockParticion.regB +
      '</th><th class="top-ran-fill">' + blockParticion.procAlojado +
      '</th><th>Tamaño: ' + elevarN(2, blockParticion.ordenBloq) * 64 +
      "KB</th></tr>" + '<tr id="trMP' + blockParticion.procAlojado +
      '"><th>Reg. Limite: ' + blockParticion.regL +
      '</th><th class="bottom-ran-frag"></th>' +
      "<th>Usada: " + blockParticion.usadaMP + "KB</th></tr>");

  } else if (blockParticion.usadaMP === 64 * elevarN(2, blockParticion.ordenBloq)) {
    $("#cont_MP").append('<tr id="trMP' + blockParticion.procAlojado +
      '"><th>Reg. Base: ' + blockParticion.regB +
      '</th><th class="top-ran-fill">' + blockParticion.procAlojado +
      '</th><th>Tamaño: ' + elevarN(2, blockParticion.ordenBloq) * 64 +
      "KB</th></tr>" + '<tr id="trMP' + blockParticion.procAlojado +
      '"><th>Reg. Limite: ' + blockParticion.regL +
      '</th><th class="bottom-ran-fill"></th>' +
      "<th>Usada: " + blockParticion.usadaMP + "KB</th></tr>");
  }
};

//Grafica la MP segun la ocupacion actual de la misma.
function graficarMP(blockListo) {
  if (blockListo.ordenBloq > 0) {
    if (blockListo.estadoBloq === "ocupado" ||
      blockListo.estadoBloq === "disponible") {
        pintarParticion(blockListo);
    }
    else if (blockListo.ordenBloq > 0 && blockListo.estadoBloq === "particionado") {
      graficarMP(blockListo.blockIzq);
      graficarMP(blockListo.blockDer);
    }
  }
  else if (blockListo.ordenBloq === 0 && (blockListo.estadoBloq === "ocupado" ||
      blockListo.estadoBloq === "disponible")) {
      pintarParticion(blockListo);
  }
};

function liberarMP(blockEsclavo, procesoEsclavo) {
  if (blockEsclavo.ordenBloq > 0) {
    if (procesoEsclavo.nombre === blockEsclavo.procAlojado) {
      blockEsclavo.procAlojado = "";
      blockEsclavo.estadoBloq = "disponible";
      blockEsclavo.usadaMP = 0;
      procesoEsclavo.estadoP = "En Disco";
      procesoEsclavo.regBase = 0;
      procesoEsclavo.regLim = 0;
    }
    else {
      liberarMP(blockEsclavo.blockIzq, procesoEsclavo);
      liberarMP(blockEsclavo.blockDer, procesoEsclavo);
    }
  } else {
    if (procesoEsclavo.nombre === blockEsclavo.procAlojado) {
      blockEsclavo.procAlojado = "";
      blockEsclavo.estadoBloq = "disponible";
      blockEsclavo.usadaMP = 0;
      procesoEsclavo.estadoP = "En Disco";
      procesoEsclavo.regBase = 0;
      procesoEsclavo.regLim = 0;
    }
  }
};

/*Funcion que recorre la memoria principal en busca de particiones disponibles
  entre colegas. Si encuentra dos particiones que son colegas, entonces compac-
  ta la memoria para devolver una particion con un orden por encima de estas.*/
function compactarBuddies(blockBuddy) {
  if (blockBuddy.ordenBloq > 0) {
    compactarBuddies(blockBuddy.blockIzq);
    compactarBuddies(blockBuddy.blockDer);
    if (blockBuddy.estadoBloq === "particionado" &&
        blockBuddy.blockIzq.estadoBloq === "disponible" &&
        blockBuddy.blockDer.estadoBloq === "disponible") {
      blockBuddy.estadoBloq = "disponible";
    }

  }
};

memoria_MP = total_partMP(4, 0);
