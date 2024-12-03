import Image from "next/image";

export default function Content(){
    return (
        <section
    className="bg-gray-200 relative bg-repeat bg-center py-11"
    style={{
        backgroundImage: 'url("/woke.jpg")',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparansi 50%
        backgroundBlendMode: 'overlay',
    }}
>
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="grid grid-cols-2 gap-4 mt-8">
    <Image
        className="hidden lg:block w-full rounded-lg shadow-2xl"
        src="/wow.png"
        alt="office content 1"
        width={500}
        height={500}
    />
    <Image
        className="hidden lg:block mt-4 w-full lg:mt-10 rounded-lg shadow-2xl"
        src="/anak.jpg"
        alt="office content 2"
        width={500}
        height={500}
    />
</div>

        <div className="font-light text-gray-800 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didnt reinvent the wheel</h2>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        
    </div>
</section>
    )
}