// example of importing an image that we have saved locally
import xrayIcon from '../assets/xray-icon.png'

// creating a component that takes in props
// this component is create as a function using arrow syntax
const HeroDetails = (props) => {
    // props are passed to the component as an object
    return(
        <>
            <h3>Name: {props.heroName}</h3>
            <h3>Power: {props.power}</h3>
            <img src={xrayIcon} alt="x ray icon" />
        </>
    )
}

export default HeroDetails;