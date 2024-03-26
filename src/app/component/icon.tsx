import {
    faBarcode,
    faCrown,
    faDice,
    faGem,
    faGhost,
    faHandMiddleFinger,
    faHeart,
    faHeartCrack,
    faMoon,
    faPaw,
    faPills,
    faRainbow,
    faScaleUnbalancedFlip,
    faShieldCat,
    faSkullCrossbones,
    faSnowflake,
    faStarOfDavid,
    faTriangleExclamation,
    faVials,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon.css";

export default function Icon() {
    return (
        <div className="">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <FontAwesomeIcon icon={faXmark} className="icon" />
            <FontAwesomeIcon icon={faGhost} className="icon" />
            <FontAwesomeIcon icon={faBarcode} className="icon" />
            <FontAwesomeIcon icon={faSnowflake} className="icon" />
            <FontAwesomeIcon icon={faMoon} className="icon" />
            <FontAwesomeIcon icon={faVials} className="icon" />
            <FontAwesomeIcon icon={faCrown} className="icon" />
            <FontAwesomeIcon icon={faDice} className="icon" />
            <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
            <FontAwesomeIcon icon={faStarOfDavid} className="icon" />
            <FontAwesomeIcon icon={faSkullCrossbones} className="icon" />
            <FontAwesomeIcon icon={faShieldCat} className="icon" />
            <FontAwesomeIcon icon={faScaleUnbalancedFlip} className="icon" />
            <FontAwesomeIcon icon={faRainbow} className="icon" />
            <FontAwesomeIcon icon={faPills} className="icon" />
            <FontAwesomeIcon icon={faPaw} className="icon" />
            <FontAwesomeIcon icon={faHeartCrack} className="icon" />
            <FontAwesomeIcon icon={faHandMiddleFinger} className="icon" />
            <FontAwesomeIcon icon={faGem} className="icon" />
        </div>
    );
};
