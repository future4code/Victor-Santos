**Exercício 01**
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```

*a. Explique o que é uma chave estrangeira*
Resposta:
Uma chave estrangeira é a resposável por relacionar os dados de uma tabela com outra tabela já existente.

*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
Resposta:
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)

);
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
("001", "Filme mais ou menos, nota 7", 6.5, "001"),
("002", "Não assisti esse filme", 10, "002"),
("003", "Filme interessante", 8, "003");

SELECT * FROM Rating;
```

*c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
Resposta:
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("004", "Comentário c", 10, "004");
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147803-victor-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```
Ao criar um avaliação para um movie_id não existe, aparece um erro onde é impossível adicionar ou atualizar uma linha filha, ocorrendo um erro de restrição de uma chave estrangeira. Caso tentemos criar uma avaliação de um elemento que não existe em outra tabela, ocorre este erro citado nos impedindo de inserir os dados na tabela de avaliações.

d. *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*
Resposta:
```
ALTER TABLE Movies
DROP COLUMN rating;
```

*e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
```
DELETE FROM Movies
WHERE rating = 10;
Error Code: 1054. Unknown column 'rating' in 'where clause'
```
Informa um erro de coluna desconhecida, ou seja, ao apagarmos a coluna rating no exercício anterior, não é mais possível selecionar nada relacionado a coluna rating da tabela porque essa coluna deixou de existir.


**Exercício 02**

*a. Explique, com as suas palavras, essa tabela*
Resposta:
Esta tabela foi criada para referenciar a tabela de filmes com a tabela de atores, informando quais atores participaram de quais filmes. É uma tabela 1:N onde varios atores podem ter participado de um filme e um filme pode ter tido a participação de vários atores.

*b. Crie, ao menos, 6 relações nessa tabela*
Resposta:
```
INSERT INTO MovieCast
VALUES 
("001", "001"),
("001", "002"),
("002", "003"),
("002", "004"),
("003", "001"),
("003", "005");
```

*c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
Resposta:
```
INSERT INTO MovieCast
VALUES 
("004", "001");
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147803-victor-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```
Não é possível inserir os dados na tabela pois a restrição de chave estrangeira não foi preenchida corretamente. Estamos tentando relacionar um ator com um filme inexistente, pois não existe o id de valor "004".


*d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
Resposta:
```
DELETE FROM Actor
WHERE name = "TONY RAMOS";
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147803-victor-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Como as tabela de Actor e Movies estão referenciadas entre si pela tabela MovieCast, torna-se impossível apagar os dados que está vinculado a esta tabela, apontando um erro de restrição de chave estrangeira não sendo possível excluir ou atualizar uma linha pai.



**Exercício 03**
*a. Explique, com suas palavras, a query acima. O que é o operador `ON`?*
Resposta:
```
SELECT * FROM Movies
INNER JOIN Rating
ON Movies.id = Rating.id;
```
O operador ON nos permite colocar uma condição onde só é possível retornar os dados que possuem uma correlação entre a tabela de Movies e a tabela de Rating, ou seja, retorna os dados da tabela Movies e Rating relacionando a condição passada no ON, neste caso, a relação entre o id do filme e o id das avaliações em comum.


*b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
```
SELECT Movies.title, Movies.id, Rating.rate FROM Movies
JOIN Rating
ON Movies.id = Rating.id;
```

-- Dica de abreviação:
```
SELECT m.title as movie_title, m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
```












