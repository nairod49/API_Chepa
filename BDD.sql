CREATE DATABASE IF NOT EXISTS `api_Chepa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE Lieu (
    id_adresse int(10) NOT NULL,    
   Addresse varchar(256) NOT NULL,
   Code_postal int(5) NOT NULL,
   Commune varchar(256),
   Primary KEY (id_adresse)   
);

CREATE TABLE Dechet(
    Id_dechet int(10) NOT NULL,
    Nom_dechet varchar(256) NOT NULL,
    Primary KEY(Id_dechet)
);

CREATE TABLE Entreprise(
    SIREN int(30) NOT NULL,
    Nom_entreprise varchar(256) NOT NULL,
    Lieu  int(10) NOT NULL,
    Primary KEY (SIREN),
    FOREIGN KEY(Lieu) REFERENCES Lieu(id_adresse)
);

CREATE TABLE Gestion(
   Id_gestion int(10) NOT NULL,
   Entreprise int(10) NOT NULL,
   Date_gestion DATE NOT NULL,
   Dechet int(10) NOT NULL,
   Poid float(10) NOT NULL,
   Primary KEY(Id_gestion),
   FOREIGN KEY(Entreprise) REFERENCES Entreprise(SIREN),
   FOREIGN KEY(Dechet) REFERENCES Dechet(Id_dechet) 
);

