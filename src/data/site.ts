export const site = {
  name: 'O Pequeno Galileu',
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
  { href: '/bercario', label: 'Berçário' },
  { href: '/maternal', label: 'Maternal' },
  { href: '/pre-escola', label: 'Pré-escola' },
  { href: '/estrutura-e-espacos', label: 'Estrutura' },
  { href: '/a-escola', label: 'A escola' },
  { href: '/blog', label: 'Blog' },
];

export const programs = {
  bercario: {
    title: 'Berçário', age: 'A partir de 4 meses',
    description: 'Um começo acolhedor, com rotina respeitosa, vínculo e descobertas em cada pequena conquista.',
    highlights: ['Acolhimento gradual', 'Rotina individualizada', 'Exploração sensorial'],
  },
  maternal: {
    title: 'Maternal', age: '1 a 3 anos',
    description: 'Autonomia, linguagem, movimento e brincadeiras coletivas para expandir os horizontes.',
    highlights: ['Desfralde respeitoso', 'Expressão e movimento', 'Brincar com a natureza'],
  },
  'pre-escola': {
    title: 'Pré-escola', age: '3 a 5 anos',
    description: 'Investigação, histórias e projetos que fortalecem a curiosidade e a convivência.',
    highlights: ['Projetos investigativos', 'Letramento vivo', 'Transição acolhedora'],
  },
};

export const posts = [
  { slug: 'adaptacao-escolar-como-acolher-os-primeiros-dias', category: 'Adaptação & vínculo', title: 'Como acolher os primeiros dias de adaptação escolar', excerpt: 'Um processo gradual, construído em parceria entre família e escola.', minutes: '4 min', published: '2026-02-15' },
  { slug: 'introducao-alimentar-com-respeito', category: 'Alimentação infantil', title: 'Introdução alimentar com respeito: autonomia no prato', excerpt: 'O papel da rotina, da escuta e de alimentos preparados com cuidado.', minutes: '5 min', published: '2026-02-08' },
  { slug: 'seguranca-na-educacao-infantil', category: 'Segurança & saúde', title: 'O que observar sobre segurança ao visitar uma escola infantil', excerpt: 'Perguntas práticas para ajudar a família a fazer uma escolha tranquila.', minutes: '6 min', published: '2026-02-01' },
];
