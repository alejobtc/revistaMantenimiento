CREATE TABLE editor
(nombreE char(20),
ideE numeric(25),
cargoE char(50),
CONSTRAINT pk_editor PRIMARY KEY (ideE));


CREATE TABLE par
(nombreP char(20),
direccionP char(20),
telefonoP char(20),
correoP char(20),
afiliacionP char(20),
estudioP char(20) not null,
ideP numeric(25),
CONSTRAINT pk_par PRIMARY KEY (idep)
);


CREATE TABLE autor
(nombreA char(20),
direccionA char(20),
telefonoA char(20),
correoA char(20),
afiliacionA char(20),
ideA numeric(25),
CONSTRAINT pk_autor PRIMARY KEY (ideA)
);

CREATE TABLE articulo
(enlaceAR char(100),
estadoAR char(20),
ideAR numeric(25),
tituloAR char(20),
temaAR char(20),
palabras_clavesAR char(100),
resumenAR char(2000),
ide_autorAR numeric(25),
comentariosAR char(1000),
CONSTRAINT pk_articulo PRIMARY KEY (ideAR),
CONSTRAINT FK_ideautor FOREIGN KEY (ide_autorAR) 
    REFERENCES autor (ideA) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE login
(usuario char(20),
clave numeric(25),
rol char(10),
ide numeric(25),
CONSTRAINT pk_login PRIMARY KEY (clave,usuario));



CREATE TABLE revision
(ide_articulo numeric(25),
ide_par numeric(25),
nota numeric(2),
comentarios char(1000),
CONSTRAINT pk_revision PRIMARY KEY (ide_articulo,ide_par),
CONSTRAINT FK_idearticulo FOREIGN KEY (ide_articulo) 
    REFERENCES  articulo (ideAR) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
CONSTRAINT FK_idepar FOREIGN KEY (ide_par) 
    REFERENCES  par (ideP) 
    ON DELETE CASCADE
    ON UPDATE CASCADE    
);
