import Image from 'next/image'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

export default function HeaderAbout() {

    return (
        <>
            <div className='pt-7 pr-10 pb-5 pl-10 sticky top-0 left-0 right-0 z-10 '>
                <div className='grid grid-cols-12'>
                    <div className="col-span-9 z-10">
                        <Image
                            src="/images/logo.svg"
                            width={250}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div >
                    <div className="col-span-3 z-10 text-right">
                        <div className='rounded-xl inline-flex gap-2 p-1 bg-blood shadow-2xl w-fit max-h-11'>
                            <Link href={`/`}>
                                <ArrowUturnLeftIcon className="h-9 w-9 text-black hover:text-white cursor-pointer" aria-hidden="true" />
                            </Link>
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}