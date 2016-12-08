function elevarN(numero, cantidad) {
  if (cantidad > 0) {
    return elevarN(numero, --cantidad) * numero;
  } else {
    return 1;
  }
};
