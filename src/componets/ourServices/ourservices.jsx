import "./ourservices.css"
import { services } from "./services"
import ServicesLabel from "./serviceslabel"
export default function OurServices(){
    return(
        <>
        <div className="title">
        <img src="src/assets/Icon.png" alt="icon" />
            <p>Our Services</p>
        </div>
        <div className="services-wrapper">
            {services.map((service, index) => (
                <ServicesLabel
                    key={index}
                    name={service.name}
                    imgSrc={service.imgSrc}
                />
            ))}
            </div>
        
        
        
        
        </>
    )
}