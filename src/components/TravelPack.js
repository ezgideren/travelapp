

function TravelPack(props) {
  return (
    <div>
      <div>{props.place}</div>
      <div>{props.period}</div>
      <div>{props.description}</div>
      <div>${props.price}</div>
    </div>
  )
}

export default TravelPack;