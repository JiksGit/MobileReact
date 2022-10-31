import React, {useContext} from "react";

const ThemeContext= React.createContext('light');

function ContextHook(){
    return (
        <ThemeContext.Provider value="lavender">
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar(props){
    return (
        <div>
            <ThemeButton theme = {props.theme} />
        </div>
    )
}

function ThemeButton(props){
    return (
        <div>
            <Button theme = {props.theme} />
        </div>
    )
}

function Button(props) {
    const value = useContext(ThemeContext);
    return (
            <div 
                style={{
                    margin: 50,
                    padding: 50,
                    backgroundColor: value,
                }}>
                    <p> 컨텍스트를 가지고 데이터를 전달하는 예</p>
                    <button> 확인 </button>
                    </div>
                )
}
export default ContextHook;