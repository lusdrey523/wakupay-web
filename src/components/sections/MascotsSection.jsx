import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';

const mascots = [
  {
    name: 'Caramelo',
    role: 'Pagos P2P',
    description: 'Facilita tus transferencias entre amigos y familiares con la dulzura y agilidad de Caramelo.',
    imageName: 'Caramelo mascota de WakuPay para pagos P2P',
    imageUrl: '/images/caramelo.png',
    bgColor: 'bg-gradient-to-br from-[#4A90E2] to-[#A3BFFA]',
    textColor: 'text-[#1E3A8A]',
  },
  {
    name: 'Chiquitín',
    role: 'Remesas',
    description: 'Chiquitín se encarga de que tus remesas lleguen seguras y con costos bajos, ¡sin importar la distancia!',
    imageName: 'Chiquitín mascota de WakuPay para remesas',
    imageUrl: '/images/chiquitin.png',
    bgColor: 'bg-gradient-to-br from-[#50C878] to-[#A7F3D0]',
    textColor: 'text-[#14532D]',
  },
  {
    name: 'Kúmara',
    role: 'Emprendimientos',
    description: 'Kúmara es tu aliada para hacer crecer tu negocio, ofreciendo herramientas para el comercio local.',
    imageName: 'Kúmara mascota de WakuPay para emprendimientos',
    imageUrl: '/images/kumara.png',
    bgColor: 'bg-gradient-to-br from-[#FF4040] to-[#F87171]',
    textColor: 'text-[#7F1D1D]',
  },
  {
    name: 'Sol',
    role: 'Innovación Cripto',
    description: 'Sol ilumina el camino de la innovación, trayendo la estabilidad de USDT a tus finanzas.',
    imageName: 'Sol mascota de WakuPay para innovación cripto',
    imageUrl: '/images/sol.png',
    bgColor: 'bg-gradient-to-br from-[#F5A623] to-[#FCD34D]',
    textColor: 'text-[#7C2D12]',
  },
  {
    name: 'Tom',
    role: 'Seguridad',
    description: 'Con la vigilancia de Tom, tus datos y transacciones están siempre protegidos. ¡Tu seguridad es su misión!',
    imageName: 'Tom mascota de WakuPay para seguridad',
    imageUrl: '/images/tom.png', // Corregido: Añadida barra inicial
    bgColor: 'bg-gradient-to-br from-[#000000] to-[#4B5563]',
    textColor: 'text-[#FFFFFF]',
  },
];

const MascotsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 }
    }
  };

  const mascotCardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-wakupay-primary/5 dark:bg-wakupay-dark/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <PawPrint className="h-12 w-12 text-wakupay-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Conoce a Nuestro <span className="gradient-text">Equipo Waku</span>
          </h2>
          <p className="text-lg md:text-xl text-wakupay-dark/80 dark:text-wakupay-light/80 max-w-2xl mx-auto">
            Nuestras mascotas emblemáticas simbolizan nuestro compromiso con la comunidad y cada aspecto de WakuPay.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {mascots.map((mascot) => (
            <motion.div key={mascot.name} variants={mascotCardVariants} className="flex">
              <Card className={`w-full ${mascot.bgColor} text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden`}>
                <CardHeader className="items-center text-center pt-8">
                  <div className="w-32 h-32 rounded-full bg-white/30 mb-4 flex items-center justify-center overflow-hidden">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={mascot.imageName}
                      src={mascot.imageUrl} />
                  </div>
                  <CardTitle className={`text-2xl ${mascot.textColor} drop-shadow-sm`}>{mascot.name}</CardTitle>
                  <CardDescription className={`${mascot.textColor} font-semibold opacity-90`}>{mascot.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className={`text-sm ${mascot.textColor} opacity-80`}>{mascot.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MascotsSection;
