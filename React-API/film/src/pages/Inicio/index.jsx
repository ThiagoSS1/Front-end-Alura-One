import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Banner from "@/components/Banner";
import bannerImage from '@/assets/banner-home.png'

function Inicio () {
  return (
  <>
   <Cabecalho />
    <Banner imagem={bannerImage}/>
    <Rodape />
  </>
  )
}

export default Inicio;