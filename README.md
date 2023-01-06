<h1 align="center"> 
	AluraHub 
</h1>

<p align="center">
  <a href="#information_source-o-que-é-o-alurahub">O que é o AluraHub?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: O que é o AluraHub?

O AluraHub é uma aplicação feita em React Native que permite salvar informações. O app consome uma API externa, no caso, a API pública do Github ou uma fake API com json-server.

Esse projeto foi desenvolvido durantes meus estudos na formação de React Native da plataforma da Alura. Especificamente neste curso:
<a href="https://www.alura.com.br/curso-online-react-native-utilizando-web-api">React Native: utilizando Web API</a>

Caso queira acessar o projeto diretamente do repositório da Alura, <a href="https://github.com/alura-cursos/react-native-ficando-online/tree/aula4">clique aqui.</a>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:
- [React Native][rn]
- [Expo][expo]

## :information_source: Como usar

No terminal, digite os comandos a seguir:

### Baixar e instalar o projeto

```bash
# Vá para o repositório e instale as dependências
$ npm install
```

### Edite o arquivo api.js

```bash
# Em src/services/api.js substitua a baseURL pelo ip da sua máquina
para acessar com o celular através do App do Expo
baseURL: "http://192.168.15.43:3000"
```

### Executar o Mobile

```bash
# Execute em outro terminal (dentro da pasta AluraHub)
$ expo start
```

### Executar a Web API

```bash
# Execute em outro terminal (dentro da pasta AluraCommerce)
# Lembre-se de alterar o endereco ip (192.168.15.43) para o do seu computador!!
$ json-server --watch --host 192.168.15.43 db.json
```


Instrutor do curso: [André Oliveira Cunha](https://www.linkedin.com/in/andr%C3%A9-oliveira-cunha-b26b3a156/). 

[nodejs]: https://nodejs.org/
[expo]: https://docs.expo.dev/
[rn]: https://facebook.github.io/react-native/
