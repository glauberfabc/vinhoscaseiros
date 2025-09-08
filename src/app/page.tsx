'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  Wine, 
  ShoppingCart, 
  Star, 
  CheckCircle,
  X,
  Gift,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const bonuses = [
    "Licores Caseiros",
    "Como Fazer Cerveja em Casa",
    "301 Drinks Mais Criativos do Brasil",
    "Xaropes Artesanais",
    "Top 10 Caipirinhas Gourmet",
    "Como Fazer Hidromel",
    "Fermentação Caseira"
  ];

  const testimonials = [
    {
      name: "João S.",
      image: "https://i.postimg.cc/BbvxCLft/Captura-de-tela-2025-08-20-092006.png",
      text: "Nunca imaginei que fazer meu próprio vinho seria tão fácil. As receitas são claras e o resultado é incrível!",
      rating: 5
    },
    {
      name: "Maria C.",
      image: "https://i.postimg.cc/N0JTjGHc/Captura-de-tela-2025-08-20-092125.png",
      text: "O guia mudou minha forma de ver a fermentação. Agora faço minhas bebidas em casa com qualidade profissional!",
      rating: 5
    },
    {
      name: "Carlos R.",
      image: "https://i.postimg.cc/dV7cx4jj/Captura-de-tela-2025-09-07-093244.png",
      text: "As técnicas explicadas passo a passo fizeram toda a diferença. Recomendo para quem quer começar!",
      rating: 4
    }
  ];

  const handleBasicPurchase = () => {
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Main Title Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Desvende os Segredos da{' '}
            <motion.span 
              className="text-yellow-300"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: ['0 0 0px rgba(255,255,0,0.5)', '0 0 20px rgba(255,255,0,0.8)', '0 0 0px rgba(255,255,0,0.5)']
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Fermentação Natural
            </motion.span>
            <br />
            Crie Vinhos e Bebidas Artesanais em Casa
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforme frutas em vinhos incríveis e domine a arte da fermentação de forma simples e divertida.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Badge className="bg-yellow-400 text-black text-lg px-6 py-2 mb-4">
              <Sparkles className="w-5 h-5 mr-2" />
              Guia Completo + Bônus Exclusivos
            </Badge>
          </motion.div>

          
        </div>
        <script>
  window.pixelId = "68bdaceaddf626416ddf1db3";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
</script>
        <script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck
  data-utmify-prevent-subids
  data-utmify-ignore-iframe
  data-utmify-is-cartpanda
  async
  defer
></script>

        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-32 h-32 bg-green-400 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </section>

      {/* Sales Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Guia Definitivo de Receitas e Técnicas
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Aprenda o passo a passo para fazer seu próprio vinho de frutas, licores caseiros, cerveja e muito mais. Receitas e técnicas testadas e aprovadas para você criar bebidas únicas.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Guia Básico</h3>
                      <p className="text-gray-600 mb-4">Acesso ao conteúdo principal</p>
                      <div className="text-3xl font-bold text-orange-600 mb-4">R$9,90</div>
                      <Button 
                        onClick={handleBasicPurchase}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3"
                      >
                        <motion.span
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          <ShoppingCart className="w-5 h-5 mr-2 inline" />
                          Adquirir Básico
                        </motion.span>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-400 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 text-sm font-bold">
                      MAIS VENDIDO
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Pacote Completo</h3>
                      <p className="text-gray-600 mb-4">Guia + 7 Bônus Exclusivos</p>
                      
                      {/* Lista de bônus no card */}
                      <div className="mb-4 text-left">
                        <h4 className="font-semibold text-gray-700 mb-2">Você recebe:</h4>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Licores Caseiros</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Como Fazer Cerveja em Casa</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>301 Drinks Mais Criativos do Brasil</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Xaropes Artesanais</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Top 10 Caipirinhas Gourmet</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Como Fazer Hidromel</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Fermentação Caseira</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-lg text-gray-500 line-through">De R$ 99,90</span>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-4">R$17,50</div>
                      <Button 
                        onClick={() => window.open('https://flownetic-digital.mycartpanda.com/checkout/195954852:1', '_blank')}
                        size="lg"
                        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3"
                      >
                        <motion.span
                          animate={{ 
                            scale: [1, 1.05, 1],
                            y: [0, -2, 0]
                          }}
                          transition={{ 
                            duration: 1, 
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          <Gift className="w-5 h-5 mr-2 inline" />
                          QUERO O COMPLETO!
                        </motion.span>
                      </Button>
                      <div className="mt-3 text-sm text-gray-600">
                        Economia de R$82,40
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative w-80 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-2xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Wine className="w-16 h-16 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Guia Definitivo de Receitas e Técnicas</h3>
                    <p className="text-sm text-center px-4">Aprenda o passo a passo para fazer seu próprio vinho de frutas, licores caseiros, cerveja e muito mais. Receitas e técnicas testadas e aprovadas para você criar bebidas únicas.</p>
                  </div>
                </div>
                <motion.div 
                  className="absolute top-4 right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Badge className="bg-yellow-400 text-black">
                    <Star className="w-4 h-4 mr-1" />
                    Best Seller
                  </Badge>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Showcase Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Conteúdo Principal */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Conteúdo Principal
            </h2>
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://i.postimg.cc/zDTpDW0S/vinho.png" 
                      alt="Vinhos de Frutas" 
                      className="w-32 h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Aprenda a técnica Perfeita Para fazer Vinhos de Frutas em Casa
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Domine o processo completo de fermentação natural e crie vinhos incríveis com qualquer fruta que você imaginar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* O que vai aprender no Guia completo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              O que vai aprender no Guia completo
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Faça Cerveja em casa",
                  subtitle: "Faça sua própria cerveja!",
                  description: "Com este guia completo, você aprenderá do zero ao primeiro gole a arte de fazer cerveja em casa. Descubra os ingredientes, o passo a passo da brassagem, a fermentação, envase e tudo que precisa para criar a sua cerveja artesanal perfeita.",
                  image: "https://i.postimg.cc/8zYz0F8x/cerveja.png"
                },
                {
                  title: "Faça Licores Caseiros",
                  subtitle: "Crie Licores Artesanais em Casa",
                  description: "Descubra o prazer de produzir seus próprios licores de frutas e ervas. Com este guia completo, você aprenderá o processo, a escolha dos ingredientes e as técnicas para criar bebidas únicas e saborosas, perfeitas para compartilhar ou presentear.",
                  image: "https://i.postimg.cc/j5p8g4vC/licores.png"
                },
                {
                  title: "301 Drinks Mais Criativos do Brasil",
                  subtitle: "301 Drinks Mais Criativos do Brasil",
                  description: "Prepare-se para uma viagem inesquecível pelo mundo da coquetelaria brasileira. Descubra 301 receitas exclusivas, de clássicos reinventados a criações ousadas que usam o melhor dos nossos ingredientes. Este é o guia definitivo para bartenders e amantes de drinks que querem elevar o nível da sua arte.",
                  image: "https://i.postimg.cc/fLtXP4gf/301-drinks.png"
                },
                {
                  title: "Xaropes Artesanais",
                  subtitle: "Crie Xaropes Artesanais em Casa",
                  description: "Dê um toque especial a coquetéis, cafés, chás e sobremesas. Com este guia, você vai dominar a arte de transformar frutas, especiarias e ervas em xaropes naturais e deliciosos. Aprenda o passo a passo para criar sabores únicos, sem conservantes e com a qualidade que só o artesanal oferece.",
                  image: "https://i.postimg.cc/1th6b7hx/xarope.png"
                },
                {
                  title: "Top 10 Caipirinhas Gourmet",
                  subtitle: "As 10 Caipirinhas Gourmet Mais Criativas",
                  description: "Descubra o segredo por trás das caipirinhas mais inovadoras do Brasil. Com esta seleção exclusiva, você terá acesso a receitas únicas que elevam o drink nacional a um novo patamar de sabor e sofisticação. Prepare-se para reinventar o clássico e surpreender em qualquer ocasião.",
                  image: "https://i.postimg.cc/X73Gfy38/caipirinha.png"
                },
                {
                  title: "Técnicas Avançadas na criação do Hidromel",
                  subtitle: "Técnicas Avançadas na Criação do Hidromel",
                  description: "Se você já domina o básico, é hora de ir além. Este guia foi criado para hidromeleiros que buscam a perfeição. Aprenda sobre o controle de nutrientes, o uso de diferentes leveduras e métodos de clarificação para alcançar complexidade, estabilidade e a qualidade profissional que suas bebidas merecem.",
                  image: "https://i.postimg.cc/28Pt9mc2/hidromel.png"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 overflow-hidden group">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-500 text-center mt-3">
                        Guia Definitivo<br />
                        Fermentação Natural e Vinhos de Frutas
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price Cards Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Escolha Sua Oferta
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Guia Básico</h3>
                    <p className="text-gray-600 mb-4">Acesso ao conteúdo principal</p>
                    <div className="text-3xl font-bold text-orange-600 mb-4">R$9,90</div>
                    <Button 
                      onClick={handleBasicPurchase}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3"
                    >
                      <motion.span
                        animate={{ 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <ShoppingCart className="w-5 h-5 mr-2 inline" />
                        Adquirir Básico
                      </motion.span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-400 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 text-sm font-bold">
                    MAIS VENDIDO
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pacote Completo</h3>
                    <p className="text-gray-600 mb-4">Guia + 7 Bônus Exclusivos</p>
                    
                    {/* Lista de bônus no card */}
                    <div className="mb-4 text-left">
                      <h4 className="font-semibold text-gray-700 mb-2">Você recebe:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Licores Caseiros</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Como Fazer Cerveja em Casa</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>301 Drinks Mais Criativos do Brasil</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Xaropes Artesanais</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Top 10 Caipirinhas Gourmet</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Como Fazer Hidromel</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Fermentação Caseira</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-lg text-gray-500 line-through">De R$ 99,90</span>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-4">R$17,50</div>
                    <Button 
                      onClick={() => window.open('https://flownetic-digital.mycartpanda.com/checkout/195954852:1', '_blank')}
                      size="lg"
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3"
                    >
                      <motion.span
                        animate={{ 
                          scale: [1, 1.05, 1],
                          y: [0, -2, 0]
                        }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <Gift className="w-5 h-5 mr-2 inline" />
                        QUERO O COMPLETO!
                      </motion.span>
                    </Button>
                    <div className="mt-3 text-sm text-gray-600">
                      Economia de R$82,40
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              animate={{ 
                textShadow: ['0 0 0px rgba(255,215,0,0.5)', '0 0 20px rgba(255,215,0,0.8)', '0 0 0px rgba(255,215,0,0.5)']
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              🎁 O Que Você Ganha no Pacote Completo
            </motion.h2>
            
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">Todos estes bônus inclusos no pacote de R$17,50:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {bonuses.map((bonus, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{bonus}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">
                  <span className="line-through text-gray-600">De R$ 99,90</span>
                  <span className="ml-4">por apenas R$17,50</span>
                </div>
                <p className="text-lg font-semibold">
                  Economia de R$82,40 - 82% OFF!
                </p>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-2xl px-12 py-6 rounded-full font-bold shadow-lg transform transition-all duration-200 hover:shadow-xl"
                onClick={() => window.open('https://flownetic-digital.mycartpanda.com/checkout/195954852:1', '_blank')}
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.05, 1],
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Gift className="w-8 h-8 mr-3 inline" />
                  GARANTIR MINHA OFERTA COMPLETA!
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            O Que Nossos Alunos Dizem
          </motion.h2>
          
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-0 shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                          />
                          <span className="font-bold text-gray-800">{testimonial.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
              <p className="text-gray-400">
                Especialistas em fermentação natural e bebidas artesanais, compartilhando conhecimento para transformar sua cozinha.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Garantia</h3>
              <div className="bg-green-900 bg-opacity-50 rounded-lg p-4">
                <p className="text-green-400 font-bold mb-2">Garantia de 7 Dias</p>
                <p className="text-gray-400 text-sm">
                  Se você não gostar do conteúdo, devolvemos seu dinheiro. Risco Zero!
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Guia de Fermentação Natural. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Upgrade Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              🎉 OFERTA EXCLUSIVA SÓ PARA VOCÊ!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-6">
            {/* Oferta Premium Destacada */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6 rounded-lg shadow-xl transform scale-105">
              <div className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                LIMITADO - 82% OFF
              </div>
              <h3 className="text-2xl font-bold mb-2">PACOTE PREMIUM COMPLETO</h3>
              <p className="text-lg mb-4 font-semibold">Tudo por apenas R$13,90</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-4">
                <p className="text-sm font-bold mb-2">Você recebe todos os 7 bônus:</p>
                <div className="text-xs space-y-1 text-left">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {bonus}
                    </div>
                  ))}
                </div>
              </div>
              <Button 
                size="lg"
                className="w-full bg-black text-yellow-400 hover:bg-gray-800 font-bold text-lg py-4 shadow-lg"
                onClick={() => window.open('https://flownetic-digital.mycartpanda.com/checkout/195954858:1', '_blank')}
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  🚀 QUERO O PACOTE PREMIUM POR R$13,90
                </motion.span>
              </Button>
            </div>
            
            {/* Opção básica bem pequena */}
            <div className="border-t pt-4">
              <p className="text-gray-500 text-sm mb-2">Ou continue com a oferta básica:</p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full text-gray-500 hover:text-gray-700 border-gray-300"
                onClick={() => window.open('https://flownetic-digital.mycartpanda.com/checkout/195954729:1', '_blank')}
              >
                Continuar com guia básico R$9,90
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
