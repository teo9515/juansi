// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

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
          <h1 className="text-2xl font-semibold mt-2 tracking-wide">
            Simetría Studio
          </h1>
          <p className="text-md text-white/70 tracking-wide">Arquitectura</p>

          {/* Enlaces principales */}
          <div className="space-y-4 mt-6">
            <LinkButton href="/projects" label="PROYECTOS" />
            <LinkButton href="/projects" label="NOSOTROS" />
            <LinkButton
              href="https://wa.me/573106897387?text=Hola%20sapa"
              label="WHATSAPP"
            />
          </div>

          {/* Enlace adicional */}
          <div className="mt-8 bg-black/10 p-3 rounded-lg border  border-white/20">
            <LinkButton href="/" label="HOME" />
          </div>
        </div>
      </div>
    </main>
  );
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block w-full bg-white/30 hover:bg-white/30 transition text-white px-4 py-3 rounded-lg font-semibold tracking-wide text-sm text-center "
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  );
}
