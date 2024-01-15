import xrayIcon from '../assets/xray-icon.png'

const HeroDetails = (props) => {

    return(
        <>
            <h3>Name: {props.heroName}</h3>
            <h3>Power: {props.power}</h3>
            <img src={xrayIcon} alt="x ray icon" />
        </>
    )
}

export default HeroDetails;