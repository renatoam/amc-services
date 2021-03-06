interface TextAdvantages {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  icon: string;
  alt: string;
}

export const textsAdvantages: Array<TextAdvantages> = [
  {
    id: 1,
    title: "Garantia",
    subtitle: "3 Meses",
    text: "Segurança de uma garantia coberta pelo Código de defesa do Consumidor.",
    icon: "/images/warranty.svg",
    alt: "image contain medal icon in color white",
  },
  {
    id: 2,
    title: "Orçamento",
    subtitle: "Simule o orçamento",
    text: "Use nosso simulador e receba um orçamento de forma rápida e prática.",
    icon: "/images/budget.svg",
    alt: "image contain calculator icon in color white",
  },
  {
    id: 3,
    title: "Visita",
    subtitle: "Gratuita",
    text: "Até um raio 10 km de distância. Acima de 10 km: R$ 2,50/km.",
    icon: "/images/visit.svg",
    alt: "image contain house icon in color white",
  },
  {
    id: 4,
    title: "Pagamento",
    subtitle: "Flexível",
    text: "Pague com cartão de crédito ou débito, Pix, TED ou dinheiro.",
    icon: "/images/payment.svg",
    alt: "image contain coins icon in color white",
  },
];
