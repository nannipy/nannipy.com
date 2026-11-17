import Link from "next/link";

export default function NotFound() {
    return (
        <main id="main-content" className="flex flex-col items-center justify-center h-screen gap-6">
            <h1 className="text-4xl font-bold text-white">This page doesn’t exist.</h1>
            <Link href="/" className="text-link">Back to the homepage ↗︎</Link>
        </main>
    );
}
