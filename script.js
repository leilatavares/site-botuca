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
          'Articulação direta com laboratórios LaTeDIP e CMDTA',
          'Atuação conjunta com a gestão da Educação Especial do município'
        ]
      }
    },
    'formacoes': {
      title: 'Formações nas UEs',
      tag: 'Desenvolvimento Profissional',
      icon: 'assets/icons/formacoes-icone.png',
      iconBg: '#eaf1e7',
      summary: 'Percursos formativos contínuos e em serviço para professores da classe comum, AEE e equipes escolares.',
      content: {
        objetivo: 'Capacitar os profissionais da rede a partir das demandas reais diagnosticadas no questionário aplicado com 655 profissionais de 64 escolas.',
        metodologia: 'Oficinas presenciais, encontros dialógicos em horário de trabalho pedagógico coletivo (HTPC) e seminários temáticos sobre estratégias pedagógicas inclusivas.',
        publico: 'Professores de Educação Infantil, Ensino Fundamental, Educação Especial e apoio escolar.',
        destaques: [
          'Diagnóstico formativo com 655 profissionais da rede',
          'Estudo de adaptações curriculares e Desenho Universal para a Aprendizagem (DUA)',
          'Formação em serviço focada nas situações desafiadoras do dia a dia'
        ]
      }
    },
    'gestores': {
      title: 'Gestores Escolares',
      tag: 'Liderança Institucional',
      icon: 'assets/icons/gestores-icone.png',
      iconBg: '#fff1d7',
      summary: 'Alinhamento estratégico e formação para diretores e vice-diretores das unidades de ensino municipal.',
      content: {
        objetivo: 'Fortalecer a liderança inclusiva nas escolas, organizando rotinas, alocação de recursos pedagógicos e cultura de acolhimento.',
        metodologia: 'Encontros mensais de gestão, escutas ativas institucionais e construção de planos de ação inclusivos por unidade escolar.',
        publico: 'Diretores, vice-diretores e equipes diretivas das 73 escolas municipais.',
        destaques: [
          'Escuta ativa estruturada com gestores da rede',
          'Planejamento de fluxos de encaminhamento e avaliação biopsicossocial',
          'Articulação entre diretoria escolar e suporte dos monitores da UNESP'
        ]
      }
    },
    'coordenadores': {
      title: 'Coordenadores Pedagógicos',
      tag: 'Acompanhamento Pedagógico',
      icon: 'assets/icons/coordenadores-icone.png',
      iconBg: '#e3f1f6',
      summary: 'Formação e mentoria para os coordenadores pedagógicos como articuladores das práticas inclusivas nas escolas.',
      content: {
        objetivo: 'Capacitar o coordenador pedagógico para mediar o trabalho colaborativo entre professores da classe comum e professores de AEE.',
        metodologia: 'Rodas de conversa pedagógicas, análise de planos de aula inclusivos e estudos de caso semanais.',
        publico: 'Coordenadores pedagógicos da Educação Infantil e Ensino Fundamental.',
        destaques: [
          'Foco na co-docência e planejamento conjunto',
          'Instrumentais práticos para acompanhamento das metas de aprendizagem',
          'Supervisão pedagógica alinhada com as pesquisas da UNESP'
        ]
      }
    },
    'psicopedagogos': {
      title: 'Psicopedagogos',
      tag: 'Mediação da Aprendizagem',
      icon: 'assets/icons/psicopedagogo-icone.png',
      iconBg: '#fce7ee',
      summary: 'Intervenções especializadas nos processos cognitivos e pedagógicos de aprendizagem dos estudantes.',
      content: {
        objetivo: 'Identificar barreiras e potencialidades de aprendizagem, propondo estratégias psicopedagógicas individualizadas e coletivas.',
        metodologia: 'Triagem psicopedagógica, assessoria aos docentes e elaboração de planos de intervenção baseados em evidências científicas.',
        publico: 'Estudantes com dificuldades de aprendizagem acentuadas, professores e equipes técnicas.',
        destaques: [
          'Avaliação multidimensional dos processos de leitura, escrita e raciocínio',
          'Orientações práticas para flexibilização curricular na sala comum',
          'Integração direta com a equipe multidisciplinar da UNESP'
        ]
      }
    },
    'equipe-multi': {
      title: 'Equipe Multidisciplinar',
      tag: 'Suporte Especializado',
      icon: 'assets/icons/equipe-multi-icone.png',
      iconBg: '#e3f1f6',
      summary: 'Atuação integrada de psicólogos, psicopedagogos, terapeutas e neuropediatra para olhar global do estudante.',
      content: {
        objetivo: 'Promover avaliações biopsicossociais aprofundadas, superando o modelo puramente biomédico e considerando as dimensões sociais e emocionais.',
        metodologia: 'Observações diretas no contexto escolar, anamneses conjuntas, reuniões multiprofissionais e acompanhamento especializado.',
        publico: 'Casos prioritários de estudantes indicados pelas escolas e equipes de saúde/educação.',
        destaques: [
          'Equipe multiprofissional vinculada à UNESP e Prefeitura',
          'Carga horária de psicologia ampliada para suporte escolar',
          'Participação de Neuropediatra no apoio técnico especializado'
        ]
      }
    },
    'aee': {
      title: 'AEE (Atendimento Educacional Especializado)',
      tag: 'Salas de Recursos Multifuncionais',
      icon: 'assets/icons/aee-icone.png',
      iconBg: '#fce7ee',
      summary: 'Fortalecimento e qualificação do AEE complementar e suplementar oferecido nas unidades escolares.',
      content: {
        objetivo: 'Garantir recursos de tecnologia assistiva, adequação de materiais didáticos e metodologias acessíveis para estudantes público-alvo da Educação Especial.',
        metodologia: 'Atendimento nas Salas de Recursos Multifuncionais (SRM), articulação com a sala regular e produção de materiais adaptados.',
        publico: 'Professores de AEE e estudantes com deficiência, TEA e altas habilidades/superdotação.',
        destaques: [
          'Articulação da teoria com a prática do AEE em Botucatu',
          'Desenvolvimento de materiais pelo CMDTA / LaTeDIP',
          'Planos de Desenvolvimento Individual (PDI) colaborativos'
        ]
      }
    },
    'escolas-especializadas': {
      title: 'Escolas Especializadas',
      tag: 'Rede de Suporte',
      icon: 'assets/icons/escolas-especializadas-icone.png',
      iconBg: '#fff1d7',
      summary: 'Diálogo, articulação e suporte contínuo com instituições de atendimento especializado no município.',
      content: {
        objetivo: 'Promover a transição escolar harmônica e o intercâmbio de saberes entre as instituições parceiras e a rede regular.',
        metodologia: 'Visitas técnicas institucionais, reuniões de estudo conjunto e partilha de boas práticas.',
        publico: 'Profissionais de centros especializados, APAE, entidades conveniadas e comunidade.',
        destaques: [
          'Construção de pontes entre o ensino especializado e o ensino regular',
          'Mapeamento de recursos e tecnologias compartilhadas',
          'Garantia do direito à escolarização inclusiva plena'
        ]
      }
    },
    'avaliacoes': {
      title: 'Avaliações e Estudo de Caso',
      tag: 'Avaliação Biopsicossocial Pioneira',
      icon: 'assets/icons/avaliacoes-icone.png',
      iconBg: '#eaf1e7',
      summary: 'Implementação pioneira da avaliação biopsicossocial em contexto escolar para os casos mais desafiadores.',
      content: {
        objetivo: 'Compreender o estudante em suas dimensões pedagógicas, contextuais, sociais e emocionais, selecionando intervenções assertivas.',
        metodologia: 'Observações in loco em sala de aula e pátio, escutas de pais e professores, e estudo de caso multidisciplinar.',
        publico: 'Mais de 150 situações desafiadoras mapeadas nas 73 escolas, com 20 casos prioritários já em intervenção.',
        destaques: [
          'Pioneirismo no modelo biopsicossocial de avaliação educacional',
          '20 casos de alta prioridade acompanhados minuciosamente',
          'Devolutivas construtivas para as famílias e equipes escolares'
        ]
      }
    },
    'pessoal-apoio': {
      title: 'Pessoal de Apoio Escolar',
      tag: 'Cuidado & Acessibilidade',
      icon: 'assets/icons/pessoal-apoio-icone.png',
      iconBg: '#e3f1f6',
      summary: 'Capacitação e valorização dos profissionais de apoio à alimentação, higiene e locomoção.',
      content: {
        objetivo: 'Qualificar o apoio às atividades da vida diária e escolar, assegurando autonomia e dignidade para cada aluno.',
        metodologia: 'Treinamentos práticos sobre manejo acolhedor, comunicação alternativa básica e integração com os professores.',
        publico: 'Cuidadores, monitores de apoio e auxiliares de vida escolar da rede municipal.',
        destaques: [
          'Promoção da autonomia e não da dependência',
          'Orientações ergonômicas e de mediação no recreio e rotinas escolares',
          'Integração plena à equipe educacional da escola'
        ]
      }
    },
    'monitores': {
      title: 'Monitores de Graduação (UNESP)',
      tag: 'Apoio Direto nas Escolas',
      icon: 'assets/icons/monitores-icone.png',
      iconBg: '#fce7ee',
      summary: 'Atuação de até 50 estudantes universitários de graduação nas escolas indicadas pela Secretaria.',
      content: {
        objetivo: 'Oferecer suporte qualificado e direto às práticas pedagógicas inclusivas em sala de aula regular.',
        metodologia: 'Atuação prática presencial nas escolas parceiras com processo sistemático de formação e supervisão semanal pela UNESP.',
        publico: 'Estudantes de cursos de graduação da UNESP Bauru e turmas inclusivas da rede de Botucatu.',
        destaques: [
          'Até 50 monitores bolsistas/estagiários em campo',
          'Supervisão acadêmica e metodológica semanal rigorosa',
          'Ponte direta entre a produção científica e a sala de aula'
        ]
      }
    },
    'familia': {
      title: 'Família e Comunidade',
      tag: 'Escuta Ativa & Parceria',
      icon: 'assets/icons/familia-icone.png',
      iconBg: '#e3f1f6',
      summary: 'Acolhimento, orientação e escuta ativa com pais e responsáveis dos estudantes da rede.',
      content: {
        objetivo: 'Fortalecer os vínculos de confiança e colaboração mútua entre família e escola na trajetória do estudante.',
        metodologia: 'Encontros de escuta, rodas de orientação familiar e participação nas devolutivas dos estudos de caso.',
        publico: 'Pais, mães e responsáveis legais de estudantes com e sem deficiência.',
        destaques: [
          'Escuta humanizada das histórias e anseios familiares',
          'Orientações sobre direitos, rotinas em casa e estimulação no lar',
          'Atendimento na Sala Multissensorial do SEP (Centro de Botucatu)'
        ]
      }
    },
    'nape': {
      title: 'NAPE (Núcleo de Apoio Pedagógico)',
      tag: 'Articulação da Rede',
      icon: 'assets/icons/nape-icone.png',
      iconBg: '#fff1d7',
      summary: 'Trabalho conjunto e estratégico com o Núcleo de Apoio Pedagógico Especializado de Botucatu.',
      content: {
        objetivo: 'Alinhar as diretrizes do convênio às políticas públicas permanentes da Secretaria Municipal de Educação.',
        metodologia: 'Reuniões periódicas de alinhamento com a equipe técnica do NAPE para monitoramento de indicadores e fluxos.',
        publico: 'Equipe de especialistas e coordenadores do NAPE Botucatu.',
        destaques: [
          'Construção conjunta de protocolos institucionais',
          'Gestão articulada dos encaminhamentos de estudantes',
          'Sustentabilidade das ações inclusivas na rede a longo prazo'
        ]
      }
    },
    'agenda': {
      title: 'Agenda do Convênio',
      tag: 'Planejamento de Atividades',
      icon: 'assets/icons/agenda-icone.png',
      iconBg: '#eaf1e7',
      summary: 'Cronograma oficial de reuniões, formações continuadas, supervisões e atendimentos especializados.',
      content: {
        objetivo: 'Garantir transparência, previsibilidade e ampla participação de todos os segmentos nas ações do projeto.',
        metodologia: 'Calendário dinâmico atualizado periodicamente com horários, locais (Auditório, Escolas, SEP e Online) e pautas.',
        publico: 'Todos os profissionais da rede, gestores, monitores e comunidade escolar.',
        destaques: [
          'Encontros formativos semanais e quinzenais',
          'Supervisões dos monitores todas as sextas-feiras',
          'Cronograma de atendimentos na Sala Multissensorial do SEP'
        ]
      }
    },
    'arquivos': {
      title: 'Repositório de Arquivos',
      tag: 'Acervo & Documentos',
      icon: 'assets/icons/arquivos-icone.png',
      iconBg: '#fce7ee',
      summary: 'Central de download de formulários, termos de convênio, cadernos de apoio e relatórios técnicos.',
      content: {
        objetivo: 'Disponibilizar de forma rápida e acessível toda a documentação oficial e pedagógica gerada pelo projeto.',
        metodologia: 'Organização em categorias temáticas com arquivos digitais acessíveis (PDF, documentos editáveis e formulários).',
        publico: 'Equipes gestoras, professores, pesquisadores e comunidade escolar.',
        destaques: [
          'Carta Informativa Oficial na íntegra (Botucatu, 22/04/2026)',
          'Modelos de PDI e Fichas de Observação Biopsicossocial',
          'Termos e diretrizes do Convênio UNESP / Prefeitura'
        ]
      }
    },
    'producoes': {
      title: 'Produções Científicas',
      tag: 'Pesquisa & Extensão',
      icon: 'assets/icons/producoes-icone.png',
      iconBg: '#e3f1f6',
      summary: 'Divulgação da produção acadêmica, artigos, livros, relatos de experiência e tecnologias desenvolvidas.',
      content: {
        objetivo: 'Sistematizar o conhecimento gerado na parceria UNESP-Botucatu para servir de referência nacional em políticas públicas.',
        metodologia: 'Publicação de artigos em revistas científicas indexadas, anais de congressos, e-books e manuais práticos.',
        publico: 'Comunidade acadêmica nacional e internacional, redes municipais de ensino e educadores.',
        destaques: [
          'Produções vinculadas ao LaTeDIP e CMDTA / FC UNESP',
          'Relatos de experiências dos monitores e professores da rede',
          'Estudos empíricos sobre o impacto da avaliação biopsicossocial'
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
