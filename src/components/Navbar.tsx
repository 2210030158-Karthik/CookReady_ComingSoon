import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-nav">
            <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto w-full">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-[#154212] text-white flex items-center justify-center rounded-xl w-10 h-10 font-bold text-xl font-sans tracking-tight group-hover:scale-105 transition-transform">CR</div>
                    <span className="text-2xl font-bold font-sans tracking-tight text-[#154212]">CookReady</span>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <Link className="text-[0.75rem] font-label tracking-widest uppercase text-[#1a1c1b]/60 hover:text-secondary transition-colors duration-300" href="/story">Our Story</Link>
                    <Link className="text-[0.75rem] font-label tracking-widest uppercase text-[#1a1c1b]/60 hover:text-secondary transition-colors duration-300" href="/process">The Process</Link>
                    <Link className="text-[0.75rem] font-label tracking-widest uppercase text-[#1a1c1b]/60 hover:text-secondary transition-colors duration-300" href="/sustainability">Sustainability</Link>
                </div>
                <Link
                    href="/#waitlist-section"
                    className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-[0.75rem] font-label tracking-widest uppercase font-semibold hover:scale-95 transition-all duration-200">
                    Join Waitlist
                </Link>
            </div>
        </nav>
    );
}
