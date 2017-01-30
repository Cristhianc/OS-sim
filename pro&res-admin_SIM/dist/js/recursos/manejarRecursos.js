/* Script que se encarga de manejar los recursos de Entrada y Salida del
 * simulador.
 */

//Funcion para añadir un nuevo recurso al simulador
function nuevoRecurso(nombreREC, cantTOTAL) {
  /*Texto HTML5 que implementa los botones de agregar y eliminar en una cantidad
  de 1 a una instancia de un recurso, si es que existen multiples del mismo.*/
  nRecHTML1 = '<th><label id="tRES_f';
  nRecHTML2 = '">0</label><button onclick="agregarRES(';
  nRecHTML3 = ')" type="button" style="margin-left:10px;"><i ';
  nRecHTML4 = ' class="glyphicon glyphicon-plus"></i></button><button '+
  'onclick="quitarRES(';
  nRecHTML5 = ')" type="button"><i class="glyphicon glyphicon-minus">'+
  '</i></button></th>';
  /*Ciclo que va agregando los botones para incrementar o decrementar la
  cantidad de un recurso en especifico, en la fila correspondiente a un proceso
  y a la columna correspondiente a ese recurso de entrada y salida.*/
  for (i = 0; i < 18; i++) {
    if (i > 0 && i < 16) {
      $('#tRES_f'+i).append(nRecHTML1 + i + 'c' + columnasRES +
        nRecHTML2 + i + ',' + columnasRES +
        nRecHTML3 +
        nRecHTML4 + i + ',' + columnasRES +
        nRecHTML5
      );
    }
    else if (i === 0) {
      $('#tRES_f' + i).append('<th><label id="tRES_f' + i + 'c' + columnasRES +
        '">' + nombreREC + '</label></th>');
    }
    else if (i === 17) {
      $('#tRES_f'+i).append('<th><label id="tRES_f' + i + 'c' + columnasRES +
        '">' + cantTOTAL + '</label></th>');
    }
    else {
      $('#tRES_f'+i).append('<th><label id="tRES_f' + i + 'c' + columnasRES +
        '">0</label></th>');
    }
  }
  ++columnasRES;
};

/*Eventos que incrementan o decrementan la cantidad de un recurso especifico
  del tipo E/S a un proceso respectivo.*/
function agregarRES(filRes, colRes) {
  nomRES = $('#tRES_f0c' + colRes).html();
  indexRES = recursos_SIM[0].indexOf(nomRES);
  cantRES = recursos_SIM[2][indexRES];
  if (cantRES > 0) {
    cantRES_proc = parseInt($('#tRES_f' + filRes + 'c' + colRes).html());
    if (cantRES_proc === 0) {
      lista_procesos[filRes-1].recursos_ES[0].push(nomRES);
      lista_procesos[filRes-1].recursos_ES[1].push(++cantRES_proc);
    }
    else {
      indRES_proc = lista_procesos[filRes-1].recursos_ES[0].indexOf(nomRES);
      lista_procesos[filRes-1].recursos_ES[1][indRES_proc] = ++cantRES_proc;
    }
    ++recursos_SIM[1][indexRES];
    --recursos_SIM[2][indexRES];
    $('#tRES_f' + filRes + 'c' + colRes).html(cantRES_proc);
    $('#tRES_f16' + 'c' + colRes).html(recursos_SIM[1][indexRES]);
    $('#tRES_f17' + 'c' + colRes).html(recursos_SIM[2][indexRES]);
  }
};

function quitarRES(filRes, colRes) {
  nomRES = $('#tRES_f0c' + colRes).html();
  indexRES = recursos_SIM[0].indexOf(nomRES);
  cantRES_proc = parseInt($('#tRES_f' + filRes + 'c' + colRes).html());
  if (cantRES_proc > 0) {
    indRES_proc = lista_procesos[filRes-1].recursos_ES[0].indexOf(nomRES);
    if (cantRES_proc === 1) {
      lista_procesos[filRes-1].recursos_ES[0].splice(indRES_proc, 1);
      lista_procesos[filRes-1].recursos_ES[1].splice(indRES_proc, 1);
      --cantRES_proc;
    }
    else {
      lista_procesos[filRes-1].recursos_ES[1][indRES_proc] = --cantRES_proc;
    }
    --recursos_SIM[1][indexRES];
    ++recursos_SIM[2][indexRES];
    $('#tRES_f' + filRes + 'c' + colRes).html(cantRES_proc);
    $('#tRES_f16' + 'c' + colRes).html(recursos_SIM[1][indexRES]);
    $('#tRES_f17' + 'c' + colRes).html(recursos_SIM[2][indexRES]);
  }
};
