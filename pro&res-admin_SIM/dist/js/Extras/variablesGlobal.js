/*Variables predeterminadas para el manejo de la memoria y procesos:
 ______________________________________________________________________________
|  -numero_pid: Entero autoincrementable para asignar al PID de los procesos. |
|  -bloque_MIN: Tamaño minimo de cada particion o bloque en el simulador.     |
|  -MP_tamaño: Tamaño total de la memoria principal (RAM).                    |
|  -CPU_totales: Cantidad total de CPU's en el simulador                      |
|  -CPU_usados: Cantidad de CPU's usados en el simulador                      |
|  -MP_usada: Cantidad de memoria RAM usada                                   |
|_____________________________________________________________________________|
*/
var numero_pid = 0;
var bloque_MIN = 64;
var MP_tamaño = 1024;
var CPU_totales = 8;
var CPU_usados = 0;
var MP_usada = 0;

//Cantidad de las columnas a manejar en la tabla RES
var columnasRES = 1;

/* Arreglos que representan a 3 tipos diferentes de colas:
 *    -cola_Procesos: Cola inicial en que se ejecutan los procesos
 *    -cola_FCFS: Cola que resulta una vez que se aplico el algoritmo FCFS
 *    -Cola_SSTF: Cola que resulta una vez que se aplico el algoritmo SSTF
 */
var cola_Procesos = [
  // Nombres de los procesos
  [],
  // Posiciones en el disco
  []
];
var cola_SSTF = [
  // Nombres de los procesos
  [],
  // Posiciones en el disco
  []
];

/* Posicion actual en la que se encuentra la cabezera del disco. Por
 * defecto es la posicion '0'.
 */
var posicion_cabeza = 53;

//Lista que contiene a todos los procesos del simulador
var lista_procesos = [];

//Estados de los procesos que determinan si estan o no ejecutandose
var procesos_flags = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ejemplo_1_montado = false;

var recursos_SIM = [
  //Nombre de los recursos E/S
  [],
  //Cantidad utilizada de recursos E/S
  [],
  //Cantidad disponible de recursos E/S
  [],
  numero_pid,
  bloque_MIN,
  MP_tamaño,
  CPU_totales,
  CPU_usados,
  MP_usada
];

/*Recursos de entrada y salida del simulador con los siguientes nombres, canti-
dades disponibles respectivas y cantidades utilizadas respectivas:
 ____________________
|  -Impresoras: 3   |
|  -Camara Web: 3   |
|  -Archivo.docx: 1 |
|  -Archivo.mp4: 1  |
|  -Archivo.pdf: 1  |
|___________________|
  */
recursos_SIM[0].push("Impresora");
recursos_SIM[0].push("Camara Web");
recursos_SIM[0].push("Archivo.docx");
recursos_SIM[0].push("Archivo.mp4");
recursos_SIM[0].push("Archivo.pdf");
recursos_SIM[1].push(0);
recursos_SIM[1].push(0);
recursos_SIM[1].push(0);
recursos_SIM[1].push(0);
recursos_SIM[1].push(0);
recursos_SIM[2].push(3);
recursos_SIM[2].push(3);
recursos_SIM[2].push(1);
recursos_SIM[2].push(1);
recursos_SIM[2].push(1);

/*Constructor del objeto "Proceso" conformado por los datos necesarios para que
un proceso se pueda ejecutar sin problemas. Estos son:
 _______________________________________________________________________________
|  -nombre: Nombre del proceso                                                 |
|  -pid: Identificador del proceso                                             |
|  -estado: Estado actual del proceso                                          |
|  -reg_Base: Registro BASE que le corresponde al proceso                      |
|  -reg_Limite: Registro lIMITE que le corresponde al proceso                  |
|  -recursos_ES: Arreglo de recursos de ENTRADA y SALIDA del proceso almacenara|
|           dos tipos de informacion en dos arreglos por separado:             |
|           -1er Arreglo: Nombres de los recursos                              |
|           -2do Arreglo: Cantidad de cada recurso de acuerdo a los indices del|
|                         primer arreglo.                                      |
|  -cant_CPUs: cantidad de CPU's que usa un proceso                            |
|  -espacio_MP: cantidad de memoria RAM que requiere un proceso                |
|______________________________________________________________________________|
*/
function Proceso(nombre, MP_requerida, posicion_Disco) {
  this.nombre = nombre;
  this.pid = ++recursos_SIM[3];
  this.estado = "En Disco";
  this.reg_Base = 0;
  this.reg_Limite = 0;
  this.recursos_ES = [
    [],
    []
  ];
  this.cant_CPUs = 1;
  this.espacio_MP = MP_requerida;
  this.posicion_Disco = posicion_Disco;
};

/*Constructor del objeto "BloquePadre" conformado por los datos necesarios para
la construccion de un bloque Raiz o Padre. Estos son:
 _______________________________________________________________________________
|  -orden: Orden del bloque                                                    |
|  -proceso_Alojado: Nombre del proceso alojado en el bloque                   |
|  -estado: Estado actual del bloque                                           |
|  -MP_usada: Memoria principal usada por el proceso contenido en el bloque    |
|  -reg_Base: Registro BASE que le corresponde al bloque                       |
|  -reg_Limite: Registro lIMITE que le corresponde al bloque                   |
|  -bloque_IZQ: Bloque de lado izquierdo correspodiente al bloque padre        |
|  -bloque_DER: Bloque de lado derecho correspodiente al bloque padre          |
|______________________________________________________________________________|
*/
function BloquePadre(orden, bloque_IZQ, bloque_DER, reg_Base, reg_Limite) {
  this.orden = orden;
  this.proceso_Alojado = "";
  this.estado = "disponible";
  this.MP_usada = 0;
  this.reg_Base = reg_Base;
  this.reg_Limite = reg_Limite;
  this.bloque_IZQ = bloque_IZQ;
  this.bloque_DER = bloque_DER;
};

/*Constructor del objeto "BloqueHijo" conformado por los datos necesarios para
la construccion de un bloque Rama o Hijo. Estos son:
 _______________________________________________________________________________
|  -orden: Orden del bloque                                                    |
|  -proceso_Alojado: Nombre del proceso alojado en el bloque                   |
|  -estado: Estado actual del bloque                                           |
|  -MP_usada: Memoria principal usada por el proceso contenido en el bloque    |
|  -reg_Base: Registro BASE que le corresponde al bloque                       |
|  -reg_Limite: Registro lIMITE que le corresponde al bloque                   |
|______________________________________________________________________________|
*/
function BloqueHijo(orden, reg_Base, reg_Limite) {
  this.orden = orden;
  this.proceso_Alojado = "";
  this.estado = "disponible";
  this.MP_usada;
  this.reg_Base = reg_Base;
  this.reg_Limite = reg_Limite;
};

/*Crea un nuevo proceso al cual se le especifica la cantidad de memoria RAM que
  va a necesitar para ser ejecutado.*/

// Proceso:Explorador
lista_procesos.push(new Proceso("Explorador", 64, 53));

// Proceso:Chrome
lista_procesos.push(new Proceso("Chrome", 125, 98));

// Proceso:Terminal del Sistema
lista_procesos.push(new Proceso("Terminal del Sistema", 45, 183));

// Proceso:Reproductor Multimedia
lista_procesos.push(new Proceso("Reproductor Multimedia", 230, 37));

// Proceso:Notepad++
lista_procesos.push(new Proceso("Notepad++", 100, 122));

// Proceso:Administrador de Tareas
lista_procesos.push(new Proceso("Administrador de Tareas", 57, 14));

// Proceso:Skype
lista_procesos.push(new Proceso("Skype", 77, 124));

// Proceso:Hangouts
lista_procesos.push(new Proceso("Hangouts", 34, 65));

// Proceso:Winrar
lista_procesos.push(new Proceso("Winrar", 66, 67));

// Proceso:Apache Server
lista_procesos.push(new Proceso("Apache Server", 128, 187));

// Proceso:Whatsapp
lista_procesos.push(new Proceso("Whatsapp", 87, 114));

// Proceso:Git
lista_procesos.push(new Proceso("Git", 95, 115));

// Proceso:Calculadora
lista_procesos.push(new Proceso("Calculadora", 25, 33));

// Proceso:Acrobat Reader
lista_procesos.push(new Proceso("Acrobat Reader", 116, 21));

// Proceso:Gestion de la Bateria
lista_procesos.push(new Proceso("Gestion de la Bateria", 86, 74));
