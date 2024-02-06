import { Template , ImageCard} from '@/components'


export default function GaleriaPage() {
  return (
    <Template>
      <section className='grid grid-cols-3 gap-8'>
      <ImageCard src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"/>
      <ImageCard/>
      <ImageCard/>
      </section>
    </Template>
  )
}
