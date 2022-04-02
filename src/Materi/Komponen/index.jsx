import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionComponent from "./Pembahasan/FunctionComponent";



export default class Komponen extends React.Component{
    render(){
        return(
            <div>
                <ClassComponent nama = "Jamaludin Saputra"/>
                <FunctionComponent nama = "Nur Luthfiatul"/>
            </div>
        )
    }
}
