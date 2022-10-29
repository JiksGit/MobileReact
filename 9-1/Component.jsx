import React, {useState} from "react";
import ComponentInput from "./ComponentInput";

function Component() {
    const[content1, setContent1] = useState("");
    const onChange1 = (e) => {
        setContent1(e.target.value);
    };
    const[content2, setContent2] = useState("");
    const onChange2 = (e) => {
        setContent2(e.target.value);
    };
    const[content3, setContent3] = useState("");
    const onChange3 = (e) => {
        setContent3(e.target.value);
    };
    const[content4, setContent4] = useState("");
    const onChange4 = (e) => {
        setContent4(e.target.value);
    };

    

    return(
        <div>
            <ComponentInput
                title="경고"
                color="red"
                contentChange={onChange1}
                cont={content1}
            />
            <ComponentInput
                title="인사말"
                color="green"
                contentChange={onChange2}
                cont={content2}
            />
            <ComponentInput
                title="오류"
                color="blue"
                contentChange={onChange3}
                cont={content3}
            />
            <ComponentInput
                title="공지사항"
                color="gray"
                contentChange={onChange4}
                cont={content4}
            />
        </div>
    );
}

export default Component;