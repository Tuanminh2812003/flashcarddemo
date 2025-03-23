import "../../Components/LayoutDefault.scss";

import SectionMain from "./SectionMain";
import Section1 from "./Section1";
import Section1p2 from "./Section1p2"
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section5p2 from "./Section5p2";
import Section7 from "./Section7";
import Footer from "./Footer";

function LayoutDefault(){
    return(
        <>
            <div className="blueMode">
                <SectionMain/>
                <Section5/>
                <Section1/>
                <div className="container infographic" style={{backgroundColor:"#F3E7DB"}}>
                    <img src="/image/nhanhaccungdinhhue/4.1 web(1920 x 3190 px) (1).png" style={{width: "100%", height: "auto"}}/>
                </div>
                <div className="container">
                    <Section4/>
                </div>
                <Section2/>
                <Section7/>
                <Footer/>
            </div>
        </>
    )
}

export default LayoutDefault;