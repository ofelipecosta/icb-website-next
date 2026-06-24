import { Metadata } from 'next'
import { Phone, Mail, Clock, AlertCircle } from 'lucide-react'
import { getAvisos } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Secretaria Náutica | Iate Clube Brasileiro',
  description: 'Informações, avisos e suporte técnico da secretaria náutica',
}

export default async function SecretariaNauticaPage() {
  const avisos = await getAvisos()

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy text-cream py-20 md:py-32 border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
            Secretaria Náutica
          </h1>
          <p className="text-xl leading-relaxed opacity-90">
            Suporte, informações e avisos para nossas atividades náuticas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Contact Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-medium text-navy mb-8">
            Entre em Contato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-lg p-6 border border-line flex gap-4">
              <Phone className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-navy mb-2">Telefone</h3>
                <a href="tel:+552127145252" className="text-muted hover:text-red-600">
                  (21) 2714-5252
                </a>
              </div>
            </div>

            <div className="bg-cream rounded-lg p-6 border border-line flex gap-4">
              <Mail className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-navy mb-2">E-mail</h3>
                <a href="mailto:nautica@icb.org.br" className="text-muted hover:text-red-600">
                  nautica@icb.org.br
                </a>
              </div>
            </div>

            <div className="bg-cream rounded-lg p-6 border border-line flex gap-4">
              <Clock className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-navy mb-2">Horário</h3>
                <p className="text-muted text-sm">
                  Seg-Sex: 8h às 17h
                  <br />
                  Sáb-Dom: sob consulta
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-lg p-6 border border-line flex gap-4">
              <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-navy mb-2">Emergências</h3>
                <p className="text-muted text-sm">
                  Contate o capitania dos portos
                  <br />
                  em caso de emergência
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Avisos */}
        {avisos.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-display font-medium text-navy mb-8">
              Avisos Importantes
            </h2>
            <div className="space-y-4">
              {avisos.map((aviso) => (
                <div
                  key={aviso._id}
                  className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg"
                >
                  <div className="flex gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                    <div className="flex-grow">
                      <p className="text-navy font-medium mb-1">{aviso.texto}</p>
                      <time className="text-sm text-muted">
                        {new Date(aviso.data).toLocaleDateString('pt-BR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Services */}
        <section>
          <h2 className="text-3xl font-display font-medium text-navy mb-8">
            Serviços Disponíveis
          </h2>
          <ul className="space-y-4 text-lg text-muted">
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Descida e subida de embarcações</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Manutenção e reparo de barcos</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Armazenagem de embarcações</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Suporte técnico para associados</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Informações sobre regatas e eventos</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span>Aulas e treinamentos de vela</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
