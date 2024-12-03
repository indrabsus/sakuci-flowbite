// import Link from "next/link";

import Image from "next/image";

export default function Jumbotron() {
    return (
<section
    className="bg-gray-900 dark:bg-gray-900 relative bg-repeat bg-center"
    style={{
        backgroundImage: 'url("/woke.jpg")',
        backgroundBlendMode: 'overlay',
    }}
>
    <div className="max-w-screen-xl px-4 mx-auto mt-11 pt-11 flex flex-col items-center text-center lg:grid lg:gap-8 lg:grid-cols-12 lg:text-left">
        <div className="lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-300">
                Wujudkan Mimpimu di Sekolah Kami
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
                Kami sudah mencetak banyak lulusan yang siap bersaing di dunia kerja. Apakah kamu ingin bergabung dengan
                kami?
            </p>
            <a
                href="#"
                className="hidden lg:flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-200 border border-gray-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
                Daftar PPDB
                <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </a>
        </div>

        <div className="hidden lg:flex lg:col-span-5">
            <Image src="/jt.png" alt="mockup" width={500} height={500} />
        </div>
    </div>
</section>



    )
}