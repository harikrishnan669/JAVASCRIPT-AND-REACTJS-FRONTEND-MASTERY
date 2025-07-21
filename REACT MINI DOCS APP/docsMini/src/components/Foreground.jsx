import React, { useRef} from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Sabiduría encriptada: Léelo si te atreves",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Descargar ahora", tagColor: "green" },
    },
    {
      desc: "Protocolo de confianza: Cree y actúa",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Descargar ahora", tagColor: "blue" },
    },
    {
      desc: "Paquete de motivación: Tú puedes con todo",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Descargar ahora", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="relative w-screen h-screen overflow-hidden flex gap-7 flex-wrap z-[3]"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
