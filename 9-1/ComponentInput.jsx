function ComponentInput(props){
    
    const handleChange=(e)=>{
        props.contentChange(e);
    };

    return(
        <fieldset style={{backgroundColor: props.color}}>
            <legend>
                {props.title} 다이얼로그!!
            </legend>
            <input type="text" value={props.cont} onChange={handleChange}/>
            <p>
                {props.cont}
            </p>
        </fieldset>
    )
};

export default ComponentInput;