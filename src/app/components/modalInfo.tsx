import { Fragment, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { DocumentIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function ModalInfo({ modalInfoOpen, setModalInfoOpen, cancelButtonInfoRef }: { modalInfoOpen: boolean, setModalInfoOpen: any, cancelButtonInfoRef: any }) {

    useEffect(() => {
        document.body.addEventListener('keydown', moveListenKeyboard);
        return () => {
            document.body.removeEventListener('keydown', moveListenKeyboard)
        }
    })

    const moveListenKeyboard = (event: KeyboardEvent) => {
        if (event != null || event != undefined) {
            setModalInfoOpen(false);
        }
    }

    return (
        <Transition.Root show={modalInfoOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" initialFocus={cancelButtonInfoRef} onClose={setModalInfoOpen}>
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
                            <Dialog.Panel className="relative h-1/4 transform overflow-hidden rounded-lg bg-slate-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                                <div className="bg-slate-800 px-6 pb-6 pt-5 sm:p-8 sm:pb-8">
                                    <div className="sm:grid sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="mb-5 text-2xl text-center font-semibold leading-6 pl-4 pr-4 text-white">
                                                How to discover the projects?
                                            </Dialog.Title>
                                            <div className='grid grid-cols-12 gap-0 p-4 h-full'>
                                                <div className="col-span-6 pl-6 pr-6 text-center">
                                                    <Image
                                                        src="/images/tutorials/1.svg"
                                                        alt="Tutorial 1"
                                                        title="Tutorial 1"
                                                        className="inline"
                                                        width={180}
                                                        height={120}
                                                    />
                                                    <ol className="text-lg mt-2 text-justify font-medium text-white list-decimal">
                                                        <li>Use your arrow keyboard to navigate the character across the map.</li>
                                                    </ol>
                                                </div>
                                                <div className="col-span-6 pl-6 pr-6 text-center">
                                                    <Image
                                                        src="/images/tutorials/2.svg"
                                                        alt="Tutorial 1"
                                                        title="Tutorial 1"
                                                        className="inline"
                                                        width={180}
                                                        height={120}
                                                    />
                                                    <ol className="text-lg mt-2 text-justify font-medium text-white list-decimal " start={2}>
                                                        <li>Locate the Light Blup to discover the projects by using the arrow keys.</li>
                                                    </ol>
                                                </div>
                                                <div className="col-span-6 pl-6 pr-6 text-center mt-2">
                                                    <Image
                                                        src="/images/tutorials/3.svg"
                                                        alt="Tutorial 1"
                                                        title="Tutorial 1"
                                                        className="inline"
                                                        width={180}
                                                        height={120}
                                                    />
                                                    <ol className="text-lg mt-2 text-justify font-medium text-white list-decimal" start={3}>
                                                        <li>Position the character precisely over where the Light Blup is located.</li>
                                                    </ol>
                                                </div>
                                                <div className="col-span-6 pl-6 pr-6 text-center mt-2">
                                                    <Image
                                                        src="/images/tutorials/4.svg"
                                                        alt="Tutorial 1"
                                                        title="Tutorial 1"
                                                        className="inline"
                                                        width={180}
                                                        height={120}
                                                    />
                                                    <ol className="text-lg mt-2 text-justify font-medium text-white list-decimal" start={4}>
                                                        <li>Show the projects by pressing Enter or left-clicking with your mouse.</li>
                                                    </ol>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='absolute top-3 right-3 text-2xl rounded-full p-2 bg-black/20 text-blood hover:text-white cursor-pointer' tabIndex={1} onClick={() => setModalInfoOpen(false)}>
                                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}