import type { Metadata } from 'next';
import { DM_Serif_Display, Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ceiue.org'),
  title: {
    default: "CEIUE — Transformer l'enseignement supérieur africain",
    template: '%s | CEIUE',
  },
  description:
    "CEIUE accompagne les États africains dans la construction de systèmes de formation alignés sur leurs besoins, leurs talents et leurs ambitions internationales.",
  keywords: [
    'CEIUE',
    'enseignement supérieur Afrique',
    'souveraineté des compétences',
    'authentification diplômes',
    'bourses ciblées',
    'retour des talents',
    'ingénierie universitaire',
  ],
  authors: [{ name: 'CEIUE — Ingénierie Universitaire Stratégique' }],
  creator: 'CEIUE',
  publisher: 'CEIUE',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ceiue.org',
    siteName: 'CEIUE',
    title: "CEIUE — Transformer l'enseignement supérieur africain",
    description:
      "Accompagner les États africains dans la transformation stratégique de leur enseignement supérieur : offre de formation, diplômes, bourses ciblées et rétention des talents.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "CEIUE — Transformer l'enseignement supérieur africain",
    description:
      "Accompagner les États africains dans la transformation stratégique de leur enseignement supérieur.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${dmSerif.variable} ${manrope.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var origStringify = JSON.stringify;
                  JSON.stringify = function(value, replacer, space) {
                    var seen = new WeakSet();
                    return origStringify(value, function(key, val) {
                      if (val !== null && typeof val === 'object') {
                        if (typeof Node !== 'undefined' && val instanceof Node) {
                          return '<' + (val.nodeName || 'Node').toLowerCase() + '>';
                        }
                        if (typeof Window !== 'undefined' && val instanceof Window) {
                          return '[Window]';
                        }
                        if (key && (key.indexOf('__reactFiber') === 0 || key.indexOf('__reactInternal') === 0)) {
                          return undefined;
                        }
                        if (seen.has(val)) {
                          return '[Circular]';
                        }
                        seen.add(val);
                      }
                      if (typeof replacer === 'function') {
                        return replacer(key, val);
                      }
                      return val;
                    }, space);
                  };
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#07111F] text-[#142131] antialiased selection:bg-[#C7A45D] selection:text-[#07111F]"
      >
        {children}
      </body>
    </html>
  );
}
