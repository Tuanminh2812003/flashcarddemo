import "../../Components/LayoutDefault.scss";

import SectionMain from "./SectionMain";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section5 from "./Section5";
import Section7 from "./Section7";
import Footer from "./Footer";

function LayoutDefault(){
    return(
        <>
            <div className="redMode">
                <SectionMain/>
                <Section5/>
                <Section1/>
                <div className="container infographic" style={{backgroundColor:"#FEF2F2"}}>
                    <img src="/image/hoangthanhthanglong/5.1new.png" style={{width: "100%", height: "auto"}}/>
                </div>
                <Section2/>
                <Section7/>
                <Footer/>
            </div>
        </>
    )
}

export default LayoutDefault;