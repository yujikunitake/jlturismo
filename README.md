# <!-- NOME DO PROJETO -->

<!-- Uma linha: o que este app faz. -->

> **Resumo:** <!-- ex.: App mobile de turismo para consultar pacotes e falar no WhatsApp. -->

---

## Sobre

<!-- Descreva o propósito, público-alvo e o que você quer entregar na versão atual. -->

- **Objetivo:** <!-- ... -->
- **Público:** <!-- ... -->
- **Status:** <!-- ex.: em desenvolvimento / MVP / produção -->

---

## Stack

<!-- Ajuste conforme o projeto evoluir. -->

| Tecnologia | Versão (opcional) | Uso |
|------------|---------------------|-----|
| Expo | <!-- ex.: SDK 54 --> | <!-- ... --> |
| React Native | <!-- ... --> | <!-- ... --> |
| Node.js | <!-- ... --> | <!-- ... --> |

<!-- Outras libs importantes: -->

- <!-- ex.: react-navigation, etc. -->

---

## Pré-requisitos

<!-- O que precisa estar instalado na máquina. -->

- [ ] Node.js (<!-- ex.: LTS 20.x ou 22.x -->)
- [ ] npm ou yarn ou pnpm
- [ ] [Expo Go](https://expo.dev/go) no celular (para desenvolvimento)
- [ ] <!-- ex.: Xcode, Android Studio, conta Apple, etc. -->

---

## Como rodar (desenvolvimento)

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o bundler Expo (com cache limpo, se der problema)
npx expo start --clear
```

<!-- Passos extras no celular: -->

1. Abrir o **Expo Go** e escanear o QR code.
2. <!-- ... -->

---

## Scripts (`package.json`)

| Comando | Descrição |
|---------|-----------|
| `npm start` | <!-- Inicia o Expo / Metro --> |
| `npm run android` | <!-- ... --> |
| `npm run ios` | <!-- ... --> |
| `npm run lint` | <!-- ... --> |

---

## Estrutura de pastas (rascunho)

<!-- Atualize quando a organização mudar. -->

```
jlturismo/
├── App.js                 # entrada do Expo
├── app.json               # configuração do app (nome, bundle id, etc.)
├── babel.config.cjs
├── src/
│   ├── App.jsx
│   ├── pages/
│   └── components/
└── ...
```

---

## Variáveis de ambiente

<!-- Se passar a usar .env, documente aqui. -->

| Variável | Obrigatória? | Descrição |
|----------|--------------|-----------|
| `<!-- EXEMPLO_API_URL -->` | <!-- sim/não --> | <!-- ... --> |

<!-- Não commitar segredos. Use .env e liste só os nomes das variáveis. -->

---

## Build / publicação

<!-- Preencha quando for publicar na loja ou usar EAS. -->

- **Conta Expo / EAS:** <!-- link ou “não aplicável” -->
- **Build iOS:** <!-- comandos ou link da doc -->
- **Build Android:** <!-- ... -->

---

## Licença

<!-- escolha uma: MIT, privado, etc. -->

- **Licença:** <!-- ... -->
- **Autor:** <!-- seu nome ou equipe -->

---

## Contato / links

- **Repositório:** <!-- URL -->
- **Email / suporte:** <!-- ... -->

---

## Notas rápidas (para você)

<!-- Lembretes pessoais: decisões, débitos técnicos, próximos passos. -->

- [ ] <!-- ... -->
- [ ] <!-- ... -->
