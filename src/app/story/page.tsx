export default function StoryPage() {
    return (
        <main className="pt-32 px-8 flex-grow flex items-center bg-surface">
            <div className="max-w-screen-md mx-auto text-center py-20">
                <span className="inline-block px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed-variant font-label text-[0.7rem] tracking-[0.2em] uppercase font-bold rounded-full mb-6">
                    Origins
                </span>
                <h1 className="font-headline text-5xl md:text-7xl text-primary mb-8">Our Story</h1>
                <p className="text-xl text-on-surface-variant leading-relaxed">
                    From a tiny local kitchen to your daily prep routine. We started CookReady because we believe that the joy of eating shouldn't be outweighed by the chore of chopping. Our mission is to bridge the gap between fresh, healthy ingredients and busy, modern lifestyles.
                </p>
            </div>
        </main>
    );
}
