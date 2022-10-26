CREATE DATABASE parrot;
USE parrot;
CREATE TABLE user(
idUser INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
apartment VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
created_At TIMESTAMP,
updated_At TIMESTAMP,
photo VARCHAR(600)
);
CREATE TABLE post(
idPost INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
content VARCHAR(255) NOT NULL,
created_At TIMESTAMP,
updated_At TIMESTAMP,
idUser INT NOT NULL,
constraint fk_idUser foreign key(idUser) references user(idUser)
);
insert into user values (null, "Fabricio", "fabricio.psicologo@email.com", 101, "Testando", null, null, null);
insert into post values (null, "Testando nova publicação", null, null, 1);