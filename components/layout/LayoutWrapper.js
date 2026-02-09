"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({ navbar, footer, children }) {
    const pathname = usePathname();

    // Define routes where navbar and footer should be hidden
    // We check if the pathname starts with /login or /signup to handle strict matches
    // or potential sub-routes if they existed, but exact match is usually safer for auth pages
    const isAuthPage = pathname === "/login" || pathname === "/signup";

    return (
        <>
            {!isAuthPage && navbar}
            {children}
            {!isAuthPage && footer}
        </>
    );
}
