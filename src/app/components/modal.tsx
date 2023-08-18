import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Carousel } from 'flowbite-react';

export default function Modal({ modalOpen, setModalOpen, cancelButtonRef }: { modalOpen: boolean, setModalOpen: any, cancelButtonRef: any }) {
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
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative h-96 transform overflow-hidden rounded-lg bg-slate-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                                <div className="bg-slate-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationCircleIcon className="h-6 w-6 text-blood" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-white">
                                                My Desired Utopias
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-white">
                                                    PWA Front-End Catalog Restaurant Using Webpack, Hapi, Automation Testing and pure css,js.
                                                </p>
                                                <div>
                                                    <Carousel className='z-60'>
                                                        <Image
                                                            alt="Portfolio"
                                                            className='z-60 static'
                                                            src="/images/portfolios/resto_1.png"
                                                            fill={true}
                                                            style={{
                                                                objectFit: 'cover',
                                                                height: '100%',
                                                                width: '100%',
                                                            }}
                                                        />
                                                        <Image
                                                            alt="Portfolio"
                                                            className='z-60 static'
                                                            src="/images/portfolios/resto_2.png"
                                                            fill={true}
                                                            style={{
                                                                objectFit: 'cover',
                                                                height: '100%',
                                                                width: '100%',
                                                            }}
                                                        />
                                                    </Carousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded bg-blood px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}