/* logico_brmodelo: */

CREATE TABLE usuario_perfil (
    Nome_usuario VARCHAR(20) NOT NULL,
    email VARCHAR(50),
    Nome_completo VARCHAR(45) NOT NULL,
    bio VARCHAR(200),
    Data_nascimento DATE NOT NULL,
    Celular INTEGER(11),
    PRIMARY KEY (email, Nome_usuario),
    UNIQUE (Nome_usuario, email)
);

CREATE TABLE Instituto (
    FK_Nome_ususario VARCHAR(20),
    IF VARCHAR(30) NOT NULL,
    Campus VARCHAR(45) NOT NULL
);

CREATE TABLE LOGIN (
    FK_Nome_usuario VARCHAR(20),
    FK_email VARCHAR(50),
    senha VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE POSTAGENS (
    titulo VARCHAR(50),
    descricao VARCHAR(200),
    FK_nome_ususario VARCHAR(20)
);
 
ALTER TABLE Instituto ADD CONSTRAINT FK_Instituto_1
    FOREIGN KEY (FK_Nome_ususario???)
    REFERENCES ??? (???);
 
ALTER TABLE LOGIN ADD CONSTRAINT FK_LOGIN_1
    FOREIGN KEY (fk_usuariopf_Nome_usuario???, FK_Nome_usuario???, FK_email???)
    REFERENCES usuario_perfil (???, ???, ???);
 
ALTER TABLE POSTAGENS ADD CONSTRAINT FK_POSTAGENS_1
    FOREIGN KEY (FK_nome_ususario???)
    REFERENCES ??? (???);