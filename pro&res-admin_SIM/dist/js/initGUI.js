window.addEventListener('load', initGUI, false);
function initGUI() {
  //Añade a la tabla DAPE las filas y columnas predeterminadas.
  $("#cont_DAPE").append('<tr><th>Explorador</th>' +
    '<th id="tDAPE_f1c1"></th>' +
    '<th id="tDAPE_f1c2"></th>' +
    '<th id="tDAPE_f1c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Chrome</th>' +
    '<th id="tDAPE_f2c1"></th>' +
    '<th id="tDAPE_f2c2"></th>' +
    '<th id="tDAPE_f2c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Terminal del Sistema</th>' +
    '<th id="tDAPE_f3c1"></th>' +
    '<th id="tDAPE_f3c2"></th>' +
    '<th id="tDAPE_f3c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Reproductor Multimedia</th>' +
    '<th id="tDAPE_f4c1"></th>' +
    '<th id="tDAPE_f4c2"></th>' +
    '<th id="tDAPE_f4c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Notepad++</th>' +
    '<th id="tDAPE_f5c1"></th>' +
    '<th id="tDAPE_f5c2"></th>' +
    '<th id="tDAPE_f5c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Administrador de Tareas</th>' +
    '<th id="tDAPE_f6c1"></th>' +
    '<th id="tDAPE_f6c2"></th>' +
    '<th id="tDAPE_f6c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Skype</th>' +
    '<th id="tDAPE_f7c1"></th>' +
    '<th id="tDAPE_f7c2"></th>' +
    '<th id="tDAPE_f7c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Hangouts</th>' +
    '<th id="tDAPE_f8c1"></th>' +
    '<th id="tDAPE_f8c2"></th>' +
    '<th id="tDAPE_f8c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Winrar</th>' +
    '<th id="tDAPE_f9c1"></th>' +
    '<th id="tDAPE_f9c2"></th>' +
    '<th id="tDAPE_f9c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Apache Server</th>' +
    '<th id="tDAPE_f10c1"></th>'+
    '<th id="tDAPE_f10c2"></th>' +
    '<th id="tDAPE_f10c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Whatsapp</th>' +
    '<th id="tDAPE_f11c1"></th>' +
    '<th id="tDAPE_f11c2"></th>' +
    '<th id="tDAPE_f11c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Git</th>' +
    '<th id="tDAPE_f12c1"></th>' +
    '<th id="tDAPE_f12c2"></th>' +
    '<th id="tDAPE_f12c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Calculadora</th>' +
    '<th id="tDAPE_f13c1"></th>' +
    '<th id="tDAPE_f13c2"></th>' +
    '<th id="tDAPE_f13c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Acrobar Reader</th>' +
    '<th id="tDAPE_f14c1"></th>' +
    '<th id="tDAPE_f14c2"></th>' +
    '<th id="tDAPE_f14c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Gestion de la Bateria</th>' +
    '<th id="tDAPE_f15c1"></th>' +
    '<th id="tDAPE_f15c2"></th>' +
    '<th id="tDAPE_f15c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Total Utilizado</th>' +
    '<th id="tDAPE_f16c1"></th>' +
    '<th id="tDAPE_f16c2"></th>' +
    '<th id="tDAPE_f16c3"></th></tr>');
  $("#cont_DAPE").append('<tr><th>Total Disponible</th>' +
    '<th id="tDAPE_f17c1"></th>' +
    '<th id="tDAPE_f17c2"></th>' +
    '<th id="tDAPE_f17c3"></th></tr>');

  //Añade a la tabla RES las filas y columnas predeterminadas.
  $("#cont_RES").append('<tr id="tRES_f1"><th>Explorador</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f2"><th>Chrome</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f3"><th>Terminal del Sistema</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f4"><th>Reproductor Multimedia</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f5"><th>Notepad++</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f6"><th>Administrador de Tareas</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f7"><th>Skype</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f8"><th>Hangouts</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f9"><th>Winrar</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f10"><th>Apache Server</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f11"><th>Whatsapp</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f12"><th>Git</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f13"><th>Calculadora</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f14"><th>Acrobat Reader</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f15"><th>Gestion de la Bateria</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f16"><th>Total Utilizado</th></tr>');
  $("#cont_RES").append('<tr id="tRES_f17"><th>Total Disponible</th></tr>');
};
