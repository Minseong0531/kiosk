import React from "react";

function Buttons({onButtonClick}){
    return(
        <div>
            <h2>컴포넌트 메뉴</h2>
            <button style={{marginBottom:'10px'}} onClick={()=> onButtonClick('A')}>컴포넌트 a 보기</button>
            <button style={{marginBottom:'10px'}} onClick={()=> onButtonClick('B')}>컴포넌트 b 보기</button>
            <button style={{marginBottom:'10px'}} onClick={()=> onButtonClick('C')}>컴포넌트 c 보기</button>
        </div>
    )
}

export default Buttons;