export type Project = {
    id: string;
    name: string;
    description: string;
    images: string[];
    type: string;
  };
  
  export const projects: Project[] = [
    {
      id: "casa-del-lago",
      name: "Casa del Lago",
      description: "Residencial Tipología Madera, Metal, Vidrio, Piedra sinterizada, STO, pintura, telas.Materiales Proyecto residencial de un Pent-house en Medellín que sea un hogar para su residente. El proyecto es un pedido llave en mano incluyendo re una remodelación física y técnica total de apartamento.Nuestro deseo fue crear una obra que se preservara en el tiempo, desde sus muebles, acabados y detalles se busca la funcionalidad y la estética convivan junto a este concepto de hogar contemporáneo. La iluminación juega un papel fundamental para lograr esto. Los muebles e iluminación fueron importados por nosotros, así como la logística y dirección y control del recurso del cliente.",
      images: ["/3.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"],
      
      type: "Clásica"
    },
    {
      id: "oficinas-urbanas",
      name: "Oficinas Urbanas",
      description: "Diseño contemporáneo para espacios de trabajo colaborativo en el centro de la ciudad.",
      images: ["/21.jpg", "/22.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"],
      type: "Gótica"
    },
    {
      id: "residencia-vieja",
      name: "Residencia Moderna",
      description: "Arquitectura minimalista y elegante para una vivienda de lujo.",
      images: ["/23.jpg", "/24.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"],
      type: "Renacentista"
    },
    {
      id: "residencia-nueva",
      name: "Residencia Moderna",
      description: "Arquitectura minimalista y elegante para una vivienda de lujo.",
      images: ["/4.jpg", "/24.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"],
      type: "Barroca"
    },
    {
      id: "residencia-viejisima",
      name: "Residencia Moderna",
      description: "Arquitectura minimalista y elegante para una vivienda de lujo.",
      images: ["/20.jpg", "/24.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"],
      type: "Moderna"
    },
    {
      id: "residencia-nuevesita",
      name: "Residencia Moderna",
      description: "Arquitectura minimalista y elegante para una vivienda de lujo.",
      images: ["/21.jpg", "/24.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"],
      type: "Clásica"
    },
    {
      id: "residencia",
      name: "Residencia Moderna",
      description: "Arquitectura minimalista y elegante para una vivienda de lujo.",
      images: ["/22.jpg", "/24.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"],
      type: "Moderna"
    },
    {
      id: "residencia-x",
      name: "Residencia Moderna",
      description: "Arquitectura minimalista y elegante para una vivienda de lujo.",
      images: ["/23.jpg", "/24.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"],
      type: "Gótica"
    },
    {
      id: "residencia-y",
      name: "Residencia Moderna",
      description: "Arquitectura minimalista y elegante para una vivienda de lujo.",
      images: ["/24.jpg", "/24.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg"],
      type: "Renacentista"
    },
    
  ];
  