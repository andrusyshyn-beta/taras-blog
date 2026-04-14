import { Inter, Lora } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/lib/theme-context';
import Header from '@/components/en/Header/Header';
import Footer from '@/components/en/Footer/Footer';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  metadataBase: new URL('https://taras-blog.vercel.app'),
  title: {
    default: 'Taras Andrusyshyn — Autonomous Business / AI',
    template: '%s | Taras Andrusyshyn',
  },
  description:
    'Autonomous business architecture in the AI era. Case studies, automation, and growth strategies where 80% of processes are handled by AI agents.',
  keywords: ['AI', 'automation', 'solopreneurship', 'blog', 'Taras Andrusyshyn'],
  authors: [{ name: 'Taras Andrusyshyn' }],
  creator: 'Taras Andrusyshyn',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Taras Andrusyshyn',
    title: 'Taras Andrusyshyn — Autonomous Business / AI',
    description:
      'Autonomous business architecture in the AI era. Case studies, automation, and growth strategies where 80% of processes are handled by AI agents.',
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
    canonical: 'https://taras-blog.vercel.app/en',
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
    <html lang="en" data-theme="dark" className={`${inter.variable} ${lora.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
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
          title="Taras Andrusyshyn | Blog (RSS)"
          href="https://taras-blog.vercel.app/en/feed.xml"
        />
        <link rel="llms-txt" href="https://taras-blog.vercel.app/llms.txt" />
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


