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
  metadataBase: new URL('https://taras-blog.vercel.app'),
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
    canonical: 'https://taras-blog.vercel.app',
    languages: {
      'uk-UA': 'https://taras-blog.vercel.app',
      'en-US': 'https://taras-blog.vercel.app/en',
    },
  },
  verification: {
    google: 'lGPQT7--F0japn09VxowjaZqN2bC00NZHnAHu29D6S4',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NG2F5W99');
            `,
          }}
        />
        {/* End Google Tag Manager */}
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
          href="https://taras-blog.vercel.app/feed.xml"
        />
        <link rel="llms-txt" href="https://taras-blog.vercel.app/llms.txt" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NG2F5W99"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
              url: 'https://taras-blog.vercel.app',
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
              url: 'https://taras-blog.vercel.app/'
            }])
          }}
        />
      </body>
    </html>
  );
}

