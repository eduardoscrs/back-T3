-- DROP SCHEMA public;

-- No es necesario crear un esquema en MySQL. Simplemente se utilizan bases de datos.

-- DROP SEQUENCE "Cita_id_cita_seq";
-- MySQL no necesita SEQUENCES separadas, ya que utiliza AUTO_INCREMENT en las columnas.

-- CREATE SEQUENCE no es necesario en MySQL

-- Adaptación de la tabla Cita
CREATE TABLE Cita (
    id_cita INT AUTO_INCREMENT PRIMARY KEY,
    reg_paciente INT NULL,
    id_hora INT NOT NULL,
    estado VARCHAR(20) NULL,
    asistencia BOOLEAN NULL,
    comentario TEXT NULL,
    cont_asistencia BOOLEAN NULL
);

-- Adaptación de la tabla Rol
CREATE TABLE Rol (
    rol INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(20) NULL
);

-- Adaptación de la tabla servicio
CREATE TABLE servicio (
    id_servicio INT AUTO_INCREMENT PRIMARY KEY,
    nombre_servicio VARCHAR(100) NOT NULL
);

-- Adaptación de la tabla Notificacion
CREATE TABLE Notificacion (
    id_noti INT AUTO_INCREMENT PRIMARY KEY,
    reg_prestador INT NULL,
    reg_paciente INT NULL,
    id_cita INT NULL,
    tipo_noti VARCHAR(10) NULL,
    texto TEXT NULL,
    f_envio TIMESTAMP NULL,
    FOREIGN KEY (id_cita) REFERENCES Cita(id_cita)
);

-- Adaptación de la tabla Usuario
CREATE TABLE Usuario (
    rut VARCHAR(11) PRIMARY KEY,
    nombre VARCHAR(20) NULL,
    apellido_paterno VARCHAR(40) NULL,
    apellido_materno VARCHAR(40) NULL,
    correo VARCHAR(64) NULL,
    telefono INT NULL,
    contrasena VARCHAR(256) NULL,
    rol INT NOT NULL,
    FOREIGN KEY (rol) REFERENCES Rol(rol)
);

-- Adaptación de la tabla Persona_Mayor
CREATE TABLE Persona_Mayor (
    reg_paciente INT AUTO_INCREMENT PRIMARY KEY,
    rut VARCHAR(11) NULL,
    f_nac DATE NULL,
    direccion VARCHAR(40) NULL,
    reg_soc_hogar INT NULL,
    mov_reducida BOOLEAN NULL,
    cont_atenciones INT NULL,
    FOREIGN KEY (rut) REFERENCES Usuario(rut)
);

-- Adaptación de la tabla Prestador_Servicio
CREATE TABLE Prestador_Servicio (
    reg_prestador INT AUTO_INCREMENT PRIMARY KEY,
    rut VARCHAR(11) NULL,
    id_servicio INT NULL,
    FOREIGN KEY (rut) REFERENCES Usuario(rut),
    FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio) ON DELETE CASCADE
);

-- Adaptación de la tabla Form_Mov_Reducida
CREATE TABLE Form_Mov_Reducida (
    id_form INT AUTO_INCREMENT PRIMARY KEY,
    reg_paciente INT NULL,
    tipo VARCHAR(20) NULL,
    acompañante BOOLEAN NULL,
    FOREIGN KEY (reg_paciente) REFERENCES Persona_Mayor(reg_paciente)
);

-- Adaptación de la tabla Horario
CREATE TABLE Horario (
    id_hora INT AUTO_INCREMENT PRIMARY KEY,
    reg_prestador INT NULL,
    fecha_hora TIMESTAMP NULL,
    disponible BOOLEAN NULL,
    FOREIGN KEY (reg_prestador) REFERENCES Prestador_Servicio(reg_prestador)
);
