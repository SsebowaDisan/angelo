import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock, Home, Mail, Phone } from 'lucide-react';
import { Header } from './Header';

interface BedanktPageProps {
  onNavigate: (page: string) => void;
}

export function BedanktPage({ onNavigate }: BedanktPageProps) {
  const appleEase = [0.28, 0, 0.4, 1] as const;

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="contact" onNavigate={onNavigate} />

      <main className="relative min-h-screen overflow-hidden pt-24 lg:pt-32">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.16) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.16) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />
          <div
            className="absolute -top-44 left-1/2 h-[520px] w-[900px] -translate-x-1/2 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(251, 191, 36, 0.24) 0%, rgba(251, 191, 36, 0.08) 38%, transparent 72%)',
            }}
          />
        </div>

        <section className="relative container mx-auto px-6 py-14 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: appleEase }}
              className="text-center"
            >
              <div
                className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                  boxShadow: '0 24px 60px rgba(251, 191, 36, 0.32)',
                }}
              >
                <CheckCircle2 className="h-12 w-12 text-black" strokeWidth={2.2} />
              </div>

              <p
                className="mb-5 text-yellow-600"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                Aanvraag ontvangen
              </p>

              <h1
                className="mx-auto mb-6 max-w-4xl text-black"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: 'clamp(2.7rem, 8vw, 6.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.045em',
                  lineHeight: 0.98,
                }}
              >
                Bedankt voor uw bericht.
              </h1>

              <p
                className="mx-auto max-w-2xl text-black/60"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: 'clamp(1.125rem, 2.2vw, 1.45rem)',
                  fontWeight: 400,
                  lineHeight: 1.55,
                }}
              >
                Wij hebben uw aanvraag goed ontvangen. Angelo Renovates bekijkt uw bericht en
                neemt zo snel mogelijk contact met u op.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: appleEase }}
              className="mt-14 grid gap-5 md:grid-cols-3"
            >
              <div
                className="rounded-2xl bg-white p-6"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 18px 45px rgba(0, 0, 0, 0.06)',
                }}
              >
                <Clock className="mb-5 h-7 w-7 text-yellow-500" />
                <h2
                  className="mb-2 text-black"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                  }}
                >
                  Snelle opvolging
                </h2>
                <p className="text-sm leading-6 text-black/60">
                  U ontvangt ook een bevestiging per e-mail. Daarna nemen wij persoonlijk contact
                  met u op.
                </p>
              </div>

              <a
                href="mailto:info@angelorenovates.be"
                className="group rounded-2xl bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 18px 45px rgba(0, 0, 0, 0.06)',
                }}
              >
                <Mail className="mb-5 h-7 w-7 text-yellow-500" />
                <h2
                  className="mb-2 text-black"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                  }}
                >
                  E-mail
                </h2>
                <p className="break-words text-sm font-semibold text-black group-hover:text-yellow-600">
                  info@angelorenovates.be
                </p>
              </a>

              <a
                href="tel:+32478062748"
                className="group rounded-2xl bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 18px 45px rgba(0, 0, 0, 0.06)',
                }}
              >
                <Phone className="mb-5 h-7 w-7 text-yellow-500" />
                <h2
                  className="mb-2 text-black"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                  }}
                >
                  Dringend?
                </h2>
                <p className="text-sm font-semibold text-black group-hover:text-yellow-600">
                  +32 478 06 27 48
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: appleEase }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 16px 34px rgba(0, 0, 0, 0.18)',
                }}
              >
                <Home className="h-5 w-5" />
                Terug naar home
              </button>

              <button
                type="button"
                onClick={() => onNavigate('projecten')}
                className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-black transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 16px 34px rgba(251, 191, 36, 0.25)',
                }}
              >
                Bekijk projecten
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
