/* Funcion que ejecuta proceso por proceso, asignando a cada proceso sus datos
 * de Inicializacion correspondiente. Ademas, los carga en memoria y actualiza
 * la tabla DAPE.
 */
function ejecutarProceso(fila_proceso) {
  if (ejemplo_1_montado === true) {

    if (procesos_flags[fila_proceso] === 0 && recursos_SIM[6] > 0) {
      /*Agrega a los botones de ejecucion de los procesos un icono de actividad,
        el cual muestra si el proceso se esta ejecutando o no. Luego se guarda
        el estado mediante un arreglo que corresponde a cada proceso implemen-
        tado en el simulador.*/
      $('#cont_MP').remove();
      $('#tabla_MP').append('<tbody id="cont_MP"></tbody>');
      $("#" + $(event.target).attr('id')).append('<i id="activ_' +
        fila_proceso + '" ' + 'class="glyphicon glyphicon-ok-sign text-success"'+
        ' style="float:right;"></i>');
      procesos_flags[fila_proceso] = 1;
      asignar_proceso_MP(particiones_MP, lista_procesos[fila_proceso]);
      graficarMP(particiones_MP);
      $("#cont_IPE").append('<tr id="tIPE_f' + fila_proceso + '"></tr>');
      $('#tIPE_f' + fila_proceso).append('<th id="tIPE_f' + fila_proceso + 'c0">' +
        lista_procesos[fila_proceso].nombre + '</th>' +
        '<th id="tIPE_f' + fila_proceso + 'c1">' + lista_procesos[fila_proceso].pid + '</th>' +
        '<th id="tIPE_f' + fila_proceso + 'c2">' + lista_procesos[fila_proceso].estado +
        '</th>' +
        '<th id="tIPE_f' + fila_proceso + 'c3">' + lista_procesos[fila_proceso].reg_Base +
        '</th>' +
        '<th id="tIPE_f' + fila_proceso + 'c4">' + lista_procesos[fila_proceso].reg_Limite +
        '</th>' +
        '<th id="tIPE_f' + fila_proceso + 'c5"></th>' +
        '<th id="tIPE_f' + fila_proceso + 'c6">' + lista_procesos[fila_proceso].cant_CPUs +
        '</th>' +
        '<th id="tIPE_f' + fila_proceso + 'c7">' + lista_procesos[fila_proceso].espacio_MP +
        '</th>'
      );
      $("#tDAPE_f16c1").html(++recursos_SIM[7]);
      $("#tDAPE_f17c1").html(--recursos_SIM[6]);
      $("#tDAPE_f16c2").html(recursos_SIM[8]);
      $("#tDAPE_f17c2").html(recursos_SIM[5]);
      cola_Procesos[0].push(lista_procesos[fila_proceso].nombre);
      cola_Procesos[1].push(lista_procesos[fila_proceso].posicion_Disco);
      mostrar_Cola_Procesos();
    }
    else if (procesos_flags[fila_proceso] === 1) {
      /*Remueve el icono anteriormente mencionado a estos botones y cambia el
        estado en que se encuentra.*/
      $('#cont_MP').remove();
      $('#tabla_MP').append('<tbody id="cont_MP"></tbody>');
      liberarMP(particiones_MP, lista_procesos[fila_proceso]);
      compactarBuddies(particiones_MP);
      graficarMP(particiones_MP);
      $('#activ_' + fila_proceso).remove();
      $('#tIPE_f' + fila_proceso).remove();
      procesos_flags[fila_proceso] = 0;
      $("#tDAPE_f16c1").html(--recursos_SIM[7]);
      $("#tDAPE_f17c1").html(++recursos_SIM[6]);
      $("#tDAPE_f16c2").html(recursos_SIM[8]);
      $("#tDAPE_f17c2").html(recursos_SIM[5]);

      indice_1 = cola_Procesos[0].indexOf(lista_procesos[fila_proceso].nombre);
      indice_2 = cola_Procesos[1].indexOf(lista_procesos[fila_proceso].posicion_Disco);
      if (indice_1 > -1 && indice_2 > -1) {
        cola_Procesos[0].splice(indice_1, 1);
        cola_Procesos[1].splice(indice_2, 1);
      }
      mostrar_Cola_Procesos();
    }
  }
};
