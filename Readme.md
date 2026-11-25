# 🔐 Tela de Login — Meu Sistema

Uma interface de autenticação moderna, responsiva e acessível, desenvolvida com **HTML5**, **CSS3** e **JavaScript** puro. O projeto conta com um design escuro (*Dark Mode*) elegante, validações no lado do cliente e interatividade dinâmica.

---

## ✨ Funcionalidades

- **Design Moderno e Responsivo:** Layout centralizado em formato de cartão (*card*), com gradientes suaves e adaptação para dispositivos móveis (`@media`).
- **Alternância de Visibilidade de Senha:** Botão interativo ("Mostrar" / "Ocultar") que permite ao usuário visualizar a senha digitada.
- **Validação de Formulário:**
  - Verifica se todos os campos obrigatórios foram preenchidos.
  - Exige que a senha tenha no mínimo **6 caracteres**.
  - Exibe mensagens dinâmicas de erro ou sucesso diretamente na interface.
- **Recuperação de Senha:** Feedback interativo ao clicar em *"Esqueceu a senha?"*.
- **Acessibilidade:** Suporte a navegação por teclado (`:focus-visible`) e respeito às preferências de movimento reduzido do sistema (`prefers-reduced-motion`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do formulário e atributos de acessibilidade (`autocomplete`, `required`).
- **CSS3:** Estilização customizada com Flexbox, variáveis visuais, efeitos de foco, sombras e design responsivo.
- **JavaScript (Vanilla):** Manipulação do DOM, eventos de clique/envio e validações de entrada.

---

## 📁 Estrutura do Projeto

```text
📦 meu-sistema-login
 ┣ 📜 index.html    # Estrutura principal da página de login
 ┣ 📜 style.css     # Estilos, layout responsivo e tema escuro
 ┣ 📜 loguin.js     # Lógica de validação e interatividade
 ┗ 📜 README.md     # Documentação do projeto
```

> ⚠️ **Nota Importante:** No arquivo `index.html`, a tag `<script>` está referenciando `script.js`, enquanto o arquivo enviado se chama `loguin.js`. Para que as validações e o botão de mostrar senha funcionem corretamente, certifique-se de renomear o arquivo para `script.js` ou atualizar a tag no HTML para:
> ```html
> <script src="loguin.js" defer></script>
> ```

---

## 🚀 Como Executar o Projeto

Como este é um projeto front-end estático, não há necessidade de instalar dependências ou configurar servidores complexos:

1. **Clone ou baixe** os arquivos deste repositório para uma pasta no seu computador.
2. Certifique-se de que `index.html`, `style.css` e o arquivo `.js` estejam na **mesma pasta**.
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no seu navegador padrão (Chrome, Edge, Firefox, etc.).

---

## 🔮 Próximos Passos (Melhorias Futuras)

- [ ] Integrar o formulário com uma API / Back-end real para autenticação de usuários.
- [ ] Implementar a funcionalidade real de *"Manter conectado"* utilizando `localStorage` ou *Cookies*.
- [ ] Criar a tela/modal de recuperação de senha e de cadastro de novos usuários.

---

Desenvolvido para fins de estudo e portfólio. 💻