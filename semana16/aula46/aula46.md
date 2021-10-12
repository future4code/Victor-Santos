**Aula 46 - Exercícios de Aprofundamento SQL**

**Exercício 01**

Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

a. ALTER TABLE Actor DROP COLUMN salary;
Resposta:
Esta querie apaga a coluna salário da tabela de atores.

b. ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Resposta:
Esta querie altera o nome da coluna gender para sex, passando a restrição de tipo varchar(6) onde tudo que for armazenado nesta coluna deve ser uma string e possuir no máximo 6 caracteres.
CHANGE = mudar, trocar.

c. ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Resposta:
Esta querie altera a coluna gender na tabela Actor. Ela mantém o mesmo nome da coluna que é gender e informa como restrição de tipo varchar(255), ou seja, todos os dados armazenados nesta coluna devem ser do tipo string com o máximo de 255 caracteres.

d. Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
Resposta:
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);


**Exercicio 02**

a. a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
Resposta:
UPDATE Actor 
SET name = "Juliana Paes", birth_date = "1975-01-10"
WHERE id = "003";

b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
Resposta: 
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

c. Escreva uma query que atualize todas as informações do ator com o id 005
Resposta:
UPDATE Actor
SET name = "Moacyr Franco", salary = 250000, birth_date = "1935-10-06", gender = "male"
WHERE id = 005;

d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 

UPDATE Actor
SET name = "Selton Melo"
WHERE id = 007;
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Resposta:
Nenhuma linha foi afetada, ou seja, não é possível atualizar uma linha de um item que não existe, como é o caso do id = 007.

**Exercício 03**
a. Escreva uma query que apague a atriz com o nome Fernanda Montenegro
Resposta:
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
Resposta:
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;


**Exercício 04**
a. Escreva uma query que pegue o maior salário de todos os atores e atrizes
Resposta:
SELECT name, MAX(salary) FROM Actor;

b. Escreva uma query que pegue o menor salário das atrizes
Resposta:
SELECT MIN(salary) from Actor
WHERE gender = "female";

c. Escreva uma query que pegue a quantidade de atrizes
Resposta:
SELECT COUNT(*) FROM Actor
WHERE gender = "female";

d. Escreva uma query que pegue a soma de todos os salários
Resposta:
SELECT SUM(salary) from Actor;


**Exercício 05**
a. Releia a última query. Teste-a. Explique o resultado com as suas palavras
SELECT COUNT(*) gender FROM ACTOR
GROUP BY gender
Resposta: Esta querie retorna a quantidade maxima de atores em relação aos seus generos. No caso, 2 female e 3 male.

b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
Resposta:
SELECT id, name FROM Actor
ORDER BY name ASC;

c. Faça uma query que retorne todos os atores ordenados pelo salário
Resposta:
SELECT * FROM Actor
ORDER BY salary ASC;

d. Faça uma query que retorne os atores com os três maiores salarios
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e. Faça uma query que retorne a média de salário por gênero
Resposta:
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

**Exercício 06**
a. Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema.
ALTER TABLE Movies
ADD playing_limit_date DATE;

b. Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
ALTER TABLE Movies
CHANGE rating rating FLOAT NOT NULL;

c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
UPDATE Movies
SET playing_limit_date = "2021-10-31"
WHERE id = 001;

UPDATE Movies
SET playing_limit_date = "2021-10-01"
WHERE id = 002;

d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
DELETE FROM Movies
WHERE id = "004";

UPDATE Movies
SET sinopse = "Nova Sinopse"
WHERE id = 004;
Error Code: 1054. Unknown column 'sinopse' in 'field list'
Resposta:
Informa que não econtraram a coluna sinopse nesse campo de lista que é do id = 004, ou seja, não é possível realizar a alteração de um dado inexistente.

**Exercício 07**
Agora para treinar as funções novamente, faça uma query para responder as perguntas abaixo:
a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?
SELECT COUNT(*) FROM Movies
WHERE rating > 7.5;
Existem dois filmes em cartaz que possuem avaliação maior do que 7.5.

b. Qual a média das avaliações dos filmes?
SELECT AVG(rating) FROM Movies;
A média das avaliações dos filmes é 8.33.

c. Qual a quantidade de filmes em cartaz?
SELECT COUNT(*) FROM Movies
WHERE playing_limit_date < "2021-10-12";
A quantidade de filmez em cartaz é igual a 1.

d. Qual a quantidade de filmes que ainda irão lançar?
SELECT COUNT(*) FROM Movies
WHERE release_date > CURDATE();
A quantidade de filmes que ainda irão lançar é zero.

e. Qual a maior nota dos filmes?
SELECT MAX(rating) FROM Movies;
A maior nota dos filmes é 10.

f. Qual a menor nota dos filmes?
SELECT MIN(rating) FROM Movies;
A menor nota dos filmes é 7.

**Exercício 08**
Escreva uma query que:
a. Retorne todos os filmes em ordem alfabética
SELECT * FROM Movies
ORDER BY title ASC;

b. Retorne os 5 primerios filmes em ordem descrente alfabética
SELECT * FROM Movies
ORDER BY title DESC
LIMIT 5;

c. Retorne os 3 filmes mais recentes em cartaz
SELECT * FROM Movies
WHERE playing_limit_date >= CURDATE()
ORDER BY playing_limit_date DESC 
LIMIT 3;

d. Retorne os 3 filmes melhor avalidos
SELECT * FROM Movies
ORDER BY rating DESC
LIMIT 3;






