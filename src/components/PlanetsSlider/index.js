// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const options = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  console.log(planetsList)

  return (
    <div className="app-container" testid="planets">
      <h1 className="app-head"> PLANETS </h1>
      <Slider {...options} className="slider">
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} eachPlanetDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
