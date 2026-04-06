import { ThemeProvider } from '@/lib/theme-context';
import Header from '@/components/en/Header/Header';
import Footer from '@/components/en/Footer/Footer';
import '../globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  metadataBase: new URL('https://andrusyshyn.vercel.app'),
  title: {
    default: 'Taras Andrusyshyn — Tech & Marketing',
    template: '%s | Taras Andrusyshyn',
  },
  description:
    'Blog about AI, tech, and marketing. Practical content without fluff: tools, strategies, and case studies.',
  keywords: ['tech', 'marketing', 'digital', 'blog', 'Taras Andrusyshyn'],
  authors: [{ name: 'Taras Andrusyshyn' }],
  creator: 'Taras Andrusyshyn',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Taras Andrusyshyn',
    title: 'Taras Andrusyshyn — Tech & Marketing',
    description:
      'Blog about tech, marketing, and building efficient digital systems.',
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
    canonical: 'https://andrusyshyn.vercel.app/en',
    languages: {
      'uk-UA': 'https://andrusyshyn.vercel.app',
      'en-US': 'https://andrusyshyn.vercel.app/en',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
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
          title="Taras Andrusyshyn | Blog (RSS)"
          href="https://andrusyshyn.vercel.app/en/feed.xml"
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

