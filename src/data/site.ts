export const site = {
  name: 'O Pequeno Galileu',
  preview: true,
  contactReady: false,
  url: 'https://www.opequenogalileu.com',
  locale: 'pt_BR',
  city: 'Rio Pequeno, São Paulo/SP',
  phone: '(11) 9999-9999',
  whatsapp: '5511999999999',
  email: 'contato@opequenogalileu.com.br',
  address: 'Rua Miguel Sevílio, 175 — Rio Pequeno, São Paulo/SP',
  openingHours: 'Segunda a sexta, das 7h às 19h',
  notice: 'Dados de contato e imagens provisórios — aguardando validação da escola.',
};

export const navigation = [
  { href: '/a-escola', label: 'A escola' },
  { href: '/bercario', label: 'Berçário' },
  { href: '/maternal', label: 'Maternal' },
  { href: '/pre-escola', label: 'Pré-escola' },
  { href: '/rotina-e-cuidados', label: 'Rotina' },
  { href: '/estrutura-e-espacos', label: 'Espaços' },
  { href: '/matriculas', label: 'Matrículas' },
];

export const programs = {
  bercario: {
    title: 'Berçário', age: 'A partir de 4 meses',
    description: 'Um começo acolhedor, com rotina respeitosa, vínculo e descobertas em cada pequena conquista.',
    highlights: ['Acolhimento gradual', 'Rotina individualizada', 'Exploração sensorial'],
    intro: 'Os primeiros meses na escola trazem perguntas práticas e afetivas. Como começa a adaptação? Quem acompanha o bebê? Como a família fica sabendo do seu dia? Uma visita é o momento de conhecer as pessoas, os ambientes e as respostas da equipe.',
    daily: 'Alimentação, descanso, higiene, interações e brincadeiras fazem parte das conversas mais importantes de quem procura um berçário. O processo detalhado será confirmado com a coordenação no briefing da escola.',
    experience: 'Movimento, exploração de materiais e contato com outras crianças podem fazer parte das experiências do berçário. Um registro real da escola será inserido aqui junto das fotos na última etapa.',
    questions: ['Como a equipe organiza os primeiros dias?', 'Como são compartilhadas as informações sobre o bebê?', 'Quais ambientes são usados pelo grupo?'],
  },
  maternal: {
    title: 'Maternal', age: '1 a 3 anos',
    description: 'Autonomia, linguagem, movimento e brincadeiras coletivas para expandir os horizontes.',
    highlights: ['Desfralde respeitoso', 'Expressão e movimento', 'Brincar com a natureza'],
    intro: 'O maternal é um período de novas formas de falar, brincar, participar e conviver. Para escolher a escola, vale conhecer os grupos, os espaços e como o dia combina experiências coletivas com cuidados cotidianos.',
    daily: 'Adaptação, higiene, descanso e desfralde costumam fazer parte da conversa com as famílias. Os procedimentos específicos do Galileu serão detalhados após a confirmação da coordenação.',
    experience: 'Histórias, movimento, materiais e conversas criam oportunidades de brincar e aprender. Vamos incluir aqui um projeto real do maternal, com o contexto e o acompanhamento da equipe.',
    questions: ['Como os grupos do maternal são organizados?', 'Como a escola conversa com a família sobre o desfralde?', 'Quais experiências e espaços fazem parte da rotina?'],
  },
  'pre-escola': {
    title: 'Pré-escola', age: '3 a 5 anos',
    description: 'Investigação, histórias e projetos que fortalecem a curiosidade e a convivência.',
    highlights: ['Projetos investigativos', 'Letramento vivo', 'Transição acolhedora'],
    intro: 'Na pré-escola, as famílias procuram entender que experiências as crianças vivem, como os grupos são formados e de que modo seu desenvolvimento é acompanhado.',
    daily: 'As famílias podem perguntar como a equipe compartilha registros, conversa sobre o percurso da criança e organiza a continuidade da vida escolar. O processo próprio do Galileu será confirmado no briefing.',
    experience: 'Brincar, expressar ideias, investigar e conviver são partes importantes da educação infantil. Um projeto real da pré-escola será mostrado aqui com o registro das crianças e a intencionalidade da equipe.',
    questions: ['Quais são os grupos e as idades atendidas?', 'Como são documentadas as experiências das crianças?', 'Como a escola conversa sobre a transição para o Ensino Fundamental?'],
  },
};

export const posts = [
  { slug: 'adaptacao-escolar-como-acolher-os-primeiros-dias', category: 'Adaptação e vínculo', title: 'Como acolher os primeiros dias de adaptação escolar', excerpt: 'Perguntas que ajudam família e escola a conversar sobre o começo da criança.', minutes: '4 min', published: '', status: 'draft' },
  { slug: 'introducao-alimentar-com-respeito', category: 'Alimentação infantil', title: 'Introdução alimentar: o que perguntar à escola', excerpt: 'Uma conversa sobre refeições, orientações individuais e comunicação com a família.', minutes: '3 min', published: '', status: 'draft' },
  { slug: 'seguranca-na-educacao-infantil', category: 'Segurança e cuidado', title: 'Segurança na escola infantil: perguntas para uma visita', excerpt: 'O que perguntar à equipe sobre espaços, entrada, saída e comunicação.', minutes: '3 min', published: '', status: 'draft' },
];
