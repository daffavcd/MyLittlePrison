import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import ImageCarousel from './parts/imageCarousel';

export default function ModalPortfolio({ portfolio, modalOpen, setModalOpen, cancelButtonRef }: { portfolio: any, modalOpen: boolean, setModalOpen: any, cancelButtonRef: any }) {

    const theDescs = portfolio.desc.split("<break>");
    let descIteration = 0;

    return (

        <Transition.Root show={modalOpen} as={Fragment}>
            <Dialog as="div" className="relative" style={{ zIndex: "70" }} initialFocus={cancelButtonRef} onClose={setModalOpen}>
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

                <div className="fixed inset-0 z-50 overflow-y-auto no-scrollbar">
                    <div className={`absolute top-[50%] right-[5%] z-50 hidden xl:block animate-pulse-arrow-down`}>
                        <ChevronDoubleDownIcon className="arrow-slide-down-red-mlp shadow-2xl" aria-hidden="true" />
                    </div>
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
                            <Dialog.Panel className="relative h-1/4 transform overflow-hidden rounded-lg border-modal-mlp bg-modal-mlp text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                                <div className="grid-cols-12 absolute h-full w-full pl-12 pr-12 hidden lg:grid">
                                    <div className='col-span-3 border-modal-mlp-2' />
                                    <div className='col-span-3 border-modal-mlp-2' />
                                    <div className='col-span-3 border-modal-mlp-2' />
                                    <div className='col-span-3 border-modal-mlp-2' />
                                </div>
                                <div className="bg-modal-mlp px-6 pb-6 pt-5 sm:pb-8">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-xl sm:text-2xl text-center font-semibold leading-8 pl-6 pr-6 text-white z-80 relative">
                                                {portfolio.title}
                                            </Dialog.Title>
                                            <div className='border-modal-mlp-2 -mx-6 my-3' />
                                            <div className="mt-2 text-base text-left sm:text-justify text-white break-words">
                                                <ImageCarousel images={portfolio.imagesPath} />
                                                {theDescs.map((desc: string, key: number) => (
                                                    <p className={`mt-3 z-80 relative ${0 === descIteration ? 'sm:indent-8' : ''}`} id={`desc-${descIteration++}`} key={key}>
                                                        {desc}
                                                        {theDescs.length === descIteration && (
                                                            portfolio.repoLink === "Private" ? (
                                                                <span className='text-red-600 text-sm italic break-all inline hover:text-white cursor-pointer'>
                                                                    &nbsp;[Private - {portfolio.year}].
                                                                </span>
                                                            ) : (
                                                                <a href={portfolio.repoLink} className='text-red-600 break-all text-sm italic inline hover:text-white' tabIndex={2} target="_blank" rel="noopener noreferrer">
                                                                    &nbsp;[{portfolio.repoLink} - {portfolio.year}].
                                                                </a>
                                                            )
                                                        )}
                                                    </p>
                                                ))}
                                                <div className='border-modal-mlp-2 -mx-6 my-3' />
                                                <p className="text-lg text-left font-semibold text-white z-80 relative">
                                                    Key Features :
                                                </p>
                                                <div className='grid mt-2 gap-0 grid-cols-1 pl-7 pr-7 text-white'>
                                                    <ul className="list-disc text-left">
                                                        {portfolio.features.map((feature: string) => (
                                                            <li className='z-80 relative' key={feature}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='border-modal-mlp-2 -mx-6 my-3' />
                                                <p className="text-lg text-left font-semibold text-white z-80 relative">
                                                    Technologies :
                                                </p>
                                                <div className='mt-2 pl-7 pr-7 flex justify-start items-start gap-2 flex-wrap z-80 relative'>
                                                    {portfolio.techImagesPath.map((tech: string) => (
                                                        <Image
                                                            src={`/images/langs/${tech}.svg`}
                                                            className='rounded w-12 h-12'
                                                            title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                                                            alt={tech.charAt(0).toUpperCase() + tech.slice(1)}
                                                            key={tech}
                                                            height={50}
                                                            width={50}
                                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                                                            placeholder="blur"
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <div className='border-modal-mlp-2 -mx-6 my-3' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute top-3 right-3 text-2xl rounded-full p-2 bg-black/20 text-blood hover:text-white cursor-pointer z-80' tabIndex={1} onClick={() => setModalOpen(false)}>
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