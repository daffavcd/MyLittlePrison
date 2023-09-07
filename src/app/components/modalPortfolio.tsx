import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { DocumentIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ImageCarousel from './parts/imageCarousel';
import Link from 'next/link'

export default function ModalPortfolio({ portfolio, modalOpen, setModalOpen, cancelButtonRef }: { portfolio: any, modalOpen: boolean, setModalOpen: any, cancelButtonRef: any }) {
    return (

        <Transition.Root show={modalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setModalOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity" style={{ background: "#00000087" }} />
                </Transition.Child>

                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-full justify-center p-4 text-center items-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative h-1/4 transform overflow-hidden rounded-lg bg-slate-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                                <div className="bg-slate-800 px-6 pb-6 pt-5 sm:p-8 sm:pb-8">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-xl sm:text-2xl text-center font-semibold leading-8 pl-4 pr-4 text-white">
                                                {portfolio.title}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <ImageCarousel images={portfolio.imagesPath} />
                                                <p className="text-base text-justify mt-3 text-white indent-8 break-all sm:break-normal">
                                                    {portfolio.desc}&nbsp;
                                                    {portfolio.repoLink == "Private" ? (
                                                        <span className='text-red-600 text-sm italic inline hover:text-white cursor-pointer'>[Private - {portfolio.year}]</span>
                                                    ) : (
                                                        <Link href={portfolio.repoLink} className='text-red-600 text-sm italic inline hover:text-white' tabIndex={2} target="_blank" rel="noopener noreferrer">[{portfolio.repoLink} - {portfolio.year}]</Link>
                                                    )}

                                                    .
                                                </p>
                                                <p className="text-lg mt-2 text-left font-semibold text-white">
                                                    Key Features :
                                                </p>
                                                <div className='grid mt-2 gap-0 grid-cols-1 pl-7 pr-7 text-white'>
                                                    <ul className="list-disc text-left">
                                                        {portfolio.features.map((feature: string) => (
                                                            <li key={feature}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <p className="text-lg mt-2 text-left font-semibold text-white">
                                                    Technologies :
                                                </p>
                                                <div className='mt-2 pl-7 pr-7 flex justify-start items-start gap-2 flex-wrap'>
                                                    {portfolio.techImagesPath.map((tech: string) => (
                                                        <Image
                                                            src={`/images/langs/${tech}.svg`}
                                                            className='rounded w-12 h-12'
                                                            title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                                                            alt={tech.charAt(0).toUpperCase() + tech.slice(1)}
                                                            key={tech}
                                                            height={50}
                                                            width={50}
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute top-3 right-3 text-2xl rounded-full p-2 bg-black/20 text-blood hover:text-white cursor-pointer' tabIndex={1} onClick={() => setModalOpen(false)}>
                                    <XMarkIcon className="h-5 w-5 sm:h-8 sm:w-8" aria-hidden="true" />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}