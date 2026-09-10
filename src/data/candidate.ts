// Fonte oficial de todo o conteúdo: JULIANE VIEIRA - HISTÓRIA.docx
// Não alterar/expandir informações sem atualizar o documento oficial.

export const candidate = {
  name: 'Juliane Vieira',
  firstName: 'Juliane',
  role: 'Deputada Estadual',
  number: '15777',
  slogan: 'Na luta por um hospital de queimados',
  tagline: 'Uma história de vida, recomeço e propósito.',
  city: 'Cascavel',
  state: 'Paraná',
  stateShort: 'PR',
  age: 29,
  profession: 'Advogada',
  instagramHandle: '@julianevieirar',
  instagramUrl: 'https://instagram.com/julianevieirar',
  whatsappDisplay: '(45) 99951-9655',
  whatsappUrl: 'https://wa.me/5545999519655',
}

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem é Juliane', href: '#quem-e' },
  { label: 'Minha História', href: '#minha-historia' },
  { label: 'Causa dos Queimados', href: '#causa-dos-queimados' },
  { label: 'Ala de Queimados', href: '#ala-de-queimados' },
  { label: 'Pautas', href: '#pautas' },
  { label: 'Contato', href: '#contato' },
]

export const about = {
  eyebrow: 'Quem é',
  heading: 'Juliane Vieira',
  stats: [
    { value: '29', label: 'anos' },
    { value: '2018', label: 'formada em Direito' },
    { value: 'Cascavel', label: 'Oeste do Paraná' },
  ],
  paragraphs: [
    'Sou advogada, formada em Direito desde 2018.',
    'Minha trajetória profissional sempre esteve ligada à área jurídica. Atuei na advocacia, trabalhei no Ministério Público e também fui assessora de delegado na Polícia Civil de Cascavel.',
    'Durante anos, conciliei trabalho e estudos para concursos públicos. Tinha meu escritório, minha rotina, meus planos e uma vida organizada.',
    'O CrossFit também fazia parte dos meus dias. Era o esporte que eu amava e onde encontrava equilíbrio para lidar com a ansiedade e com a intensidade da rotina.',
  ],
  closing: 'Até que tudo mudou.',
}

export const story = {
  eyebrow: 'Minha história',
  heading: 'O dia em que tudo mudou',
  intro:
    'Minha vida mudou completamente após um incêndio, em 15 de outubro de 2025, no 13º andar do prédio onde eu morava. Naquele dia, consegui salvar minha mãe e meu priminho de 4 anos e sofri queimaduras em mais de 60% do corpo.',
  milestones: [
    {
      tag: '15 de outubro de 2025',
      title: 'O incêndio',
      paragraphs: [
        'Naquele dia, um incêndio atingiu o apartamento onde eu morava, no 13º andar de um prédio em Cascavel.',
        'Pela janela, consegui salvar minha mãe e meu priminho de 4 anos.',
        'Naquele incêndio, sofri queimaduras em mais de 60% do corpo.',
        'Após o resgate, fui levada ao Hospital Universitário de Cascavel. Três dias depois, fui transferida de avião para o Centro de Tratamento de Queimados de Londrina, onde permaneci internada por meses e ainda sigo realizando meus tratamentos.',
        'Começava ali uma longa caminhada de cirurgias, enxertos, tratamentos e fisioterapia.',
      ],
    },
    {
      tag: 'Depois da alta',
      title: 'O recomeço',
      paragraphs: [
        'Depois da alta hospitalar, começou uma nova fase.',
        'Precisava recuperar força, mobilidade, independência e aprender a conviver com todas as mudanças provocadas pelo acidente.',
        'A fisioterapia passou a fazer parte da minha rotina. Depois, a academia entrou como uma nova etapa de fortalecimento, com um objetivo que continua muito presente: voltar, no meu tempo, a praticar CrossFit.',
        'A recuperação não acontece de uma vez. Ela é feita de pequenas conquistas, dias difíceis e muitos recomeços.',
      ],
    },
  ],
}

export const burnCause = {
  eyebrow: 'A causa dos queimados',
  heading: 'Quando a minha história encontrou outras histórias',
  intro: [
    'Depois da alta, comecei a receber mensagens de famílias de diferentes cidades.',
  ],
  reports: [
    'Filhos procurando informações para ajudar os pais.',
    'Mães buscando atendimento para os filhos.',
    'Pessoas aguardando transferência para centros especializados.',
    'E também famílias em luto pela perda de pessoas que precisaram de atendimento.',
  ],
  turningPoint:
    'Foi quando percebi que a minha história não era um caso isolado.',
  action:
    'Passei a utilizar minhas redes sociais para dar visibilidade a esses relatos, buscar informações e chamar atenção para uma realidade que muitas vezes só é percebida quando uma emergência acontece.',
  whyHeading: 'Por que o atendimento especializado importa?',
  whyParagraphs: [
    'Queimaduras graves acontecem de forma inesperada.',
    'Ninguém planeja precisar de uma UTI especializada, de cirurgias, enxertos ou de uma equipe preparada especificamente para tratar queimaduras.',
    'Mas, quando isso acontece, a estrutura precisa estar pronta.',
    'Hoje, casos de maior complexidade no Oeste do Paraná podem depender de transferência para Londrina e Curitiba.',
    'Ter atendimento especializado mais próximo significa reduzir deslocamentos, facilitar o acompanhamento das famílias e fortalecer a rede regional de saúde.',
  ],
  needs: [
    { label: 'UTI especializada' },
    { label: 'Cirurgias' },
    { label: 'Enxertos' },
    { label: 'Equipes preparadas' },
  ],
}

export const burnCenterTimeline = {
  eyebrow: 'Entenda a ala de queimados de Cascavel',
  heading: 'Uma história que começou em 2013',
  intro:
    'Em 2013, foram anunciados recursos para a implantação de uma Ala de Queimados no Hospital Universitário do Oeste do Paraná, em Cascavel. O projeto previa inicialmente 20 leitos e tinha como objetivo ampliar o atendimento especializado no Estado.',
  events: [
    {
      year: '2013',
      title: 'O anúncio',
      description:
        'Foram anunciados recursos para a construção da estrutura e aquisição de equipamentos.',
    },
    {
      year: '2014',
      title: 'Início das obras',
      description:
        'Foi assinado o contrato para o início das obras, com prazo previsto de 18 meses.',
    },
    {
      year: '2017',
      title: 'Novos recursos',
      description: 'Novos recursos foram anunciados para a conclusão da estrutura.',
    },
    {
      year: '2019',
      title: 'Prédio concluído',
      description: 'Registros apontam a conclusão física do prédio.',
    },
    {
      year: '2020',
      title: 'Pandemia',
      description:
        'A unidade ainda não funcionava como serviço especializado em queimados. Com a pandemia, o espaço passou a ser utilizado para atendimento hospitalar relacionado à Covid-19.',
    },
    {
      year: 'Hoje',
      title: 'Ainda sem funcionar',
      description:
        'A estrutura existe e passou a receber outras utilizações dentro do hospital, mas o serviço especializado em queimados para o qual ela foi originalmente planejada não entrou em funcionamento.',
    },
  ],
  quote: 'Você não acha que vai precisar. Até precisar.',
  quoteSupport:
    'Quando uma emergência acontece, não há tempo para improvisar. Estrutura, profissionais preparados e atendimento especializado precisam existir antes da necessidade aparecer.',
}

export const issues = {
  eyebrow: 'Outras pautas',
  heading: 'Além da causa dos queimados',
  items: [
    {
      tag: 'Saúde',
      title: 'Saúde',
      description:
        'Mais estrutura para a saúde pública, ampliação do acesso a exames, consultas e tratamentos especializados, fortalecimento do transporte sanitário e atenção especial à saúde da mulher. Prevenção, diagnóstico precoce e atendimento mais próximo das pessoas também fazem parte dessa discussão.',
    },
    {
      tag: 'Educação e prevenção',
      title: 'Educação e prevenção',
      description:
        'Educação também é prevenção. Escolas estruturadas, profissionais valorizados e ações educativas sobre primeiros socorros, prevenção de acidentes, saúde e segurança podem contribuir para ambientes mais preparados e seguros.',
    },
    {
      tag: 'Saúde mental',
      title: 'Saúde Mental',
      description:
        'O cuidado com a saúde mental precisa ser acessível. Ampliar o atendimento psicológico e psiquiátrico, fortalecer a rede de atenção psicossocial e investir em prevenção e acolhimento são temas essenciais para crianças, jovens, adultos e famílias.',
    },
    {
      tag: 'Segurança pública',
      title: 'Segurança Pública',
      description:
        'Segurança pública também depende de estrutura. Equipamentos adequados, melhores condições de trabalho para os profissionais de segurança e socorro, prevenção da violência e fortalecimento da proteção às mulheres são pontos importantes para o atendimento à população.',
    },
    {
      tag: 'Esporte',
      title: 'Esporte',
      description:
        'O esporte é saúde, inclusão e qualidade de vida. Estruturas esportivas adequadas, projetos de base e maior acesso à prática esportiva podem transformar a realidade de crianças, jovens e adultos.',
    },
    {
      tag: 'Pessoa idosa',
      title: 'Pessoa Idosa',
      description:
        'Envelhecer com dignidade também significa ter acesso à saúde, prevenção, segurança e convivência. Prevenção de quedas e acidentes, proteção contra violência e abandono e ações que incentivem autonomia e qualidade de vida fazem parte desse cuidado.',
    },
    {
      tag: 'Proteção às mulheres',
      title: 'Proteção às Mulheres',
      description:
        'A proteção das mulheres exige integração entre saúde, segurança, assistência social e acesso à informação. Prevenção da violência, acolhimento adequado e fortalecimento da rede de atendimento são fundamentais para que mulheres em situação de vulnerabilidade consigam buscar ajuda.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contato',
  heading: 'Vamos manter essa conversa',
  paragraphs: [
    'Este espaço também foi criado para aproximar pessoas, histórias e informações.',
    'Se você quiser compartilhar um relato, entrar em contato ou acompanhar meus conteúdos, utilize os canais oficiais disponíveis nesta página.',
  ],
  formNote:
    'Preencha seus dados para entrar em contato com a nossa equipe.',
}

export const footer = {
  heading: candidate.name,
  role: candidate.role,
  number: candidate.number,
  tagline: candidate.tagline,
  location: `${candidate.city} — ${candidate.state}`,
  // Dados jurídicos/partidários não fornecidos nos anexos oficiais.
  // Placeholder pronto para preenchimento posterior, quando disponível.
  legalPlaceholder: null as string | null,
}
