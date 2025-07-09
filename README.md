# 🔴🟡🔵 Pokédex Interativa

Uma Pokédex interativa criada com **Node.js**, **Vue.js**, **Quasar Framework** e **Vuex**, com integração completa com a [PokéAPI](https://pokeapi.co/). Simule capturas de pokémons com chances reais, visualização detalhada e persistência local dos dados capturados.

---

## ✨ Funcionalidades

### 📥 Captura de Pokémons
- Ao clicar em **"Novos Pokémons"**, a aplicação realiza **6 requisições aleatórias** à PokéAPI (IDs de 1 a 150).
- Os cards dos pokémons aparecem com **cores dinâmicas baseadas em seus tipos** (fogo, água, planta, etc).
- Cada pokémon tem uma **dificuldade aleatória entre 13 e 17**.
- O jogador possui **de 1 a 5 chances** para capturar o pokémon, com jogadas de dados de **1 a 20 (d20)**.
- Caso o total das jogadas supere ou iguale a dificuldade, o pokémon é capturado.
- Se não for capturado, a mensagem **"O pokémon fugiu!"** é exibida.

### 📁 Visualização da Pokédex
- Os pokémons capturados ficam **salvos no `localStorage`**, garantindo persistência entre sessões.
- A página **"Minha Pokédex"** permite visualizar todos os pokémons capturados, com:
  - Nome
  - Tipo
  - Imagem (obtida pela URL da PokéAPI com o ID do pokémon)

---

## 🛠 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** – Backend e utilidades (se usado)
- **[Vue.js](https://vuejs.org/)** – Framework progressivo de JavaScript
- **[Quasar Framework](https://quasar.dev/)** – Interface rica com suporte SPA/PWA
- **[Vuex](https://vuex.vuejs.org/)** – Gerenciamento de estado
- **[PokéAPI](https://pokeapi.co/)** – Fonte oficial de dados dos pokémons

---

## 📦 Instalação

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/pokedex-quasar.git
cd pokedex-quasar

# Instale as dependências
npm install

# Inicie a aplicação (modo dev)
quasar dev
