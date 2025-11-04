import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const title = 'AI Influencer Studio';
const description =
  'Generate daily Instagram posts and video plans tailored for your virtual influencer brand.';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://agentic-4064c032.vercel.app'),
  openGraph: {
    title,
    description,
    url: 'https://agentic-4064c032.vercel.app',
    siteName: 'AI Influencer Studio',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} bg-[#0B0616] font-body text-slate-100 antialiased selection:bg-brand/40 selection:text-white`}
      >
        <div className="min-h-screen bg-grid">
          <div className="absolute left-1/2 top-[-25%] -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl opacity-70" />
          {children}
        </div>
      </body>
    </html>
  );
}
