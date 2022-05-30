import { render, screen } from '@testing-library/react'
import AdvantagesBar from "@home/components/AdvantagesBar"
import { debug } from 'console';

describe('test Advantagesbar component', () => {
  it('advantagesbar is receiving titles correct', () => {
    render(<AdvantagesBar />)

    const warranty = screen.getByText('Garantia')
    const budget = screen.getByText('Orçamento')
    const visit = screen.getByText('Visita')
    const payment = screen.getByText('Pagamento')

    expect(warranty).toBeInTheDocument()
    expect(budget).toBeInTheDocument()
    expect(visit).toBeInTheDocument()
    expect(payment).toBeInTheDocument()
  });

  it('is receiving icon img', () => {
    render(<AdvantagesBar />)

    // const icon = screen.;

    // expect(icon).toBeInTheDocument();

    debug()
  })
})