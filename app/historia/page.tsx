import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nossa História | Iate Clube Brasileiro',
  description: 'Conheça a história do primeiro clube de vela do Brasil, fundado em 1906.',
}

export default function HistoriaPage() {
  return (
    <div className="page-content">
      <h1>Nossa História</h1>
      <p>O Iate Clube Brasileiro, fundado em 1906, é o primeiro clube de vela do Brasil.</p>
      <p>Durante mais de um século, formamos velejadores, acolhemos famílias e cultivamos a arte de viver no mar.</p>
    </div>
  )
}
