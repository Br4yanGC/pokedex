create database pokedex;
use pokedex;

CREATE TABLE pokemon(
    id int NOT NULL AUTO_INCREMENT, 
    name varchar(255) NOT NULL,
    height varchar(255) NOT NULL,
    weight varchar(255) NOT NULL,
    category varchar(255) NOT NULL,
    ability varchar(255) NOT NULL, 
    type varchar(255) NOT NULL,
    src_img varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO pokemon (name, height, weight, category, ability, type, src_img) VALUES ('Pikachu', '1'' 04"', '13.2 lbs', 'Mouse', 'Static', 'Electric', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png');
INSERT INTO pokemon (name, height, weight, category, ability, type, src_img) VALUES ('Bulbasaur', '2'' 04"', '15.2 lbs', 'Seed', 'Overgrow', 'Grass', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png');
INSERT INTO pokemon (name, height, weight, category, ability, type, src_img) VALUES ('Squirtle', '1'' 08"', '19.8 lbs', 'Tiny Turtle', 'Torrent', 'Water', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png');
INSERT INTO pokemon (name, height, weight, category, ability, type, src_img) VALUES ('Entei', '6'' 11"', '436.5 lbs', 'Volcano', 'Pressure', 'Fire', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png');
INSERT INTO pokemon (name, height, weight, category, ability, type, src_img) VALUES ('Suicune', '6'' 07"', '412.3 lbs', 'Aurora', 'Pressure', 'Water', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png');
INSERT INTO pokemon (name, height, weight, category, ability, type, src_img) VALUES ('Raikou', '6'' 03"', '392.4 lbs', 'Thunder', 'Pressure', 'Electric', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png');