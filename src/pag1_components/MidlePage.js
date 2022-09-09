import React, { useState } from "react";
import '../styles/MidlePage.css';

const MidlePage=(props)=>{
    const{tabsFun} = props;
    const[butt,setButt]=useState([true,false,false,false,false,false,false]);
    
    const ClickHandler=(num)=>{
        console.log("rrrrrr");
        setButt([
            num==1? true : false,
            num==2? true : false,
            num==3? true : false,
            num==4? true : false,
            num==5? true : false,
            num==6? true : false,
            num==7? true : false
        ])
    }
    
    return (
        <>
            <h1>A broad selection of courses</h1>
            <p>Choose from 200,000 online video courseswith new additions published every month</p>
            <div>

                <button id="butt1" 
                    className={ butt[0]==1? "clear cat-select  butt-active" : "clear cat-select"}
                    onClick={() =>{ 
                        ClickHandler(1);
                        tabsFun("python_res");}
                    }
                    ><span>Python</span></button>
                <button id="butt2"
                    className={ butt[1]==1? "clear cat-select  butt-active" : "clear cat-select"}
                    onClick={() => {
                        ClickHandler(2);
                        tabsFun("excel_res");}
                    }
                    ><span>Excel</span></button>
                <button id="butt3" 
                    className={ butt[2]==1? "clear cat-select  butt-active" : "clear cat-select"}
                    onClick={() => {
                        ClickHandler(3);
                        tabsFun("web_res");}
                    }
                    ><span>Web Development</span></button>
                <button id="butt4" 
                    className={ butt[3]==1? "clear cat-select  butt-active" : "clear cat-select"}
                    onClick={() => {
                        ClickHandler(4);
                        tabsFun("js_res");}
                    }
                    ><span>Javascript</span></button>
                <button id="butt5" 
                    className={ butt[4]==1? "clear cat-select  butt-active" : "clear cat-select"}
                    onClick={() => {
                        ClickHandler(5);
                        tabsFun("data_res");}
                    }
                    ><span>Data Science</span></button>
                <button id="butt6" 
                    className={ butt[5]==1? "clear cat-select  butt-active" : "clear cat-select"}
                    onClick={() => {
                        ClickHandler(6);
                        tabsFun("aws_res");}
                    }
                    ><span>AWS Certification</span></button>
                <button id="butt7" 
                    className={ butt[6]==1? "clear cat-select  butt-active" : "clear cat-select"}
                    onClick={() => {
                        ClickHandler(7);
                        tabsFun("draw_res");}
                    }
                    ><span>Drawing</span></button>
            </div>
        </>
    )
}
export default MidlePage;