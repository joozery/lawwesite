import { Footer } from './footer';

export function DefaultPageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="flex-grow relative">
                {children}
            </main>
            <Footer />
        </>
    );
}

