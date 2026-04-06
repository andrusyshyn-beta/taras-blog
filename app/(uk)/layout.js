import { ThemeProvider } from '@/lib/theme-context';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '../globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  metadataBase: new URL('https://andrusyshyn.vercel.app'),
  title: {
    default: 'Taras Andrusyshyn — Технології та маркетинг',
    template: '%s | Taras Andrusyshyn',
  },
  description:
    'Блог про ШІ, технології та маркетинг. Практичний контент без зайвої теорії: інструменти, стратегії, кейси.',
  keywords: ['технології', 'маркетинг', 'digital', 'блог', 'Taras Andrusyshyn'],
  authors: [{ name: 'Taras Andrusyshyn' }],
  creator: 'Taras Andrusyshyn',
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    siteName: 'Taras Andrusyshyn',
    title: 'Taras Andrusyshyn — Технології та маркетинг',
    description:
      'Блог про технології, маркетинг та побудову ефективних digital-систем.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tarasandrusyshyn',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://andrusyshyn.vercel.app',
    languages: {
      'uk-UA': 'https://andrusyshyn.vercel.app',
      'en-US': 'https://andrusyshyn.vercel.app/en',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Taras Andrusyshyn | Блог (RSS)"
          href="https://andrusyshyn.vercel.app/feed.xml"
        />
        <link rel="llms-txt" href="https://andrusyshyn.vercel.app/llms.txt" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([{
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Taras Andrusyshyn',
              url: 'https://andrusyshyn.vercel.app',
              jobTitle: 'AI Developer & Growth Marketer',
              sameAs: [
                'https://www.facebook.com/andrusyshyn.ts',
                'https://www.instagram.com/ts_andrusyshyn',
                'https://www.threads.net/@ts_andrusyshyn',
                'https://t.me/lab_of_autonomy'
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Taras Andrusyshyn Blog',
              url: 'https://andrusyshyn.vercel.app/'
            }])
          }}
        />
      </body>
    </html>
  );
}
