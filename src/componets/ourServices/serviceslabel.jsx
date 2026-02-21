
import "./serviceslabel.css"
export default function ServicesLabel({imgSrc,name,}){
    return (
        <>
        <div className="service-label">
            <img src={imgSrc} alt="service-img" className="service-img"/>
            <p className="service-name">{name}</p>
            <img src="src/assets/services/Add.png" alt="add-sign" className="add" />
        </div>
        
        </>
    )

}