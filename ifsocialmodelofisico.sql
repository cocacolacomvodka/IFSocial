CREATE TABLE pf_usuario(
nome_usuario PRIMARY KEY VARCHAR(20) NOT NULL
email PRIMARY KEY VARCHAR(50) NOT NULL
nome_completo VARCHAR(45) NOT NULL
bio VARCHAR(200)
data_nascimento DATE NOT NULL
celular INT(11)
);
CREATE TABLE intituto(
nome_usuario FOREIGN KEY pf_usuario
ins_fed VARCHAR(30) NOT NULL
campus VARCHAR(45) NOT NULL
);
CREATE TABLE login(
nome_usuario FOREIGN KEY pf_usuario
email FOREIGN KEY pf_usuario
senha VARCHAR(15) NOT NULL
);
CREATE TABLE posts(
nome_usuario FOREIGN KEY pf_usuario
titulo VARCHAR(50)
descricao VARCHAR(200)
foto
arquivo
);