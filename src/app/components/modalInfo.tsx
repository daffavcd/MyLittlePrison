import { Fragment, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

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
            <Dialog as="div" className="relative" style={{ zIndex: "70" }} initialFocus={cancelButtonInfoRef} onClose={setModalInfoOpen}>
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
                            <Dialog.Panel className="relative h-1/4 transform overflow-hidden rounded-lg border-modal-mlp bg-modal-mlp text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                                <div className="grid-cols-12 absolute h-full w-full pl-12 pr-12 hidden lg:grid">
                                    <div className='col-span-6 border-modal-mlp-2' />
                                    <div className='col-span-6 border-modal-mlp-2' />
                                </div>
                                <div className="bg-modal-mlp px-1 sm:px-6 pb-6 pt-5 sm:p-8 sm:pb-8">
                                    <div className="sm:grid sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="mb-5 text-2xl text-center font-semibold leading-6 pl-6 pr-6 text-white z-80 relative">
                                                How to discover the projects?
                                            </Dialog.Title>
                                            <div className='border-modal-mlp-2 -mx-6 my-3' />
                                            <div className='grid grid-cols-12 p-3 h-full'>
                                                <div className="col-span-6 pl-4 pr-4 sm:pl-6 sm:pr-6 text-center z-80 relative">
                                                    <Image
                                                        src="/images/tutorials/1.svg"
                                                        alt="Tutorial 1"
                                                        title="Tutorial 1"
                                                        className="hidden lg:inline"
                                                        width={180}
                                                        height={120}
                                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                                                        placeholder="blur"
                                                        style={{
                                                            width: "180px",
                                                            height: "120px",
                                                        }}
                                                    />
                                                    <Image
                                                        src="/images/tutorials/swipe-3.svg"
                                                        alt="Tutorial 1"
                                                        title="Tutorial 1"
                                                        className="inline lg:hidden"
                                                        width={180}
                                                        height={120}
                                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                                                        placeholder="blur"
                                                        style={{
                                                            width: "180px",
                                                            height: "120px",
                                                        }}
                                                    />
                                                    <ol className="text-lg mt-2 text-left font-medium text-white list-decimal tracking-tight">
                                                        <li className='break-normal hidden lg:list-item'>Use your arrow keyboard to navigate the character across the map.</li>
                                                        <li className='break-normal list-item lg:hidden'>Try to swipe inside the box to move.</li>
                                                    </ol>
                                                </div>
                                                <div className="col-span-6 pl-4 pr-4 sm:pl-6 sm:pr-6 text-center z-80 relative">
                                                    <Image
                                                        src="/images/tutorials/2.svg"
                                                        alt="Tutorial 2"
                                                        title="Tutorial 2"
                                                        className="inline"
                                                        width={180}
                                                        height={120}
                                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                                                        placeholder="blur"
                                                        style={{
                                                            width: "180px",
                                                            height: "120px",
                                                        }}
                                                    />
                                                    <ol className="text-lg mt-2 text-left font-medium text-white list-decimal tracking-tight" start={2}>
                                                        <li className='break-normal hidden lg:list-item'>Find the Light Bulbs to discover the projects by using the arrow keys.</li>
                                                        <li className='break-normal list-item lg:hidden'>Find the Light Bulbs all over the map.</li>
                                                    </ol>
                                                </div>

                                                <div className="col-span-6 pl-4 pr-4 sm:pl-6 sm:pr-6 text-center mt-2 z-80 relative">
                                                    <Image
                                                        src="/images/tutorials/3.svg"
                                                        alt="Tutorial 3"
                                                        title="Tutorial 3"
                                                        className="inline"
                                                        width={180}
                                                        height={120}
                                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                                                        placeholder="blur"
                                                        style={{
                                                            width: "180px",
                                                            height: "120px",
                                                        }}
                                                    />
                                                    <ol className="text-lg mt-2 text-left font-medium text-white list-decimal tracking-tight" start={3}>
                                                        <li className='break-normal hidden lg:list-item'>Position the character precisely over where the Light Bulb is located.</li>
                                                        <li className='break-normal list-item lg:hidden'>Position the character near the Bulb.</li>
                                                    </ol>
                                                </div>
                                                <div className="col-span-6 pl-4 pr-4 sm:pl-6 sm:pr-6 text-center mt-2 z-80 relative">
                                                    <Image
                                                        src="/images/tutorials/4.svg"
                                                        alt="Tutorial 4"
                                                        title="Tutorial 4"
                                                        className="hidden lg:inline"
                                                        width={180}
                                                        height={120}
                                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                                                        placeholder="blur"
                                                        style={{
                                                            width: "180px",
                                                            height: "120px",
                                                        }}
                                                    />
                                                    <Image
                                                        src="/images/tutorials/4-tap.svg"
                                                        alt="Tutorial 4"
                                                        title="Tutorial 4"
                                                        className="inline lg:hidden"
                                                        width={180}
                                                        height={120}
                                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                                                        placeholder="blur"
                                                        style={{
                                                            width: "180px",
                                                            height: "120px",
                                                        }}
                                                    />
                                                    <ol className="text-lg mt-2 text-left font-medium text-white list-decimal tracking-tight" start={4}>
                                                        <li className='break-normal hidden lg:list-item'>Show the projects by pressing Enter or left-clicking with your mouse.</li>
                                                        <li className='break-normal list-item lg:hidden'>Press the Light Bulb to show the projects.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className='border-modal-mlp-2 -mx-6 my-3' />
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute top-3 right-3 text-2xl rounded-full p-2 bg-black/20 text-blood hover:text-white cursor-pointer z-80' tabIndex={1} onClick={() => setModalInfoOpen(false)}>
                                    <XMarkIcon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}