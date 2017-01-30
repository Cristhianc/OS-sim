/* Funcion que eleva un numero a la potencia determinada por la variable
 * cantidad.
 */
function elevarN(numero, cantidad) {
  if (cantidad > 0) {
    return elevarN(numero, --cantidad) * numero;
  } else {
    return 1;
  }
};

// Funcion que retorna el menor valor de todos en un arreglo
function menorValor(arreglo) {
  var menorValor;
  var posicion_Valor;
  for (posicion = 0 ; posicion < arreglo.length ; posicion++) {
    if (posicion === 0) {
      menorValor = arreglo[posicion];
      posicion_Valor = posicion;
    }
    else {
      if (menorValor > arreglo[posicion]) {
        menorValor = arreglo[posicion];
        posicion_Valor = posicion;
      }
    }
  }

  return posicion_Valor;
}

function valorAbsoluto(numero) {
  if (numero < 0) {
    numero = numero * (-1);
  }
  return numero;
}
