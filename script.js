/**
 * PROJETO BOTUCATU - "AMPLIANDO POLÍTICAS, CULTURAS E PRÁTICAS INCLUSIVAS"
 * Convênio UNESP (Faculdade de Ciências - Bauru) e Prefeitura de Botucatu
 * Lógica Interativa & Dados das 16 Frentes
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. DADOS OFICIAIS DAS 16 AÇÕES DO ROTEIRO
  // ==========================================
  const actionsData = {
    'equipe': {
      title: 'Equipe do Convênio',
      tag: 'Gestão & Parceria',
      icon: 'assets/icons/equipe-icone.png',
      iconBg: '#fce7ee',
      summary: 'Estrutura humana e institucional que articula a UNESP, Secretaria Municipal de Educação e as unidades escolares.',
      content: {
        objetivo: 'Integrar docentes pesquisadores, pós-graduandos, estudantes de graduação, gestores da Secretaria e profissionais da rede para a efetivação das políticas inclusivas.',
        metodologia: 'Reuniões sistemáticas de alinhamento, comissões de trabalho temáticas, supervisão semanal dos monitores e reuniões com a Secretaria Municipal de Educação.',
        publico: 'Docentes da UNESP, equipe da Secretaria Municipal de Educação, coordenadores de projetos e monitores de graduação.',
        destaques: [
          'Coordenação Geral: Profa. Dra. Vera Lucia Messias Fialho Capellini (UNESP - Bauru)',
          'Formadores e pesquisadores com mini views e links no portal',
          'Acesso completo aos materiais da equipe no Google Drive'
        ]
      }
    },
    'formacoes': {
      title: 'Formação Continuada',
      tag: 'Desenvolvimento Profissional',
      icon: 'assets/icons/formacoes-icone.png',
      iconBg: '#eaf1e7',
      summary: 'As formações chegam às escolas para aproximar o conhecimento das situações vivenciadas no cotidiano, estabelecendo espaço de reflexão, estudo e construção coletiva.',
      content: {
        objetivo: 'Capacitar os profissionais da rede a partir de temas levantados na análise das respostas do formulário de necessidades formativas respondido em setembro de 2025.',
        metodologia: 'Percursos formativos para Gestores, Coordenadores, Psicopedagogos, Equipe Multiprofissional, Professores do AEE, Escolas Especializadas e Pessoal de Apoio.',
        publico: 'Professores da Educação Infantil e Ensino Fundamental, professores de AEE, gestores e equipe multiprofissional.',
        destaques: [
          'Educação Infantil (5 Eixos): Inclusão e AEE; Desenvolvimento Infantil; Práticas Pedagógicas; Documentação e Avaliação; Trabalho Colaborativo.',
          'Ensino Fundamental (7 Eixos): Marcos Legais; Práticas Pedagógicas & Currículo Flexível; TEA e AH/SD; Manejo de Comportamento; Ensino Colaborativo; Tecnologia Assistiva; Articulação Escola-Família.',
          'Manejo de comportamentos desafiadores e trabalho/ensino colaborativo em serviço.'
        ]
      }
    },
    'gestores': {
      title: 'Formação para Gestores',
      tag: 'Gestão e Inclusão',
      icon: 'assets/icons/gestores-icone.png',
      iconBg: '#fff1d7',
      summary: 'As ações com gestores buscam fortalecer a atuação da equipe escolar na construção de uma cultura inclusiva.',
      content: {
        objetivo: 'Abordar os desafios encontrados pelas escolas e organizar estratégias para favorecer a participação e a aprendizagem dos estudantes.',
        metodologia: 'Encontros de alinhamento com diretores e equipes gestoras, escuta ativa e planejamento de intervenções.',
        publico: 'Diretores, vice-diretores e equipes gestoras da rede municipal de ensino.',
        destaques: [
          'Construção de culturas inclusivas e liderança escolar',
          'Organização de estratégias de participação e permanência',
          'Articulação direta com a Secretaria de Educação e a UNESP'
        ]
      }
    },
    'coordenadores': {
      title: 'Formação para Coordenadores',
      tag: 'Coordenação Pedagógica',
      icon: 'assets/icons/coordenadores-icone.png',
      iconBg: '#e3f1f6',
      summary: 'A coordenação pedagógica é fundamental para articular planejamento, professores, AEE, gestão e demais profissionais.',
      content: {
        objetivo: 'Fortalecer a articulação pedagógica e o trabalho e/ou ensino colaborativo no cotidiano da escola.',
        metodologia: 'Encontros formativos, mediação pedagógica, análise de práticas e planejamento articulado entre docentes.',
        publico: 'Coordenadores pedagógicos da Educação Infantil e do Ensino Fundamental.',
        destaques: [
          'Articulação entre planejamento, regentes e AEE',
          'Fortalecimento do ensino colaborativo (co-docência)',
          'Acompanhamento e mediação dos processos de aprendizagem'
        ]
      }
    },
    'psicopedagogos': {
      title: 'Formação para Psicopedagogos',
      tag: 'Avaliar para Compreender',
      icon: 'assets/icons/psicopedagogo-icone.png',
      iconBg: '#fce7ee',
      summary: 'A formação das psicopedagogas aprofunda os conhecimentos sobre neurodesenvolvimento, aprendizagem e avaliação psicopedagógica baseada em evidências.',
      content: {
        objetivo: 'Elaborar um Protocolo Institucional de Avaliação Psicopedagógica para a rede municipal de Botucatu.',
        metodologia: 'Estudos aprofundados sobre neurodesenvolvimento, instrumentos de triagem e estratégias de intervenção.',
        publico: 'Psicopedagogos da rede municipal e equipes técnicas de suporte à aprendizagem.',
        destaques: [
          'Neurodesenvolvimento e aprendizagem baseada em evidências',
          'Elaboração do Protocolo Institucional de Avaliação Psicopedagógica',
          'Intervenções e orientações personalizadas para o contexto escolar'
        ]
      }
    },
    'equipe-multi': {
      title: 'Formação para Equipe Multiprofissional',
      tag: 'Trabalho Integrado',
      icon: 'assets/icons/equipe-multi-icone.png',
      iconBg: '#e3f1f6',
      summary: 'A Educação Inclusiva exige diferentes olhares e conhecimentos para apoiar a análise de demandas e construção de estratégias.',
      content: {
        objetivo: 'Articular profissionais da educação e da área psicossocial para uma atuação sistêmica e colaborativa.',
        metodologia: 'Reuniões interdisciplinares, estudos de caso conjuntos e alinhamento com neuropediatria e psicologia.',
        publico: 'Psicólogos escolares, psicopedagogos, terapeutas e profissionais da área psicossocial.',
        destaques: [
          'Olhares complementares para demandas complexas da rede',
          'Carga horária estendida de psicologia e apoio neuropediátrico',
          'Atendimento integrado no SEP e nas escolas'
        ]
      }
    },
    'aee': {
      title: 'Formação para Professores do AEE',
      tag: 'Fortalecendo o AEE',
      icon: 'assets/icons/aee-icone.png',
      iconBg: '#fce7ee',
      summary: 'Aborda planejamento, trabalho/ensino colaborativo, avaliação, acessibilidade e recursos pedagógicos e tecnológicos.',
      content: {
        objetivo: 'Qualificar as práticas inclusivas no Atendimento Educacional Especializado e fortalecer o trabalho colaborativo.',
        metodologia: 'Oficinas sobre Desenho Universal para a Aprendizagem (DUA), Tecnologia Assistiva e recursos de acessibilidade.',
        publico: 'Professores de Atendimento Educacional Especializado (Salas de Recursos Multifuncionais).',
        destaques: [
          'Temas: DUA, Tecnologia Assistiva, acessibilidade e práticas inclusivas',
          'Produtos em desenvolvimento: Estudo de Caso, PAEE, PEI',
          'Drive institucional do AEE e Ateliê de Documentação Pedagógica'
        ]
      }
    },
    'escolas-especializadas': {
      title: 'Ações nas Escolas & Escolas Especializadas',
      tag: 'Em Construção',
      icon: 'assets/icons/escolas-especializadas-icone.png',
      iconBg: '#fff1d7',
      summary: 'O projeto contempla as escolas municipais e especializadas, considerando suas características, necessidades e desafios.',
      content: {
        objetivo: 'Ação formativa voltada ao levantamento das necessidades das unidades e elaboração de um plano de formação geral.',
        metodologia: 'Escuta atenta, visitas técnicas institucionais e construção de diretrizes de transição e parceria.',
        publico: 'Profissionais de escolas especializadas e unidades de ensino da rede.',
        destaques: [
          'Módulo de ações nas escolas atualmente em construção',
          'Levantamento de demandas das escolas especializadas',
          'Integração e intercâmbio de saberes com a rede regular'
        ]
      }
    },
    'avaliacoes': {
      title: 'Avaliação Biopsicossocial',
      tag: 'Ampliando o Olhar',
      icon: 'assets/icons/avaliacoes-icone.png',
      iconBg: '#eaf1e7',
      summary: 'Ampliando o olhar sobre as necessidades dos estudantes através de avaliações psicológicas como parte do acompanhamento.',
      content: {
        objetivo: 'Subsidiar a compreensão das situações e a definição dos encaminhamentos e intervenções necessárias.',
        metodologia: 'Observações diretas em contexto escolar conduzidas por equipe multidisciplinar da UNESP para os 20 casos prioritários.',
        publico: 'Estudantes com situações desafiadoras mapeadas, equipes escolares e familiares.',
        destaques: [
          'Superação do diagnóstico exclusivamente biomédico',
          'Olhar sobre dimensões pedagógicas, sociais e emocionais',
          'Planilha de acompanhamento da equipe de Psicologia em integração'
        ]
      }
    },
    'pessoal-apoio': {
      title: 'Formação para Pessoal de Apoio',
      tag: 'Apoiar Também é Incluir',
      icon: 'assets/icons/pessoal-apoio-icone.png',
      iconBg: '#e3f1f6',
      summary: 'Auxiliares e cuidadores fazem parte do cotidiano escolar e têm papel importante na participação e autonomia dos estudantes.',
      content: {
        objetivo: 'Contemplar a temática do manejo de comportamentos e os desafios encontrados no cotidiano das escolas.',
        metodologia: 'Encontros práticos e dialógicos sobre acolhimento, postura ética, mediação e manejo de crises.',
        publico: 'Auxiliares de classe, cuidadores e profissionais de apoio à inclusão escolar.',
        destaques: [
          'Manejo de comportamentos desafiadores em contexto escolar',
          'Promoção da autonomia e participação do estudante',
          'Valorização e capacitação contínua da equipe de apoio'
        ]
      }
    },
    'monitores': {
      title: 'Atuação dos Monitores',
      tag: 'Universidade nas Escolas',
      icon: 'assets/icons/monitores-icone.png',
      iconBg: '#fce7ee',
      summary: 'Estudantes de graduação atuam como monitores em unidades escolares, aproximando a universidade do cotidiano da Rede Municipal.',
      content: {
        objetivo: 'Apoiar práticas inclusivas nas escolas por meio de formação, orientação e supervisão contínua pela UNESP.',
        metodologia: 'Atuação direta nas salas de aula com acompanhamento semanal de docentes pesquisadores da universidade.',
        publico: 'Graduandos da UNESP Bauru, professores regentes e turmas escolares de Botucatu.',
        destaques: [
          'O que fazem: Participam de formações e recebem supervisão pedagógica',
          'Apoiam as demandas das escolas e registram vivências',
          'Desenvolvem materiais de apoio e tecnologia assistiva'
        ]
      }
    },
    'familia': {
      title: 'Famílias (Grupos de Escuta)',
      tag: 'Escuta, Acolhimento e Troca',
      icon: 'assets/icons/familia-icone.png',
      iconBg: '#e3f1f6',
      summary: 'Os Grupos de Escuta e Acolhimento oferecem um espaço para familiares compartilharem experiências e fortalecerem redes de apoio.',
      content: {
        objetivo: 'Acolher e orientar familiares, fortalecendo a ponte de colaboração mútua entre a família e a escola.',
        metodologia: 'Encontros conduzidos por psicóloga com apoio de graduanda em Enfermagem.',
        publico: 'Pais, mães e familiares responsáveis de estudantes da rede municipal.',
        destaques: [
          'Principais demandas levantadas: Formação de profissionais e comunicação família-escola',
          'Organização dos profissionais de apoio e inclusão/permanência',
          'Acesso à rede de saúde, serviços especializados e orientação familiar'
        ]
      }
    },
    'nape': {
      title: 'NAPE (Núcleo de Apoio Pedagógico)',
      tag: 'Articulação com a Rede',
      icon: 'assets/icons/nape-icone.png',
      iconBg: '#fff1d7',
      summary: 'O projeto realiza ações em diálogo com o NAPE e diferentes profissionais da Rede Municipal.',
      content: {
        objetivo: 'Identificar demandas conjuntas e construir estratégias articuladas com as políticas públicas do município.',
        metodologia: 'Reuniões sistemáticas de planejamento, alinhamento técnico e acompanhamento de fluxos institucionais.',
        publico: 'Equipe técnica do NAPE Botucatu e Secretaria Municipal de Educação.',
        destaques: [
          'Escuta conjunta para identificação contínua de demandas',
          'Alinhamento de fluxos de avaliação biopsicossocial e encaminhamentos',
          'Sustentabilidade das ações inclusivas na rede municipal'
        ]
      }
    },
    'agenda': {
      title: 'Agenda do Convênio',
      tag: 'Acompanhe as Próximas Ações',
      icon: 'assets/icons/agenda-icone.png',
      iconBg: '#eaf1e7',
      summary: 'Consulte as datas de formações, encontros, atividades nas escolas e demais ações do projeto.',
      content: {
        objetivo: 'Garantir transparência, previsibilidade e ampla participação de todos os segmentos nas ações do projeto.',
        metodologia: 'Calendário de encontros presenciais e online nas escolas, no SEP e na Secretaria de Educação.',
        publico: 'Comunidade escolar, educadores, gestores e monitores do convênio.',
        destaques: [
          'Encontros formativos semanais e quinzenais',
          'Supervisões dos monitores e reuniões com gestores',
          'Atendimentos na Sala Multissensorial no SEP'
        ]
      }
    },
    'arquivos': {
      title: 'Repositório de Arquivos',
      tag: 'Documentação Oficial',
      icon: 'assets/icons/arquivos-icone.png',
      iconBg: '#fce7ee',
      summary: 'Central de consulta e download de formulários, relatórios, termos e cartas oficiais do projeto.',
      content: {
        objetivo: 'Disponibilizar toda a documentação oficial e pedagógica gerada pela parceria UNESP-Botucatu.',
        metodologia: 'Arquivos organizados por categorias para fácil acesso pelos profissionais da rede.',
        publico: 'Equipes escolares, pesquisadores e comunidade.',
        destaques: [
          'Carta Informativa Oficial na íntegra',
          'Termos de Convênio e Plano de Trabalho',
          'Instrumentais e materiais pedagógicos'
        ]
      }
    },
    'producoes': {
      title: 'Publicações & Produções',
      tag: 'Em Construção',
      icon: 'assets/icons/producoes-icone.png',
      iconBg: '#e3f1f6',
      summary: 'Divulgação de cadernos pedagógicos, relatos de experiência, artigos e produções científicas do grupo.',
      content: {
        objetivo: 'Sistematizar e publicar o conhecimento gerado na parceria UNESP-Botucatu.',
        metodologia: 'Publicação de e-books, artigos indexados e materiais didáticos acessíveis.',
        publico: 'Comunidade acadêmica, educadores e redes de ensino.',
        destaques: [
          'Seção de publicações atualmente em construção',
          'Materiais desenvolvidos no âmbito do LaTeDIP e CMDTA',
          'Relatos da experiência prática dos monitores e formadores'
        ]
      }
    }
  };

  // ==========================================
  // 2. CONTROLE DO CARROSSEL DE FOTOS DO TOPO
  // ==========================================
  const photoTrack = document.getElementById('photo-track');
  const photoSlides = document.querySelectorAll('.photo-slide');
  const prevPhotoBtn = document.getElementById('photo-prev');
  const nextPhotoBtn = document.getElementById('photo-next');
  const photoDots = document.querySelectorAll('.carousel-dot');

  let currentPhotoIndex = 0;
  const totalPhotoSlides = photoSlides.length;
  let photoInterval = null;

  function updatePhotoCarousel(index) {
    if (!photoTrack) return;
    currentPhotoIndex = (index + totalPhotoSlides) % totalPhotoSlides;
    photoTrack.style.transform = `translateX(-${currentPhotoIndex * 100}%)`;

    photoDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentPhotoIndex);
    });
  }

  function startPhotoAutoplay() {
    stopPhotoAutoplay();
    photoInterval = setInterval(() => {
      updatePhotoCarousel(currentPhotoIndex + 1);
    }, 5500);
  }

  function stopPhotoAutoplay() {
    if (photoInterval) clearInterval(photoInterval);
  }

  if (prevPhotoBtn && nextPhotoBtn) {
    prevPhotoBtn.addEventListener('click', () => {
      updatePhotoCarousel(currentPhotoIndex - 1);
      startPhotoAutoplay();
    });

    nextPhotoBtn.addEventListener('click', () => {
      updatePhotoCarousel(currentPhotoIndex + 1);
      startPhotoAutoplay();
    });

    photoDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        updatePhotoCarousel(idx);
        startPhotoAutoplay();
      });
    });

    const carouselContainer = document.querySelector('.hero-carousel-container');
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', stopPhotoAutoplay);
      carouselContainer.addEventListener('mouseleave', startPhotoAutoplay);
    }

    startPhotoAutoplay();
  }

  // ==========================================
  // 3. MODAL DETALHADO DAS 16 AÇÕES DO ROTEIRO
  // ==========================================
  const modalBackdrop = document.getElementById('action-modal-backdrop');
  const modalTitle = document.getElementById('modal-action-title');
  const modalTag = document.getElementById('modal-action-tag');
  const modalSummary = document.getElementById('modal-action-summary');
  const modalObjetivo = document.getElementById('modal-action-objetivo');
  const modalMetodologia = document.getElementById('modal-action-metodologia');
  const modalPublico = document.getElementById('modal-action-publico');
  const modalDestaquesList = document.getElementById('modal-action-destaques');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openActionModal(actionKey) {
    const data = actionsData[actionKey];
    if (!data || !modalBackdrop) return;

    modalTitle.textContent = data.title;
    modalTag.textContent = data.tag;
    modalSummary.textContent = data.summary;
    modalObjetivo.textContent = data.content.objetivo;
    modalMetodologia.textContent = data.content.metodologia;
    modalPublico.textContent = data.content.publico;

    modalDestaquesList.innerHTML = '';
    data.content.destaques.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalDestaquesList.appendChild(li);
    });

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeActionModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.action-card').forEach(card => {
    card.addEventListener('click', () => {
      const actionKey = card.getAttribute('data-action-key');
      openActionModal(actionKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeActionModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeActionModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeActionModal();
  });

  // ==========================================
  // 4. FILTROS DE CATEGORIA DAS 16 AÇÕES
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const actionCards = document.querySelectorAll('.action-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      actionCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 5. CARROSSEL DE ATUALIZAÇÕES SEMANAIS
  // ==========================================
  const updatesTrack = document.getElementById('updates-track');
  const prevUpdateBtn = document.getElementById('update-prev-btn');
  const nextUpdateBtn = document.getElementById('update-next-btn');

  if (updatesTrack && prevUpdateBtn && nextUpdateBtn) {
    prevUpdateBtn.addEventListener('click', () => {
      updatesTrack.scrollBy({ left: -updatesTrack.clientWidth * 0.85, behavior: 'smooth' });
    });

    nextUpdateBtn.addEventListener('click', () => {
      updatesTrack.scrollBy({ left: updatesTrack.clientWidth * 0.85, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 6. ABAS DE PRODUÇÕES CIENTÍFICAS & ARQUIVOS
  // ==========================================
  const prodTabButtons = document.querySelectorAll('.prod-tab-btn');
  const prodLists = document.querySelectorAll('.prod-list');

  prodTabButtons.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      prodTabButtons.forEach(b => b.classList.remove('active'));
      tabBtn.classList.add('active');

      const targetCategory = tabBtn.getAttribute('data-prod-tab');

      prodLists.forEach(list => {
        if (list.id === `prod-list-${targetCategory}`) {
          list.style.display = 'flex';
        } else {
          list.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 7. FORMULÁRIO DE SUGESTÕES / ESCUTA ATIVA
  // ==========================================
  const suggestionForm = document.getElementById('suggestion-form');
  const formFeedback = document.getElementById('form-feedback');

  if (suggestionForm && formFeedback) {
    suggestionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(suggestionForm);
      const suggestionObj = {
        name: formData.get('name'),
        email: formData.get('email'),
        role: formData.get('role'),
        message: formData.get('message'),
        date: new Date().toISOString()
      };

      // Salva no LocalStorage para histórico local do usuário
      try {
        const stored = JSON.parse(localStorage.getItem('projeto_botucatu_sugestoes') || '[]');
        stored.push(suggestionObj);
        localStorage.setItem('projeto_botucatu_sugestoes', JSON.stringify(stored));
      } catch (err) {
        console.warn('Erro ao salvar localmente:', err);
      }

      formFeedback.className = 'form-feedback-msg success';
      formFeedback.textContent = `Agradecemos sua contribuição, ${suggestionObj.name}! Sua mensagem foi registrada para análise pela equipe do Convênio UNESP / Prefeitura de Botucatu.`;

      suggestionForm.reset();

      setTimeout(() => {
        formFeedback.className = 'form-feedback-msg';
        formFeedback.textContent = '';
      }, 7000);
    });
  }

  // ==========================================
  // 8. ACESSIBILIDADE (FONTE & CONTRASTE)
  // ==========================================
  const btnContrast = document.getElementById('btn-contrast');
  const btnFontIncrease = document.getElementById('btn-font-increase');
  const btnFontDecrease = document.getElementById('btn-font-decrease');

  let currentFontSize = 16;

  if (btnContrast) {
    btnContrast.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });
  }

  if (btnFontIncrease) {
    btnFontIncrease.addEventListener('click', () => {
      if (currentFontSize < 22) {
        currentFontSize += 1.5;
        document.documentElement.style.setProperty('--font-base', `${currentFontSize}px`);
      }
    });
  }

  if (btnFontDecrease) {
    btnFontDecrease.addEventListener('click', () => {
      if (currentFontSize > 13) {
        currentFontSize -= 1.5;
        document.documentElement.style.setProperty('--font-base', `${currentFontSize}px`);
      }
    });
  }

  // ==========================================
  // 9. MENU MOBILE
  // ==========================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      mobileToggle.textContent = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
