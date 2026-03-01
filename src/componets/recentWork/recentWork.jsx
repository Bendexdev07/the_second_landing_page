import "./recentWork.css"
import Icon from "../../assets/Icon.png"
import Arrow from "../../assets/arrow-up-right.png"

export default function RecentWork() {
    return (
        <div className="works-container">
            <div className="works-tittle">
                <img src={Icon} alt="icon" />
                <p>Recent work</p>
            </div>
            <div className="works-grid"></div>
            <button className="view-all">
                <p>view all works</p>
                <img src={Arrow} alt="arrow right" />
            </button>
        </div>
    )
}
