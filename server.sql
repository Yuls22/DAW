create database programa

use programa

create table Carrera
(
Carrera_codigo int not_null,
Nombre char not_null,
)

create table Alumno
(
Matricula_alumno char not_null,
Nombre_alumno char not_null,
ApellidoP_alumno char not_null,
AMaterno_alumno char not_null,
Carrera_codigo,
)

select * from Carrera