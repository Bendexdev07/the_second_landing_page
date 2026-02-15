
import "./serviceslabel.css"
export default function ServicesLabel({imgSrc,name,}){
    return (
        <>
        <div className="service-container">
            <img src={imgSrc} alt="service-img" className="service-img"/>
            <p className="service-name">{name}</p>
        </div>
        
        </>
    )

}