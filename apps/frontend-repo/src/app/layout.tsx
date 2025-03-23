import { Providers } from '@src/components/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
