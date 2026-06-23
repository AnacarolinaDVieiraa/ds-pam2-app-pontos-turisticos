# 🌎 Projeto Pontos Turísticos do Rio de Janeiro

Este projeto foi desenvolvido em React Native e tem como objetivo apresentar informações sobre pontos turísticos do Rio de Janeiro, exibindo imagens armazenadas em um servidor local utilizando PHP.

---

## 📋 Requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- Android Studio (ou outro emulador Android)
- Laragon, XAMPP ou outro servidor com PHP e MySQL
- Git

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

---

### 2. Instale as dependências

Como a pasta `node_modules` não está no repositório, execute:

```bash
npm install
```

ou

```bash
npm i
```

---

### 3. Configure o servidor local (PHP)

Na pasta do servidor (Laragon, XAMPP, WampServer, etc.):

#### Exemplo

**Laragon**

```
C:\laragon\www\
```

**XAMPP**

```
C:\xampp\htdocs\
```

Crie uma pasta com o nome:

```
api
```

Dentro dela, crie:

```
api
│
├── listar_imagens.php
└── img
```

---

### 4. Adicione as imagens

Dentro da pasta **img**, adicione **6 imagens** de pontos turísticos do Rio de Janeiro.

Exemplo:

```
img
│
├── cristo.jpg
├── pao_de_acucar.jpg
├── copacabana.jpg
├── ipanema.jpg
├── escadaria.jpg
└── maracana.jpg
```

---

### 5. Arquivo PHP

O arquivo deve possuir o nome exatamente igual a:

```
listar_imagens.php
```

Ele será responsável por listar as imagens para o aplicativo.

---

### 6. Execute o projeto

Inicie o Metro:

```bash
npm start
```

ou

```bash
npx react-native start
```

Depois execute:

```bash
npx react-native run-android
```

---

## 🖼️ Personalizando o projeto

É possível utilizar o projeto para qualquer cidade ou tema.

Para isso:

- altere os textos no código;
- substitua as imagens da pasta **img**;
- ajuste os nomes das imagens, se necessário;
- atualize as informações dos pontos turísticos.

---

## 📂 Estrutura necessária no servidor

```
api
│
├── listar_imagens.php
└── img
    ├── imagem1.jpg
    ├── imagem2.jpg
    ├── imagem3.jpg
    ├── imagem4.jpg
    ├── imagem5.jpg
    └── imagem6.jpg
```

---

## ⚠️ Observações

- A pasta `node_modules` não faz parte do repositório.
- Sempre execute `npm install` após clonar o projeto.
- O servidor PHP deve estar em execução (Laragon, XAMPP ou similar).
- Caso utilize um dispositivo físico, altere no código o endereço `localhost` para o IP da máquina que está executando o servidor.

---

## 👩‍💻 Desenvolvido por

Ana Carolina