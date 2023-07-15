import { useState,KeyboardEvent } from "react";
import Styles from "./addressEditor.module.scss";

const Address = ({address,onClick}: {address: string,onClick: () =>void}) => {
  return <div className={Styles.address} >
  <span className={Styles.content}>{address}</span>
  <div onClick={onClick} className={Styles.delete}>×</div>
  </div>
}

type props = {
  addresses: string[];
  onChange: (addresses: string[]) => void;
}

const AddressEditor  =({addresses,onChange}: props) => {
  const [input,setInput] = useState("");
  
  const onKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
    console.log(e.nativeEvent.isComposing )
    //@ts-ignore
    if (e.code==="Enter"&&!addresses.includes(input)&&!e.nativeEvent.isComposing){
      e.preventDefault();
      onChange([...addresses,input]);
      setInput("");
    }else if(e.code === "Backspace" && input === ""){
      onChange(addresses.slice(0,-1));
    }
  }
  
  return <label className={Styles.wrapper} htmlFor={Styles.input}>
    {addresses.map((address) => <Address key={address} address={address} onClick={()=>onChange(removeItemFromArray(addresses,address))}/>)}
    <input id={Styles.input} className={Styles.input} type="text" value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={onKeyDown}/>
  </label>
}

const removeItemFromArray = (array: string[], value: string) => {
  return array.filter((item) => item !== value);
}

export { AddressEditor }