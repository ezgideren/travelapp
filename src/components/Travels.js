import TravelPack from "./TravelPack";

function Travels(props) {
   return (
    <div>
      <TravelPack place={props.items[0].place} period={props.items[0].period} description={props.items[0].description} price={props.items[0].price}></TravelPack>
      <TravelPack place={props.items[1].place} period={props.items[1].period} description={props.items[1].description} price={props.items[1].price}></TravelPack>
      <TravelPack place={props.items[2].place} period={props.items[2].period} description={props.items[2].description} price={props.items[2].price}></TravelPack>
    </div>
  )
}

export default Travels;