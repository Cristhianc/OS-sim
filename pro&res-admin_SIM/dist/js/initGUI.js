window.addEventListener('load', initGUI, false);
function initGUI() {
  //Añade a la tabla DAPE las filas y columnas predeterminadas.
  $("#cont_DAPE").append('<tr><th>Explorador</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Chrome</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Terminal del Sistema</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Reproductor Multimedia</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Notepad++</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Administrador de tareas</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Skype</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Hangouts</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Winrar</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Apache Server</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Whatsapp</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Git</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Calculadora</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Acrobar Reader</th><th></th><th></th><th></th></tr>');
  $("#cont_DAPE").append('<tr><th>Gestion de la bateria</th><th></th><th></th><th></th></tr>');

  //Añade a la tabla RES las filas y columnas predeterminadas.
  $("#cont_RES").append('<tr id="ftres_1"><th>Administrador de tareas</th></tr>');
  $("#cont_RES").append('<tr id="ftres_2"><th>Reproductor Multimedia</th></tr>');
  $("#cont_RES").append('<tr id="ftres_3"><th>Gestion de la Bateria</th></tr>');
  $("#cont_RES").append('<tr id="ftres_4"><th>Terminal del Sistema</th></tr>');
  $("#cont_RES").append('<tr id="ftres_5"><th>Acrobat Reader</th></tr>');
  $("#cont_RES").append('<tr id="ftres_6"><th>Apache Server</th></tr>');
  $("#cont_RES").append('<tr id="ftres_7"><th>Calculadora</th></tr>');
  $("#cont_RES").append('<tr id="ftres_8"><th>Explorador</th></tr>');
  $("#cont_RES").append('<tr id="ftres_9"><th>Notepad++</th></tr>');
  $("#cont_RES").append('<tr id="ftres_10"><th>Hangouts</th></tr>');
  $("#cont_RES").append('<tr id="ftres_11"><th>Whatsapp</th></tr>');
  $("#cont_RES").append('<tr id="ftres_12"><th>Chrome</th></tr>');
  $("#cont_RES").append('<tr id="ftres_13"><th>Winrar</th></tr>');
  $("#cont_RES").append('<tr id="ftres_14"><th>Skype</th></tr>');
  $("#cont_RES").append('<tr id="ftres_15"><th>Git</th></tr>');
  $("#cont_RES").append('<tr id="ftres_16"><th>Total Utilizado</th></tr>');
  $("#cont_RES").append('<tr id="ftres_17"><th>Total Disponible</th></tr>');

  /*Convierte las tablas al tipo DataTable con funcionalidades extras a las de
  una tabla comun y corriente.*/
  $('#tabla_IPE').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": true,
    "iDisplayLength": 15,
    "autoWidth": false,
    "language": {
      "zeroRecords": "No hay procesos en ejecucion..."
    }
  });
  $('#tabla_DAPE').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": true,
    "iDisplayLength": 15,
    "autoWidth": false
  });
  $('#tabla_RES').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": false,
    "info": true,
    "iDisplayLength": 17,
    "autoWidth": false
  });
};
