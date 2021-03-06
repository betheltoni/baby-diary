import React from 'react'


type Props = {
    text:any;
    style: React.CSSProperties;
}

const Button:React.FC<Props> = ({text, style}) => {
  return (
    <button style={style}>
        {text}
    </button>
  )
}

export default Button