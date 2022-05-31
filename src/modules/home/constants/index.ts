import { BugReport, Business, HeartBroken, Lightbulb, ModeStandby, Thunderstorm } from "@mui/icons-material"
import { v4 as uuid } from "uuid"

export const testimonials = [
  {
    id: uuid(),
    name: 'Renato Melo',
    image: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quia quaerat modi voluptas possimus, veniam ducimus distinctio a, inventore vero vel maiores ea neque, aliquid quam quae architecto dignissimos.'
  },
  {
    id: uuid(),
    name: 'Adriel Cardoso',
    image: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quia quaerat modi voluptas possimus, veniam ducimus distinctio a, inventore vero vel maiores ea neque, aliquid quae architecto dignissimos.'
  },
  {
    id: uuid(),
    name: 'Giba',
    image: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quia quaerat modi voluptas possimus, veniam distinctio a, inventore vero vel maiores ea neque, aliquid quam quae architecto dignissimos.'
  },
]

export const latestServices = [
  {
    id: uuid(),
    title: 'Conserto de painel elétrico',
    link: '#',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  },
  {
    id: uuid(),
    title: 'Conserto de caixa de fuzelagem',
    link: '#',
    image: 'https://images.unsplash.com/photo-1635335874521-7987db781153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: uuid(),
    title: 'Reparo de caixa de luz',
    link: '#',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
]

export const commonProblems = [
  {
    id: uuid(),
    description: 'Equipamento avariado',
    link: '#',
    icon: HeartBroken
  },
  {
    id: uuid(),
    description: 'Manutenção preventiva',
    link: '#',
    icon: BugReport
  },
  {
    id: uuid(),
    description: 'Manutenção preditiva',
    link: '#',
    icon: Business
  },
  {
    id: uuid(),
    description: 'Distribuição de energia',
    link: '#',
    icon: Thunderstorm
  },
  {
    id: uuid(),
    description: 'Iluminação',
    link: '#',
    icon: Lightbulb
  },
  {
    id: uuid(),
    description: 'Fiação elétrica',
    link: '#',
    icon: ModeStandby
  },
]
