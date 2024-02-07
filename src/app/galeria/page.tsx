'use client'

import { Template, ImageCard } from '@/components';
import { Image } from '@/resources/image/image.resource';
import {useImageService} from '@/resources/image/image.service'
import { useState } from 'react';



export default function GaleriaPage() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([])

  async function searchImages(){
    const result = await useService.buscar()
    setImages(result);
    console.table(result);
  }

  return (
    <Template>
      <button className='bg-gray-500' onClick={searchImages}>Clique aqui para mudar</button>
      <section className='grid grid-cols-4 gap-8'>
        <ImageCard nome="{nomeImage}" tamanho="10MB" src=''/>
      
      </section>
    </Template>
  )
}
