"use client";

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
import { QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import ModalInfo from './modalInfo';

export default function Header() {

    const cancelButtonInfoRef = useRef(null)
    const [modalInfoOpen, setModalInfoOpen] = useState(true)
    const [isLoadingAnimated, setIsLoadingAnimated] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setIsLoadingAnimated(true);
        }, 500);

        return () => clearTimeout(animationTimeout);
    }, []);

    return (
        <>
            <div className={`fixed inset-0 flex flex-col justify-center items-center scale-150 bg-black w-full h-full text-white transition-transform ease-in-out duration-1000 ${isLoadingAnimated ? '-translate-y-double-full rounded-b-full' : ''}`} style={{ zIndex: 101 }}>
                <p className={`font-normal text-4xl select-none transition-opacity ease-in-out ${isLoadingAnimated ? 'opacity-50' : null}`}>Hi.</p>
                <p className={`font-extralight flex flex-row justify-center items-center text-xs select-none transition-opacity ease-in-out ${isLoadingAnimated ? 'opacity-50' : null}`}>
                    <svg aria-hidden="true" className="w-[12px] h-[12px] animate-spin dark:text-gray-600 fill-[#E40000] mr-1" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    Loading...
                </p>
            </div>
            <div className='col-span-12 grid grid-cols-12 z-10'>
                <div className="col-span-9">
                    <a href={`/`} className='inline-block sm:hidden'>
                        <svg className='w-[78px] h-[44px] hover:scale-105 transition-transform ease-in-out duration-150 group inline-block sm:hidden' width="291" height="168" viewBox="0 0 291 168" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-[#E40000] group-hover:fill-white' d="M0.730713 0H38.4107L55.2107 120.24H55.6907L72.4905 0H110.17V168H85.2105V40.8H84.7305L65.5305 168H43.4507L24.2507 40.8H23.7707V168H0.730713V0ZM129.871 0H156.271V144H199.711V168H129.871V0ZM212.371 0H251.251C264.371 0 274.211 3.52 280.771 10.56C287.331 17.6 290.611 27.92 290.611 41.52V58.08C290.611 71.6802 287.331 82.0002 280.771 89.04C274.211 96.0798 264.371 99.6 251.251 99.6H238.771V168H212.371V0ZM251.251 75.6C255.571 75.6 258.771 74.4 260.851 72C263.091 69.6 264.211 65.52 264.211 59.76V39.84C264.211 34.08 263.091 30 260.851 27.6C258.771 25.2 255.571 24 251.251 24H238.771V75.6H251.251Z" />
                        </svg>
                    </a>
                    <a href={`/`} className='hidden sm:inline-block'>
                        <svg className='w-[250px] h-[44px] hover:scale-105 transition-transform ease-in-out duration-150 group hidden sm:inline-block' viewBox="0 0 1019 174" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-[#E40000] group-hover:fill-white' d="M0.840088 3.0001H27.2401V147H70.6801V171H0.840088V3.0001ZM83.3401 3.0001H109.74V171H83.3401V3.0001ZM150.152 27.0001H122.552V3.0001H204.152V27.0001H176.552V171H150.152V27.0001ZM239.918 27.0001H212.318V3.0001H293.918V27.0001H266.318V171H239.918V27.0001ZM306.7 3.0001H333.1V147H376.54V171H306.7V3.0001ZM389.2 3.0001H461.2V27.0001H415.6V71.4001H451.84V95.4001H415.6V147H461.2V171H389.2V3.0001ZM514.825 3.0001H553.705C566.824 3.0001 576.664 6.52013 583.225 13.5601C589.785 20.6001 593.065 30.9201 593.065 44.5201V61.0801C593.065 74.6803 589.785 85.0003 583.225 92.0401C576.664 99.0799 566.824 102.6 553.705 102.6H541.225V171H514.825V3.0001ZM553.705 78.6001C558.025 78.6001 561.225 77.4001 563.305 75.0001C565.545 72.6001 566.665 68.5201 566.665 62.7601V42.8401C566.665 37.0801 565.545 33.0001 563.305 30.6001C561.225 28.2001 558.025 27.0001 553.705 27.0001H541.225V78.6001H553.705ZM607.404 3.0001H646.524C660.12 3.0001 670.044 6.20009 676.284 12.6001C682.524 18.8401 685.644 28.5201 685.644 41.6401V51.9601C685.644 69.4003 679.884 80.4403 668.364 85.0801V85.5601C674.76 87.4801 679.242 91.3999 681.804 97.3201C684.522 103.24 685.884 111.16 685.884 121.08V150.6C685.884 155.4 686.04 159.32 686.364 162.36C686.682 165.24 687.48 168.12 688.764 171H661.884C660.924 168.28 660.282 165.72 659.964 163.32C659.64 160.92 659.484 156.6 659.484 150.36V119.64C659.484 111.96 658.2 106.6 655.644 103.56C653.244 100.52 649.002 99.0001 642.924 99.0001H633.804V171H607.404V3.0001ZM643.404 75.0001C648.684 75.0001 652.602 73.6399 655.164 70.9201C657.882 68.2003 659.244 63.6403 659.244 57.2401V44.2801C659.244 38.2001 658.122 33.8001 655.884 31.0801C653.802 28.3601 650.442 27.0001 645.804 27.0001H633.804V75.0001H643.404ZM704.202 3.0001H730.602V171H704.202V3.0001ZM784.692 173.4C771.894 173.4 762.21 169.8 755.652 162.6C749.094 155.24 745.812 144.76 745.812 131.16V121.56H770.772V133.08C770.772 143.96 775.332 149.4 784.452 149.4C788.934 149.4 792.294 148.12 794.532 145.56C796.932 142.84 798.132 138.52 798.132 132.6C798.132 125.56 796.53 119.4 793.332 114.12C790.134 108.68 784.212 102.2 775.572 94.6801C764.694 85.0801 757.092 76.4401 752.772 68.7601C748.452 60.9199 746.292 52.1201 746.292 42.3601C746.292 29.0801 749.652 18.8401 756.372 11.6401C763.092 4.28009 772.854 0.600098 785.652 0.600098C798.294 0.600098 807.81 4.28009 814.212 11.6401C820.77 18.8401 824.052 29.2401 824.052 42.8401V49.8001H799.092V41.1601C799.092 35.4001 797.97 31.2401 795.732 28.6801C793.494 25.9601 790.212 24.6001 785.892 24.6001C777.09 24.6001 772.692 29.9601 772.692 40.6801C772.692 46.7601 774.294 52.4401 777.492 57.7201C780.852 63.0001 786.852 69.4003 795.492 76.9201C806.532 86.5201 814.134 95.2399 818.292 103.08C822.45 110.92 824.532 120.12 824.532 130.68C824.532 144.44 821.094 155 814.212 162.36C807.492 169.72 797.652 173.4 784.692 173.4ZM877.83 173.4C864.87 173.4 854.946 169.72 848.07 162.36C841.188 155 837.75 144.6 837.75 131.16V42.8401C837.75 29.4001 841.188 19.0001 848.07 11.6401C854.946 4.28009 864.87 0.600098 877.83 0.600098C890.79 0.600098 900.708 4.28009 907.59 11.6401C914.466 19.0001 917.91 29.4001 917.91 42.8401V131.16C917.91 144.6 914.466 155 907.59 162.36C900.708 169.72 890.79 173.4 877.83 173.4ZM877.83 149.4C886.95 149.4 891.51 143.88 891.51 132.84V41.1601C891.51 30.1201 886.95 24.6001 877.83 24.6001C868.71 24.6001 864.15 30.1201 864.15 41.1601V132.84C864.15 143.88 868.71 149.4 877.83 149.4ZM935.76 3.0001H968.88L994.56 103.56H995.04V3.0001H1018.56V171H991.44L959.76 48.3601H959.28V171H935.76V3.0001Z" />
                        </svg>
                    </a>
                </div >
                <div className="col-span-3 text-right">
                    <div className='rounded-xl inline-flex gap-2 p-1 bg-blood drop-shadow-2xl w-fit max-h-11'>
                        <QuestionMarkCircleIcon className="h-9 w-9 animate-pulse text-black hover:text-white cursor-pointer " aria-hidden="true"
                            onClick={() => setModalInfoOpen(true)}
                        />
                        <Link href={`/about`}>
                            <UserCircleIcon className="h-9 w-9 text-black hover:text-white cursor-pointer" aria-hidden="true" />
                        </Link>
                    </div>
                </div >
                <ModalInfo modalInfoOpen={modalInfoOpen} setModalInfoOpen={setModalInfoOpen} cancelButtonInfoRef={cancelButtonInfoRef} />
            </div>
        </>
    )
}