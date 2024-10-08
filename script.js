// Função dos botões
const descriptions = {
    btnHtml: "HTML5 é a versão mais recente da linguagem de marcação usada para criar a estrutura de páginas web. Ele introduziu novas funcionalidades como suporte nativo a vídeo, áudio, gráficos com o elemento <canvas>, APIs avançadas e semântica mais clara para melhor acessibilidade e SEO.",
    btnCss: "CSS3 é a última versão da linguagem de estilos usada para definir a aparência de páginas web. Ele traz novas funcionalidades como animações, transições, flexbox, grid layout, e media queries, que permitem criar sites responsivos e visualmente atraentes.",
    btnJs: "JavaScript é uma linguagem de programação voltada para o desenvolvimento web que permite adicionar interatividade às páginas, como atualizações dinâmicas de conteúdo, animações, e validação de formulários. É amplamente usada no desenvolvimento de front-end e back-end (com Node.js).",
    btnNode: "Node.js é uma plataforma baseada no motor JavaScript V8 do Google, usada para construir aplicações server-side. Ele permite a criação de servidores e aplicativos escaláveis usando JavaScript no back-end, sendo muito popular para o desenvolvimento de APIs e aplicações em tempo real.",
    btnVue: "Vue.js é um framework JavaScript progressivo usado para construir interfaces de usuário. É conhecido por sua facilidade de uso, flexibilidade e desempenho, permitindo o desenvolvimento de single-page applications (SPA) e interfaces dinâmicas de maneira eficiente.",
    btnReact: "React é uma biblioteca JavaScript desenvolvida pelo Facebook para a construção de interfaces de usuário (UI). Ele se destaca pelo conceito de componentes reutilizáveis e pelo uso de um DOM virtual, o que permite renderizações rápidas e eficientes em aplicações web dinâmicas.",
    btnSql: "SQL (Structured Query Language) é uma linguagem padrão para gerenciar e manipular bancos de dados relacionais. Ela permite realizar consultas, inserir, atualizar e excluir dados, além de criar e gerenciar a estrutura do banco de dados.",
    btnSpring: "Java é uma linguagem de programação amplamente utilizada para o desenvolvimento de aplicações empresariais, aplicações web e dispositivos móveis. É conhecida por sua portabilidade, robustez e grande ecossistema de bibliotecas e frameworks.",
    btnMicroservices: "Microserviços é uma arquitetura de software que divide uma aplicação em pequenos serviços independentes, cada um executando uma função específica. Esses serviços podem ser desenvolvidos, implantados e escalados de maneira independente, permitindo uma maior flexibilidade e eficiência no desenvolvimento e manutenção de sistemas complexos."
  };

  let typingInterval;


  function typeText(element, text, speed) {
    let i = 0;
    element.textContent = ""; 


    if (typingInterval) {
      clearInterval(typingInterval);
    }

    typingInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
  }


  function setupTyping(buttonId, textId) {
    document.getElementById(buttonId).addEventListener('click', function() {
      const typedTextElement = document.getElementById(textId);
      const textToType = descriptions[buttonId];
      typeText(typedTextElement, textToType, 20); // Velocidade de digitação de 50ms
    });
  }

  setupTyping('btnHtml', 'typedText');
  setupTyping('btnCss', 'typedText');
  setupTyping('btnJs', 'typedText');
  setupTyping('btnNode', 'typedText');
  setupTyping('btnVue', 'typedText');
  setupTyping('btnReact', 'typedText');
  setupTyping('btnSql', 'typedText');
  setupTyping('btnSpring', 'typedText');
  setupTyping('btnMicroservices', 'typedText');


// Função das animações
  const myObserver = new IntersectionObserver ((entries) =>{
    entries.forEach( (entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })

  })

  const sections = document.querySelectorAll('.tSection')

  sections.forEach((Element) => myObserver.observe(Element))

// Função clipboard
const email = "rabelo.mateusdev@gmail.com"; // Seu email aqui

    document.getElementById('copyEmailBtn').addEventListener('click', function() {
      navigator.clipboard.writeText(email).then(function() {
        alert('Email copiado: ' + email);
      }).catch(function(err) {
        alert('Falha ao copiar: ', err);
      });
    });