'use client'

import { Template, ImageCard } from '@/components';
import { useState } from 'react';



export default function GaleriaPage() {

  const image1 = 'https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg'
  const image2 = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg'
  const nome1 = 'Laranja'
  const nome2 = 'Verde'

  const [codigoImage,setCodigoImage] = useState<number>(2);
  const [urlImage,setUrlImage] = useState<string>(image2); 
  const [nomeImage,setNomeImage] = useState<string>(nome1); 


  function mudarImagem(){
    if(codigoImage == 1 ){
      setCodigoImage(2)
      setUrlImage(image2)
      setNomeImage(nome1)
    } else {
      setCodigoImage(1)
      setUrlImage(image1)
      setNomeImage(nome2)
    }

  }

  return (
    <Template>
      <button className='bg-gray-500' onClick={mudarImagem}>Clique aqui para mudar</button>
      <section className='grid grid-cols-4 gap-8'>
        <ImageCard nome={nomeImage} tamanho="10MB" src={urlImage}/>
        <ImageCard nome={nomeImage} tamanho="10MB" src={urlImage}/>
        <ImageCard nome={nomeImage} tamanho="10MB" src={urlImage}/>
      
      </section>
    </Template>
  )
}
