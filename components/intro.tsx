"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const {ref} = useSectionInView("Home", 0.5)
    
    return (
        <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[28rem]' id='home'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{type: 'tween', duration: 0.2}}
                    >
                        <Image src="data:image/jpeg;base64,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"
                            alt="Test profile picture"
                            width="192"
                            height="192"
                            quality="100"
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                        <motion.span className='absolute bottom-0 right-0 text-4xl'
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                        >
                            👋
                        </motion.span>
                    </motion.div>
                </div>
            </div>

            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            >
                <span className='font-bold'>Hello I'm Vasudeo.</span> I'am a{" "} <span className='font-bold'>backend developer</span> with{" "}
                with <span className='font-bold'>2+ years</span> of experience. I enjoy building <span className='italic'>frontend and backend apps</span>.
            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 0.1
            }}
            >
                <Link href="#contact"
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                >
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>

                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
                href='/CV.pdf'
                download
                >Download CV <HiDownload 
                className='opacity-70 group-hover:translate-y-1 transition'
                /></a>

                <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950'
                href='https://www.linkedin.com/in/vasudeo-gaichor' target='_blank'
                ><BsLinkedin /></a>

                <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950'
                href='https://www.github.com/vasudeogaichor' target='_blank'
                ><FaGithubSquare /></a>
            </motion.div>
        </section>
    )
}
