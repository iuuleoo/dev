"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'
import  tutor2  from '../../../public/perfil.jpg'


import Image from 'next/image'



const testimonials = [
    {
        content:
            "Desde que comecei a levar a Luna para banho e tosa, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
        author: "Mariana Souza",
        role: "Tutora da Luna",
        image: tutor2,
    },


]

export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        }
    )

function scrollPrev() {
    emblaApi?.scrollPrev();
}

function scrollNext() {
    emblaApi?.scrollNext();
}


    return (
        <section className="bg-[#FFD339] py-16 ">
            <div className="container mx-auto px-4">
             
              
                <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos clientes</h2>

                <div className="relative max-w-4xl mx-auto">
                    
                 <div className='overflow-hidden' ref={emblaRef}>
                     <div className='flex'>
                        {testimonials.map((item, index) => (
                            <div key={index} className='flex-[0_0_100%] min-w-0 px-3'>
                                  <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>

                                      <div className='flex flex-col items-center text-center space-y-4'>
                                        <div className='relative w-24 h-24'>
                                            <Image
                                            src={item.image}
                                            alt={item.author}
                                            fill
                                            sizes='96px'
                                            className='object-cover rounded-full'
                                            />
                                        </div>

                                           <p className='text-gray-200'>{item.content}</p>
                                          
                                          <div>
                                           <p className='font-bold'>{item.author}</p>
                                           <p className='text-sm text-gray-400'>{item.role}</p>
                                          </div>

                                        </div> 

                                  </article>
                            </div>
                        ))}

                     </div>
                 </div>


                 <button className=' bg-white items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10' onClick={scrollPrev} >
                    <ChevronLeft
                     className='w-6 h-6 text-gray-600' 
                     />
                 </button>

                 <button className=' bg-white items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10' onClick={scrollNext} >
                    <ChevronRight
                     className='w-6 h-6 text-gray-600' 
                     />
                 </button>
                


                </div>
              

            </div>
            
        </section>
    )
        
}