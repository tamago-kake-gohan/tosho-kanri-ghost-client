import { useState,KeyboardEvent } from "react";
import Styles from "./tag-editor.module.scss";

const Tag = ({tag,onClick}: {tag: string,onClick: () =>void}) => {
  return <div className={Styles.tag} >
  <span className={Styles.content}>{tag}</span>
  <div onClick={onClick} className={Styles.delete}>×</div>
  </div>
}

type props = {
  tags: string[];
  onChange: (tags: string[]) => void;
}

const TagEditor  =({tags,onChange}: props) => {
  const [input,setInput] = useState("");
  
  const onKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
    console.log(e.nativeEvent.isComposing )
    //@ts-ignore
    if (e.code==="Enter"&&!tags.includes(input)&&!e.nativeEvent.isComposing){
      e.preventDefault();
      onChange([...tags,input]);
      setInput("");
    }else if(e.code === "Backspace" && input === ""){
      onChange(tags.slice(0,-1));
    }
  }
  
  return <label className={Styles.wrapper} htmlFor={Styles.input}>
    {tags.map((tag) => <Tag key={tag} tag={tag} onClick={()=>onChange(removeItemFromArray(tags,tag))}/>)}
    <input id={Styles.input} className={Styles.input} type="text" value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={onKeyDown}/>
  </label>
}

const removeItemFromArray = (array: string[], value: string) => {
  return array.filter((item) => item !== value);
}

export {TagEditor}