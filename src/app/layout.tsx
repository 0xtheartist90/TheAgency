import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { fireflies, geistMono, geistSans } from '@/app/fonts';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

export const metadata: Metadata = {
    title: 'The Agency',
    description: 'High-end creative, brand systems, and campaign design for modern growth brands.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${fireflies.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ThemeProvider attribute='class'>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
