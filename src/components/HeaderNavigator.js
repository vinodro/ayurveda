"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNavigator() {
    const pathname = usePathname()

    if(pathname !== "/") {
        return ( 
        <div className="p-4">
            <ul style={{ display: "flex", gap: "10px", listStyleType: "none" }}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/protocols">Protocols</Link>
            </li>
            <li>
                <Link href="/trials">Trials</Link>
            </li>
            </ul>
        </div>
        );
    } else {
        return null;
    }
}
