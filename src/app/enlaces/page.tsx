// src/app/page.tsx
import LinktreeButton from "@/components/LinktreeButton";
import Image from "next/image";

export default function EnlacesPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/27.jpg')" }} // reemplaza con tu imagen de fondo
    >
      <div className="relative w-5/6 max-w-sm text-white">
        {/* Card principal */}
        <div className="relative backdrop-blur-sm bg-black/50 border border-black/30 rounded-xl pt-20 pb-6 px-6 text-center">
          {/* Imagen de perfil flotante */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <Image
              src="/3.jpg" // reemplaza con tu imagen de perfil
              width={100}
              height={100}
              alt="Foto de perfil"
              className="rounded-lg border-4 border-white/30 w-38 h-28 object-cover"
            />
          </div>

          {/* Nombre y descripción */}
          <h1 className="text-2xl font-semibold mt-2 tracking-widest">
            Simetría Studio
          </h1>
          <p className="text-md text-white/70 tracking-widest">Arquitectura</p>

          {/* Enlaces principales */}
          <div className="space-y-4 mt-6">
            <LinktreeButton url="/" label="Proyectos" />
            <LinktreeButton url="/nosotros" label="Nosotros" />
            <LinktreeButton
              url="https://wa.me/573106897387?text=Hola%20sapa"
              label="Whatsapp"
            />
          </div>

          {/* Enlace adicional */}
          <div className="mt-8 bg-black/10 p-3 rounded-lg border  border-white/20">
            <LinktreeButton url="/" label="Home" />
          </div>
        </div>
      </div>
    </main>
  );
}
