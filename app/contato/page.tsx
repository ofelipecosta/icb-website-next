import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Contato | Iate Clube Brasileiro',
  description: 'Entre em contato conosco. Endereço, telefone, WhatsApp e horários',
}

export default function ContatoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Estamos prontos para ouvir você
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: MapPin,
              label: 'Endereço',
              content: (
                <div>
                  <p className="font-medium">Estrada Leopoldina Fróes, 400</p>
                  <p className="text-sm text-muted">São Francisco, Niterói — RJ</p>
                </div>
              ),
            },
            {
              icon: Phone,
              label: 'Telefone',
              content: <a href="tel:+552127145252" className="font-medium hover:text-red-600 transition-colors">(21) 2714-5252</a>,
            },
            {
              icon: Mail,
              label: 'E-mail',
              content: <a href="mailto:secretaria@icb.org.br" className="font-medium hover:text-red-600 transition-colors">secretaria@icb.org.br</a>,
            },
            {
              icon: Clock,
              label: 'Horário',
              content: (
                <div>
                  <p className="font-medium">Seg-Sex: 9h às 17h</p>
                  <p className="text-sm text-muted">Sáb-Dom: 10h às 18h</p>
                </div>
              ),
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="bg-cream rounded-lg p-6 border border-line hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-lg flex-shrink-0">
                    <Icon size={20} className="text-red-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm uppercase tracking-widest font-semibold text-navy mb-2">
                      {item.label}
                    </h3>
                    <div className="text-sm text-muted">{item.content}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* WhatsApp Destacado */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-8 mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              className="w-6 h-6 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.226l-.344.214-3.57-.935.951 3.518-.228.36a9.9 9.9 0 001.51 5.694c.85 1.396 2.049 2.588 3.428 3.393.6.343 1.189.643 1.75.77a9.947 9.947 0 004.335-.127c.196-.029.389-.079.577-.134 1.422-.207 2.806-.922 3.808-1.965 1.002-1.043 1.603-2.41 1.733-3.85.031-.433.026-.866 0-1.298 0-.53-.04-1.058-.118-1.581-.078-.522-.236-1.035-.473-1.523-.928-1.88-2.533-3.36-4.37-4.05a9.86 9.86 0 00-2.486-.374z" />
            </svg>
            <h3 className="text-lg font-display font-medium text-green-900">
              Fale conosco no WhatsApp
            </h3>
          </div>
          <p className="text-green-800 mb-6">Estamos disponíveis para responder suas dúvidas</p>
          <a
            href="https://wa.me/5521973703932"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors"
          >
            Abrir WhatsApp
          </a>
        </div>

        {/* Contact Form Section */}
        <section>
          <SectionHeader
            eyebrow="FORMULÁRIO"
            title="Nos envie uma"
            titleEmphasis="mensagem"
            centered
            description="Preencha o formulário abaixo e nossa equipe responderá em breve"
          />

          <div className="max-w-2xl mx-auto bg-cream rounded-lg p-8 border border-line">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                    placeholder="(21) 9 9999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Assunto
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                >
                  <option>Selecione um assunto</option>
                  <option>Dúvida geral</option>
                  <option>Solicitar informações de associação</option>
                  <option>Eventos e atividades</option>
                  <option>Ouvidoria</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  placeholder="Sua mensagem..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
