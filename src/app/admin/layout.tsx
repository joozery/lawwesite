'use client';

import { Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Noto_Sans_Thai({
    subsets: ["thai", "latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={notoSansThai.className}>
            {children}
        </div>
    );
}
