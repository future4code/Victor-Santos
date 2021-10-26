**Exercício 1**

*a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*
Resposta:
O comando VARCHAR(255) contido no id e name se refere que os estes dados receberão strings/caracteres que não podem passar de 255 caracteres.
FLOAT contido em salary significa que se trata de um numero real, ou seja, pode haver numeros depois do ponto. Ex: 1500.50;
DATE em birth_date significa que date deve receber uma data como dado de armazenamento.
VARCHAR(6) em gender siginifica que ele receberá uma string de no máximo 6 caracteres como dado armazenado.
PRIMARY KEY, é o comando utilizado para informar uma chave primária para cada ator da minha tabela. Geralmente ele é utilizado para definir os id's nas tabelas.
NOT NULL é um comando utilizado para informar que o dado solicitado não pode ser NULL, caso contrário, nossa tabela não aceita esse tipo de comando e não é possível criar uma linha contendo os dados do ator.

*b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
Resposta:
O Comando SHOW DATABASES mostra os bancos de dados presentes no sistema: information_schema lovelace-2147803-victor-santos
Já o comando SHOW TABLES mostra as tabelas presentes naquele banco de dados atual, ou seja, as tabelas presentes no banco de dados lovelace-2147803-victor-santos

*c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
Resposta:
O comando DESCRIBE Actor mostra a tabela atores e quais são os tipos de dados presentes nela.


**Exercício 2**

*a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*
INSERT INTO Actor (id, name, salary, birth_date, gender)
Resposta:
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "feminino"
);


*b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
Resposta:
Gera um erro pois informa que não podemos ter o mesmo valor de PRIMARY KEY, ou seja, o id para mais de um ator na tabela. O erro informa que a chave id esta duplicada impedindo a inserção do terceiro ator na tabela de atores.

Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta

c. Clique aqui
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
Resposta: 
Informa que há um erro entre a contagem de colunas existente e valores passados para ela, no caso, temos 3 colunas existente e preenchemos 5 colunas.

d. Clique aqui
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
Resposta:
Informa um erro onde o campo name não tem um valor padrão, ou seja, ele deve constar na tabela, mas não esta definido e preenchido o seu valor.

e. Clique aqui
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
Informa o erro onde o valor da data está incorreto, ou seja, a data deve estar dentro de perenteses "1979-03-26".

**Exercício 03**
a. Escreva uma query que retorne todas as informações das atrizes
Resposta:
SELECT * FROM Actor
WHERE gender="female";

b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos
Resposta:
SELECT salary FROM Actor
WHERE name="Tony Ramos";

c. Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
Resposta:
SELECT * FROM Actor
WHERE gender="invalid";
Não retorna nenhuma linha contendo os dados de atores pois não há nenhum ator com o dado gender igual a inavalid.

d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
Resposta:
SELECT id, name, salary FROM Actor
WHERE salary<=500000

e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
SELECT id, nome from Actor WHERE id = "002"
Resposta:
Informa um erro onde a coluna nome não existe para ser retornada.

**Exercício 04**
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
a. Explique com as suas palavras a query acima
Resposta:
Esta query faz uma comparação onde ela quer que retorne uma tabela com todos os dados dos atores cujo o name comece com a letra A ou com a letra J e o salário seja maior de 300000 reais.

b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
Resposta:
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 300000

c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.
Resposta:
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "g"

d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%g%") AND (salary BETWEEN 350000 AND 900000)


**Exercício 05**

a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.
Resposta:
O tipo TEXT em SQL possibilita a inserção de dados do tipo texto, ou seja, funciona parecido com VARCHAR(n) porém, permite que os textos inseridos sejam maiores.
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

Crie 4 filmes com as seguintes informações:
b. Clique aqui
Resposta:
INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
	"001",
    "Se eu fosse você",
    "Claudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    "7"
);

c. Clique aqui
Resposta:
INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10    
);

d. Clique Aqui
Resposta:
INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

e. Clique aqui
Pesquise algum filme brasileiro e crie ele na tabela
Resposta:
INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
	"004",
    "O Auto da Compadecida",
    "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
    "2000-09-10",
    9
);


**Exercício 06**
Escreva uma query que:
a. Retorne o id, título e avaliação a partir de um id específico;
Resposta:
SELECT id, title, rating FROM Movies
WHERE id = "001";

b. Retorne um filme a partir de um nome específico;
Resposta:
SELECT * FROM Movies
WHERE title="Doce de mãe";

c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
Resposta:
SELECT id, title, synopsis FROM Movies
WHERE rating >= 7;

**Exercício 07**
Escreva uma query que:
a. Retorna um filme cujo título contenha a palavra `vida`
Resposta:
SELECT * FROM Movies
WHERE title LIKE "%vida%"

b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
Resposta:
SELECT * FROM Movies
WHERE title OR synopsis LIKE "%vida%"

c. Procure por todos os filmes que já tenham lançado
Resposta:
SELECT * FROM Movies
WHERE release_date < "2021-10-09";

d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.
Resposta:
SELECT * FROM Movies
WHERE (release_date < "2021-10-09") AND (title OR synopsis LIKE "%vida%") AND (rating > 7);
ou
SELECT * FROM Movies
WHERE (release_date < CURDATE()) AND (title OR synopsis LIKE "%vida%") AND (rating > 7);


