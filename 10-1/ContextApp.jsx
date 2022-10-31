import React from "react";

const ThemeContext= React.createContext('light');

function ContextApp(){
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
    return (
        <div>
            <ThemeContext.Consumer>
                {value=> (<div 
                            style={{
                                margin: 50,
                                padding: 50,
                                backgroundColor: value,
                            }}>
                                <p> 컨텍스트없이 props만 이용</p>
                                <button> 확인 </button>
                                </div>
                            )}
            </ThemeContext.Consumer>
            </div>
    )
}
export default ContextApp;