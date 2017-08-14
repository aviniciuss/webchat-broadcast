# WebChat broadcast server

## Apresentação

Servidor desenvolvido para compor um produto de atendimento para websites via chat. 
   
O servidor fica conectado em uma instância do [Redis](https://redis.io/) ouvindo canais especificos atráves de Pub/Sub 
para fazer a comunicação via websockets entre os sistemas (Web app, Desktop app, Embedded app).

## Utilizando

Antes de rodar o projeto certifique-se que tenha uma intância do [Redis](https://redis.io/) rodando na porta padrão.

```
$ git clone https://github.com/avinisilva/webchat-broadcast.git
$ npm install
$ npm start
```  

