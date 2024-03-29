/*
Configurando a função scheduleJob
Fala pessoal!

Na próxima aula temos um código para executar tarefas agendadas utilizando a função scheduleJob do módulo schedule do Node. Essa função recebe como parâmetro uma string de configuração no formato 'segundo minuto hora diaDoMês mês diaDaSemana', que indica quando uma função será executada.

Na aula, essa string seta a execução do código para um exemplo específico envolvendo o dia e a hora em que a aula foi gravada, que é '/5 * 12 * * 2', o que significa que a função será executada de 5 em 5 segundos, porém apenas durante a hora 12 de uma terça-feira, e se você não estiver testando este exemplo em algum momento em que a hora é 12 em uma terça feira, o código não funcionará.

Para resolver esse problema, basta mudar a string de configuração. Você pode optar por personalizá-la de acordo com o dia e hora que você está realizando o exercício, ou utilizar a string '/5 * * * * *', que simplesmente executará o código de 5 em 5 segundos independente de minuto, hora, dia do mês, mês e dia da semana em que você está testando o algoritmo.

Bons estudos!
*/