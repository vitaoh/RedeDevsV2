# RedeDevs V2 🚀

Uma rede social moderna e elegante focada em desenvolvedores, construída com tecnologias web puras. Conecte-se, compartilhe conhecimento e colabore com outros profissionais de tecnologia!

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## 🌟 Características Principais

### 💼 **Rede Social para Desenvolvedores**
- **Interface tipo LinkedIn**: Design profissional e intuitivo
- **Sistema de Posts**: Compartilhe conhecimentos, projetos e experiências
- **Interações Sociais**: Curtidas, comentários e compartilhamentos
- **Perfis Personalizados**: Gerencie suas informações profissionais

### 🎨 **Design Moderno e Responsivo**
- **Tema Escuro Elegante**: Interface com gradientes azul/roxo
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições CSS fluidas e envolventes
- **Interface Intuitiva**: UX otimizada para desenvolvedores

### 🔐 **Sistema Completo de Autenticação**
- **Login/Cadastro**: Sistema seguro de autenticação de usuários
- **Gestão de Perfil**: Edição completa de informações pessoais
- **Sistema de Sessão**: Controle de acesso baseado em localStorage

### 📱 **Funcionalidades Sociais Avançadas**
- **Feed de Notícias**: Timeline personalizada com posts recentes
- **Sistema de Curtidas**: Interação social completa
- **Comentários em Tempo Real**: Discussões engajantes
- **Sistema de Busca**: Encontre conteúdo facilmente
- **Histórico de Atividades**: Acompanhe suas interações

## 🚀 Como Executar

### Pré-requisitos
- **Navegador Web Moderno** (Chrome, Firefox, Safari, Edge)
- **Servidor Local** (opcional, mas recomendado)

### Opção 1: Execução Direta
1. Clone o repositório:
```bash
git clone https://github.com/vitaoh/RedeDevsV2.git
```

2. Navegue até o diretório:
```bash
cd RedeDevsV2/system/paginas
```

3. Abra `index.html` no navegador

### Opção 2: Servidor Local (Recomendado)
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server

# Usando PHP
php -S localhost:8000
```

### Opção 3: Executar Testes
```bash
cd RedeDevsV2/system
npm install
npm test
```

## 🎮 Como Usar

### 1. **Primeiro Acesso**
- Acesse a página inicial
- Clique em "Criar Conta" para se registrar
- Preencha suas informações de desenvolvedor

### 2. **Fazendo Login**
- Use suas credenciais para entrar na plataforma
- Acesso automático ao feed principal

### 3. **Criando Posts**
- Clique no botão "+" para criar nova postagem
- Adicione texto (até 3000 caracteres)
- Faça upload de imagens (JPG, PNG, GIF, BMP)
- Publique e compartilhe com a comunidade

### 4. **Interagindo**
- **Curtir**: Demonstre aprovação por posts
- **Comentar**: Participe das discussões
- **Compartilhar**: Espalhe conteúdo relevante
- **Visualizar**: Acesse posts completos

### 5. **Gerenciando Perfil**
- Acesse "Perfil" no menu
- Edite suas informações pessoais
- Visualize histórico de atividades

## 📁 Estrutura do Projeto

```
RedeDevsV2/
├── info/                    # Documentação do projeto
│   ├── report/             # Relatórios técnicos
│   └── slides/             # Apresentações
│
├── system/                 # Sistema principal
│   ├── paginas/           # Páginas HTML
│   │   ├── index.html     # Feed principal
│   │   ├── login.html     # Página de login
│   │   ├── cadastro.html  # Registro de usuários
│   │   ├── perfil.html    # Perfil do usuário
│   │   ├── noticia.html   # Visualização de posts
│   │   └── sobre.html     # Sobre a plataforma
│   │
│   ├── estilos/           # Folhas de estilo
│   │   └── style.css      # CSS principal
│   │
│   ├── scripts/           # JavaScript
│   │   ├── index.js       # Lógica do feed
│   │   ├── login.js       # Autenticação
│   │   ├── cadastro.js    # Registro
│   │   ├── perfil.js      # Gestão de perfil
│   │   ├── noticia.js     # Visualização de posts
│   │   ├── navbar.js      # Navegação
│   │   └── sobre.js       # Página sobre
│   │
│   ├── tests/             # Testes automatizados
│   ├── node_modules/      # Dependências
│   ├── package.json       # Configuração NPM
│   └── install.txt        # Instruções de instalação
```

## 🔧 Tecnologias e Arquitetura

### **Frontend**
- **HTML5**: Estrutura semântica moderna
- **CSS3**: Styling avançado com Flexbox/Grid
- **JavaScript ES6+**: Lógica interativa e dinâmica
- **Bootstrap**: Framework CSS responsivo
- **FontAwesome**: Biblioteca de ícones

### **Armazenamento**
- **LocalStorage**: Persistência de dados do usuário
- **SessionStorage**: Gerenciamento de sessões
- **FileReader API**: Upload e processamento de imagens

### **Testes**
- **Jest**: Framework de testes JavaScript
- **JSDOM**: Simulação de ambiente DOM
- **Testing Library**: Utilitários de teste

### **Design Patterns Utilizados**
- **MVC Pattern**: Separação de responsabilidades
- **Module Pattern**: Organização de código
- **Observer Pattern**: Sistema de eventos
- **Singleton**: Gerenciamento de estado global

## ⚡ Funcionalidades Técnicas

### **Sistema de Posts**
- **Upload de Imagens**: Suporte a múltiplos formatos
- **Validação de Conteúdo**: Limite de caracteres e tipos
- **Paginação Dinâmica**: Loading eficiente de conteúdo
- **Sistema de Busca**: Filtros em tempo real

### **Interface Responsiva**
- **Mobile-First**: Design otimizado para dispositivos móveis
- **Breakpoints Customizados**: Adaptação perfeita a todas as telas
- **Touch-Friendly**: Gestos otimizados para touch screens

### **Performance**
- **Lazy Loading**: Carregamento otimizado de imagens
- **Code Splitting**: Scripts modulares
- **Minificação**: CSS e JS otimizados
- **Caching**: Estratégias de cache inteligentes

## 🎨 Características Visuais

### **Paleta de Cores**
- **Primária**: `#5e17eb` (Roxo Vibrante)
- **Secundária**: `#3b82f6` (Azul Moderno)
- **Background**: Gradientes escuros sofisticados
- **Texto**: Hierarquia clara com tons de cinza

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Hierarquia**: Sistema tipográfico bem definido
- **Legibilidade**: Contraste otimizado para acessibilidade

### **Animações**
- **Hover Effects**: Feedback visual imediato
- **Transições Suaves**: 0.3s ease para todas as interações
- **Loading States**: Indicadores visuais de progresso
- **Micro-interactions**: Detalhes que fazem a diferença

## 🧪 Testes e Qualidade

### **Cobertura de Testes**
- **Testes Unitários**: Funções individuais
- **Testes de Integração**: Fluxos completos
- **Testes de Interface**: Validação de UI/UX
- **Testes de Validação**: Formulários e entrada de dados

### **Executar Testes**
```bash
# Instalar dependências
npm install --save-dev jest jest-environment-jsdom @testing-library/jest-dom

# Executar todos os testes
npm test

# Executar com coverage
npm test -- --coverage
```

## 🔒 Segurança e Validações

- **Validação de Entrada**: Sanitização de dados do usuário
- **Upload Seguro**: Validação rigorosa de tipos de arquivo
- **XSS Prevention**: Proteção contra scripts maliciosos
- **Data Validation**: Validação client-side robusta

## 🌐 Compatibilidade

### **Navegadores Suportados**
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### **Dispositivos**
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## 🤝 Contribuindo

1. **Fork o projeto**
2. **Crie uma branch**: `git checkout -b feature/MinhaFeature`
3. **Commit suas mudanças**: `git commit -m 'Adiciona MinhaFeature'`
4. **Push para a branch**: `git push origin feature/MinhaFeature`
5. **Abra um Pull Request**

### **Guidelines de Contribuição**
- Siga os padrões de código existentes
- Adicione testes para novas funcionalidades
- Mantenha a documentação atualizada
- Use commits semânticos

## 🐛 Reportar Bugs

Encontrou um problema? Abra uma **issue** com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. atual
- Screenshots (se aplicável)
- Informações do ambiente (navegador, OS)

## 📋 Roadmap Futuro

- [ ] **Sistema de Notificações**: Alertas em tempo real
- [ ] **Chat Privado**: Mensagens diretas entre usuários
- [ ] **Sistema de Tags**: Categorização de posts
- [ ] **API Backend**: Integração com banco de dados
- [ ] **PWA**: Aplicativo web progressivo
- [ ] **Dark/Light Theme**: Toggle de temas
- [ ] **Sistema de Grupos**: Comunidades especializadas

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## 👨‍💻 Autor

**Desenvolvido com ❤️ por [vitaoh](https://github.com/vitaoh)**

---

### 🌟 **Junte-se à comunidade de desenvolvedores mais vibrante da web!**

**RedeDevs V2** - *Conectando mentes, construindo o futuro* 🚀

*Feito com tecnologias web modernas e muito carinho para a comunidade dev* 💜
