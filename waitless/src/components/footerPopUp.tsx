import { useState } from "react";
import BtnSumarRestar from "./btnSumarRestar"
interface Props {
  titulo: string;
  descripcion: string; 
  precio: string;
  setShowPopUP: React.Dispatch<React.SetStateAction<boolean>>; 
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;

}
interface Order{
  name: string;
  description: string;
  price: string;
}
const FooterPopUp: React.FC<Props> = ({titulo, descripcion, precio, setShowPopUP, setShowMenu}) => {
  const [cantidad, setCantidad] = useState(1);
  const [pedido, setPedido] = useState<Order[]>([]);
  const handleClickSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleClickRestar = () => {
    if(cantidad>1){
      setCantidad(cantidad - 1);
    }
  };

  const handlePedido = () =>{
    addPedido(titulo, descripcion, precio);
    console.log(pedido);
    setShowPopUP(false);
    setShowMenu(true);
  }

  const addPedido = (name:string, description: string, price: string) =>{
    const NuevoPedido: Order[]= [...pedido, {name, description, price}]; 
    setPedido(pedido => [...pedido, {name, description, price} ]);
  }

return <footer className="w-full h-[90px] bg-background bottom-0 fixed shadow-top flex items-center" id="footerMenu">
    <button className=" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[89px]" onClick={handlePedido}>
      <p className="text-white" >Agregar</p>
    </button>
    <BtnSumarRestar></BtnSumarRestar>
    <div className="h-full absolute">
      <p className="text-[#252525] ml-7 top-0 mt-5 ">Subtotal</p>
      <h4 className="text-[#252525] ml-7">$2.000,0</h4>
    </div>
  </footer>;
}
export default FooterPopUp;