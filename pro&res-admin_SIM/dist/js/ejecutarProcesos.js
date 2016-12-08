/*Funcion que ejecuta proceso por proceso, asignando a cada proceso sus datos
  de Inicializacion correspondiente. Ademas, los carga en memoria y actualiza
  la tabla DAPE.*/
function ejecutarProc(fil_proc) {
  if (ejem1Montado === 1) {

    if (procesos_flags[fil_proc] === 0 && recursos_SIM[6] > 0) {
      /*Agrega a los botones de ejecucion de los procesos un icono de actividad,
        el cual muestra si el proceso se esta ejecutando o no. Luego se guarda
        el estado mediante un arreglo que corresponde a cada proceso implemen-
        tado en el simulador.*/
      $('#cont_MP').remove();
      $('#tabla_MP').append('<tbody id="cont_MP"></tbody>');
      $("#" + $(event.target).attr('id')).append('<i id="activ_' +
        fil_proc + '" ' + 'class="glyphicon glyphicon-ok-sign text-success"'+
        ' style="float:right;"></i>');
      procesos_flags[fil_proc] = 1;
      ubicar_procMP(memoria_MP, lista_proc[fil_proc]);
      graficarMP(memoria_MP);
      $("#cont_IPE").append('<tr id="tIPE_f' + fil_proc + '"></tr>');
      $('#tIPE_f' + fil_proc).append('<th id="tIPE_f' + fil_proc + 'c0">' +
        lista_proc[fil_proc].nombre + '</th>' +
        '<th id="tIPE_f' + fil_proc + 'c1">' + lista_proc[fil_proc].pid + '</th>' +
        '<th id="tIPE_f' + fil_proc + 'c2">' + lista_proc[fil_proc].estadoP +
        '</th>' +
        '<th id="tIPE_f' + fil_proc + 'c3">' + lista_proc[fil_proc].regBase +
        '</th>' +
        '<th id="tIPE_f' + fil_proc + 'c4">' + lista_proc[fil_proc].regLim +
        '</th>' +
        '<th id="tIPE_f' + fil_proc + 'c5"></th>' +
        '<th id="tIPE_f' + fil_proc + 'c4">' + lista_proc[fil_proc].cant_CPU +
        '</th>' +
        '<th id="tIPE_f' + fil_proc + 'c4">' + lista_proc[fil_proc].espacio_MP +
        '</th>'
      );
      $("#tDAPE_f16c1").html(++recursos_SIM[7]);
      $("#tDAPE_f17c1").html(--recursos_SIM[6]);
    }
    else if (procesos_flags[fil_proc] === 1) {
      /*Remueve el icono anteriormente mencionado a estos botones y cambia el
        estado en que se encuentra.*/
      $('#cont_MP').remove();
      $('#tabla_MP').append('<tbody id="cont_MP"></tbody>');
      liberarMP(memoria_MP, lista_proc[fil_proc]);
      compactarBuddies(memoria_MP);
      graficarMP(memoria_MP);
      $('#activ_' + fil_proc).remove();
      $('#tIPE_f' + fil_proc).remove();
      procesos_flags[fil_proc] = 0;
      $("#tDAPE_f16c1").html(--recursos_SIM[7]);
      $("#tDAPE_f17c1").html(++recursos_SIM[6]);
    }
  }
};
