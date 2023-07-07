// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanetDetails} = props
  const {description, imageUrl, name} = eachPlanetDetails

  return (
    <div className="planet-container">
      <img className="planet-img" alt={`Planet ${name}`} src={imageUrl} />
      <h1 className="planet-name"> {name} </h1>
      <p className="planet-details"> {description} </p>
    </div>
  )
}

export default PlanetItem
