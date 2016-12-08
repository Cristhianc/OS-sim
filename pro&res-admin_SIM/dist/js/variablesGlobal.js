/*Variables predeterminadas para el manejo de la memoria y procesos:
 __________________________________________________________________________
|  -numProc: Entero autoincrementable para asignar al PID de los procesos.|
|  -minBloque: Tamaño minimo de cada particion o bloque en el simulador.  |
|  -tamMP: Tamaño total de la memoria principal (RAM).                    |
|  -cantCPU: Cantidad total de CPU's en el simulador                      |
|_________________________________________________________________________|
*/
var numProc=0;
var minBloque=64;
var tamMP=1024;
var cantCPU=8;
/*Arreglo que contiene informacion acerca de los recursos de entrada y salida,
  datos acerca de los procesos, datos acerca de la memoria principal y datos
  acerca de las CPU's.*/
var numAuto = 0;
var minBloque;
var tamMP;
var totalCPUs;
var utilCPUs;

//Cantidad de las columnas a manejar en la tabla RES
var columnasRES = 1;

//Lista que contiene a todos los procesos del simulador
var lista_proc = [];

//Estados de los procesos que determinan si estan o no ejecutandose
var procesos_flags = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ejem1Montado = 0;

/*Constructor del objeto "Proceso" conformado por los datos necesarios para que
un proceso se pueda ejecutar sin problemas. Estos son:
 _______________________________________________________________________________
|  -nombre: Nombre del proceso                                                 |
|  -pid: Identificador del proceso                                             |
|  -estadoP: Estado actual del proceso                                         |
|  -regBase: Registro BASE que le corresponde al proceso                       |
|  -regLim: Registro lIMITE que le corresponde al proceso                      |
|  -rec_ES: Arreglo de recursos de ENTRADA y SALIDA del proceso almacenara dos |
|           tipos de informacion en dos arreglos por separado:                 |
|           -1er Arreglo: Nombres de los recursos                              |
|           -2do Arreglo: Cantidad de cada recurso de acuerdo a los indices del|
|                         primer arreglo.                                      |
|______________________________________________________________________________|
*/

var recursos_SIM = [
  //Nombre de los recursos E/S
  [],
  //Cantidad utilizada de recursos E/S
  [],
  //Cantidad disponible de recursos E/S
  [],
  //Numero autoincrementable para asignar a los pid's de los procesos
  numAuto,
  //Tamaño minimo de cada particion o bloque de la memoria principal
  minBloque,
  //Tamaño de la memoria principal, ya sea en bytes, KB's, MB's, etc
  tamMP,
  //Cantidad total de CPU's en el simulador
  totalCPUs=8,
  //Cantidad utilizadas de CPU's en el simulador
  utilCPUs=0,
  //Cantidad de memoria RAM utilizada
  utilMP=0
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

function Proceso(nom, mp) {
  this.nombre = nom;
  this.pid = ++recursos_SIM[3];
  this.estadoP = "En Disco";
  this.regBase = 0;
  this.regLim = 0;
  this.rec_ES = [
    [],
    []
  ];
  this.cant_CPU = 1;
  this.espacio_MP = mp;
};

//Constructor para un bloque padre de la memoria
function BloqueP(orden, bIzq, bDer, rB, rL) {
  this.ordenBloq = orden;
  this.procAlojado = "";
  this.estadoBloq = "disponible";
  this.usadaMP = 0;
  this.regB = rB;
  this.regL = rL;
  this.blockIzq = bIzq;
  this.blockDer = bDer;
};

//Constructor para un bloque hijo de la memoria
function BloqueH(orden, rB, rL) {
  this.ordenBloq = orden;
  this.procAlojado = "";
  this.estadoBloq = "disponible";
  this.usadaMP;
  this.regB = rB;
  this.regL = rL;
};

/*Crea un nuevo proceso al cual se le especifica la cantidad de memoria RAM que
  va a necesitar para ser ejecutado.*/

//Proceso:Explorador
lista_proc.push(new Proceso("Explorador", 64));
//Proceso:Chrome
lista_proc.push(new Proceso("Chrome", 125));
//Proceso:Terminal del Sistema
lista_proc.push(new Proceso("Terminal del Sistema", 45));
//Proceso:Reproductor Multimedia
lista_proc.push(new Proceso("Reproductor Multimedia", 230));
//Proceso:Notepad++
lista_proc.push(new Proceso("Notepad++", 100));
//Proceso:Administrador de Tareas
lista_proc.push(new Proceso("Administrador de Tareas", 57));
//Proceso:Skype
lista_proc.push(new Proceso("Skype", 77));
//Proceso:Hangouts
lista_proc.push(new Proceso("Hangouts", 34));
//Proceso:Winrar
lista_proc.push(new Proceso("Winrar", 66));
//Proceso:Apache Server
lista_proc.push(new Proceso("Apache Server", 128));
//Proceso:Whatsapp
lista_proc.push(new Proceso("Whatsapp", 87));
//Proceso:Git
lista_proc.push(new Proceso("Git", 95));
//Proceso:Calculadora
lista_proc.push(new Proceso("Calculadora", 25));
//Proceso:Acrobat Reader
lista_proc.push(new Proceso("Acrobat Reader", 116));
//Proceso:Gestion de la Bateria
lista_proc.push(new Proceso("Gestion de la Bateria", 86));
