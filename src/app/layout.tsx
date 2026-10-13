import type {Metadata} from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const clean = () => {
                  document.querySelectorAll('[data-rdext-a11y]').forEach(el => {
                    el.removeAttribute('data-rdext-a11y');
                  });
                };
                clean();
                const obs = new MutationObserver(clean);
                obs.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['data-rdext-a11y'] });
                window.addEventListener('load', () => setTimeout(() => obs.disconnect(), 2000));
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
