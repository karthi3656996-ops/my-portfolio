import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Karthikeyan M — AI Engineer & ML Developer',
  description:
    'Personal portfolio of Karthikeyan M, a B.Tech AI & ML student specializing in Machine Learning, Computer Vision, Generative AI, and Full Stack AI development.',
  keywords: [
    'Karthikeyan M',
    'AI Engineer',
    'Machine Learning',
    'Computer Vision',
    'Portfolio',
    'Next.js',
    'Python',
    'Deep Learning',
  ],
  authors: [{ name: 'Karthikeyan M' }],
  creator: 'Karthikeyan M',
  openGraph: {
    type: 'website',
    title: 'Karthikeyan M — AI Engineer & ML Developer',
    description:
      'Personal portfolio of Karthikeyan M — AI, ML, Computer Vision, and Full Stack AI Developer.',
    siteName: 'Karthikeyan M Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthikeyan M — AI Engineer & ML Developer',
    description: 'AI, ML, Computer Vision, Generative AI & Full Stack Developer.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-[#080808] text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
