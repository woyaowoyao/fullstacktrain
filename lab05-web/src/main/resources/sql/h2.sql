CREATE TABLE tbl_user (
  user_id INTEGER GENERATED BY DEFAULT AS IDENTITY NOT NULL PRIMARY KEY,
  name VARCHAR(20) not null,
  email VARCHAR(20) not null,
  username VARCHAR(20) unique not null,
  password VARCHAR(60) not null,
  admin boolean not null default FALSE
);
insert into tbl_user(name,email,username,password,admin) values ('admin','admin@mycompany.com', 'admin','admin', TRUE),('tomcat','tomcat@mycompany.com', 'tomcat','tomcat', FALSE);
