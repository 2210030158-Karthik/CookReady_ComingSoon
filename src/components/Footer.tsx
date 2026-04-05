import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#eeeeeb] dark:bg-[#121413] w-full flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-4">
            <div className="text-[0.75rem] font-sans tracking-tight text-[#154212] dark:text-[#2d5a27] opacity-70">
                © 2024 Cook Ready Culinary Atelier. Precision in every cut.
            </div>
            <div className="flex gap-8">
                <Link className="text-[0.75rem] font-sans tracking-tight text-[#154212] dark:text-[#2d5a27] opacity-70 hover:opacity-100 transition-opacity" href="#">Privacy</Link>
                <Link className="text-[0.75rem] font-sans tracking-tight text-[#154212] dark:text-[#2d5a27] opacity-70 hover:opacity-100 transition-opacity" href="#">Terms</Link>
                <Link className="text-[0.75rem] font-sans tracking-tight text-[#154212] dark:text-[#2d5a27] opacity-70 hover:opacity-100 transition-opacity" href="#">Wholesale</Link>
            </div>
        </footer>
    );
}
