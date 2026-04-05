export default function ProcessPage() {
    return (
        <main className="pt-32 px-8 flex-grow flex items-center bg-surface-container-low">
            <div className="max-w-screen-md mx-auto text-center py-20">
                <span className="inline-block px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant font-label text-[0.7rem] tracking-[0.2em] uppercase font-bold rounded-full mb-6">
                    Behind the Scenes
                </span>
                <h1 className="font-headline text-5xl md:text-7xl text-primary mb-8">The Process</h1>
                <p className="text-xl text-on-surface-variant leading-relaxed">
                    Every morning, our chefs receive the freshest produce straight from local farms. We meticulously wash, sort, and portion every ingredient with surgical precision. Cold-chain technologies ensure that your ingredients remain perfectly crisp until they hit your pan.
                </p>
            </div>
        </main>
    );
}
