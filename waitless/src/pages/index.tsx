import Image from "next/image";
import { Inter } from "next/font/google";
import { type } from "os";
import { useState } from "react";
import ScrollBar from "../components/scrollbar";
import HeaderMenu from "../components/headerMenu";
import PopUp from "../components/PopUp";
import FooterMenu from "../components/footerMenu";
import ContenidoPedido  from "../components/ContenidoPedido";

const inter = Inter({ subsets: ["latin"] });

export default function Menu() {
  const entradas = [
    [
      "Provoleta",
      "/provoleta.jpg",
      "Deliciosa provoleta de leche de vaca fundida, acompañada de sabrosos condimentos",
      "2234",
    ],
    [
      "Empanadas",
      "/empanada.jpg",
      "Deliciosas empanadas argentinas rellenas de carne, pollo, verduras o queso, horneadas hasta la perfección",
      "8113",
    ],
    [
      "Humita",
      "/Humitas.jpg",
      "Sabrosa humita argentina a base de choclo (maíz tierno) y condimentos, acompañada de pan casero",
      "5296",
    ],
    [
      "Pastel de papas",
      "/pasteldepapa.jpg",
      "Nuestro suculento pastel de papas argentino, capas de puré de papas con carne molida y gratinado al horno",
      "2754",
    ],
  ];

  const principales = [
    [
      "Asado",
      "/asado.jpg",
      "El exquisito asado argentino, preparado a la perfección en nuestra parrilla",
      "4675",
    ],
    [
      "Milanesa",
      "/provoleta.jpg",
      "Irresistible milanesa argentina de carne empanada y frita, acompañada de guarnición",
      "6231",
    ],
    [
      "Locro",
      "/provoleta.jpg",
      "Nuestro delicioso locro argentino, un guiso tradicional con maíz, porotos, carne de cerdo y verduras",
      "3678",
    ],
    [
      "Matambre",
      "/provoleta.jpg",
      "Exquisito matambre argentino relleno y enrollado, servido con guarnición de temporada",
      "4261",
    ],
    [
      "Pastel de papas",
      "/provoleta.jpg",
      "Nuestro suculento pastel de papas argentino, capas de puré de papas con carne molida y gratinado al horno",
      "2754",
    ],
  ];

  const postres = [
    ["Dulce de Leche", "/dulcedeleche.jpeg", "dulce de leche", "300"],
    ["Flan", "", "Mixto o bala", "1000"],
  ];
  const combinedArray = [entradas, principales, postres];

  const MaxLength = (description: string, MaxCharcters: number): string => {
    if (description.length <= MaxCharcters) {
      return description;
    }
    let descrptionShort = description.substring(0, MaxCharcters);
    const LastSpace = descrptionShort.lastIndexOf(" ");

    if (LastSpace !== -1) {
      descrptionShort = descrptionShort.substring(0, LastSpace);
    } else {
      return descrptionShort;
    }

    return descrptionShort + " ...";
  };

  const [showPopUP, setShowPopUP] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showPedido, setShowPedido] = useState(false);
  const [keyPlato, setKeyPlato] = useState(0);
  const [arrayUsed, setarrayUsed] = useState(0);

  const handleclick = (key: number, estado: boolean, array: number) => {
    setShowPopUP(estado);
    setShowMenu(!estado)
    setKeyPlato(key);
    setarrayUsed(array);
  };

  const handleClickArrowBack = (pedido:boolean, Menu: boolean) =>{
    setShowPedido(pedido);
    setShowMenu(Menu);
    
  }

  return (
    <main className="">
      <div className="h-screen w-screen pb-[7px] bg-background overflow-x-hidden no-scrollbar" id="general">
        {showPopUP ? (
          <PopUp
            combinedArray={combinedArray}
            arrayUsed={arrayUsed}
            keyPlato={keyPlato}
            setShowPopUP={setShowPopUP}
            setShowMenu={setShowMenu}
          ></PopUp>
        ) : (<></>)}
        {showMenu ? (
          <>
            <HeaderMenu />
            <ScrollBar />

            <h3 className="text-black text mt-4 ml-4" id="entradas">
              Entradas
            </h3>
            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]" id="div1">
              {combinedArray[0].map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true, 0)}
                  className="container m-2 h-fit content-center"
                  key={key}
                >
                  <div className="h-[105px] w-[150px] mx-2 mt-1 overflow-hidden grid content-center">
                    <img
                      src={comida[1]}
                      alt=""
                      className="rounded-lg min-h-full min-w-full"
                    />
                  </div>
                  <div className="pl-3 max-w-[160px] ">
                    <h5 className=" text-black leading-snug overflow-hidden">
                      {comida[0]}
                    </h5>
                    <p className="text-populetter leading-snug pb-2 max-h- overflow-hidden text-ellipsis">
                      {MaxLength(comida[2], 35)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-black text mt-4 ml-4" id="principales" >
              Platos principales
            </h3>
            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]">
              {combinedArray[1].map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true, 1)}
                  className="container m-2 h-fit content-center"
                  key={key}
                >
                  <div className="h-[105px] w-[150px] mx-2 mt-1 overflow-hidden grid content-center">
                    <img
                      src={comida[1]}
                      alt=""
                      className="rounded-lg min-h-full min-w-full"
                    />
                  </div>
                  <div className="pl-3 max-w-[160px] ">
                    <h5 className=" text-black leading-snug overflow-hidden">
                      {comida[0]}
                    </h5>
                    <p className="text-populetter leading-snug pb-2 max-h- overflow-hidden text-ellipsis">
                      {MaxLength(comida[2], 35)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-black text mt-4 ml-4" id="postres">
              Postres
            </h3>
            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]">
              {combinedArray[2].map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true, 2)}
                  className="container m-2 h-fit content-center pb-28"
                  key={key}
                >
                  <div className="h-[105px] w-[150px] mx-2 mt-1 overflow-hidden grid content-center">
                    <img
                      src={comida[1]}
                      alt=""
                      className="rounded-lg min-h-full min-w-full"
                    />
                  </div>
                  <div className="pl-3 max-w-[160px] ">
                    <h5 className=" text-black leading-snug overflow-hidden">
                      {comida[0]}
                    </h5>
                    <p className="text-populetter leading-snug pb-2 max-h- overflow-hidden text-ellipsis">
                      {MaxLength(comida[2], 35)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <FooterMenu setShowPedido={setShowPedido} setShowMenu={setShowMenu} setShowPedidoEnviado={setShowMenu} EstadoPedidoEnviado={false} EstadoPedido={true} EstadoMenu={false} txtBoton="Ver Pedido"/>
          </>
        ) : (<></>)}
        {showPedido ? (
        <>
          <ContenidoPedido setShowMenu={setShowMenu} setShowPedido={setShowPedido} />
        </>
        ) : (<></>)}

      </div>
    </main>
  );
}

