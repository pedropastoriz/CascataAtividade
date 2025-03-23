# CascataAtividade

Este projeto consiste na construção de um backend monolítico simples, desenvolvido em Node.js utilizando o framework Express. O sistema serve três páginas: uma calculadora convencional, uma ferramenta de análise numérica chamada "ele-é", que oferece informações de um número fornecido pelo usuário, e uma página inicial que permite a navegação entre as duas funcionalidades principais.

O projeto tem como objetivo a organização do código de forma clara, modular e estruturada, preservando a simplicidade da aplicação. A proposta serve como base para o desenvolvimento de habilidades fundamentais em backend.

A estrutura do projeto está organizada da seguinte maneira: um arquivo principal (app.js) é responsável por iniciar o servidor Express. Os arquivos estáticos, como páginas HTML, scripts JavaScript e folhas de estilo, estão localizados dentro da pasta public. A navegação é feita através de rotas básicas, e todo o conteúdo é servido diretamente do backend.

Na página inicial, o usuário encontra dois botões que direcionam para as páginas específicas da calculadora ou da ferramenta "ele-é". A calculadora realiza operações matemáticas básicas entre dois números fornecidos pelo usuário: adição, subtração, multiplicação e divisão. Os resultados são arredondados para no máximo duas casas decimais, com uma lógica específica: valores terminando em até .005 são mantidos, enquanto valores a partir de .006 são arredondados para cima.

A página "ele-é" permite que o usuário insira um número, que pode ser inteiro ou decimal, positivo, negativo ou neutro. O sistema analisa e retorna características desse número, indicando se ele é par ou ímpar, inteiro ou decimal e sua natureza (positiva, negativa ou nula). Futuramente, está prevista a implementação da verificação para determinar se o número é primo ou composto.

Atualmente, o sistema não utiliza banco de dados. As tecnologias empregadas incluem Node.js, Express.js e JavaScript no lado do cliente para interação básica. Os arquivos HTML e scripts são servidos de forma estática, com lógica executada diretamente no navegador.

O projeto foi idealizado e está em desenvolvido pelos alunos da turma de alunos do professor Luiz Felipe Zanin Garcia, de tecnologia, do turno da manhã da Universidade São Judas Tadeu, unidade Avenida Paulista.