export const PlanetItem = ({planetItem}) => {
    return (
        <>
          <img
            className="planet_img"
            src={
              planetItem.id &&
              `https://starwars-visualguide.com/assets/img/planets/${planetItem.id}.jpg`
            }
            alt=""
          />
          <div className="info_container">
            <div className="planet_name">{planetItem.name}</div>
            <div>
              <div className="planet_item">
                <span className="item_name">Population</span>
                <span>{planetItem.population}</span>
              </div>
              <div className="planet_item">
                <span className="item_name">RotationPeriod</span>
                <span>{planetItem.rotation}</span>
              </div>
              <div className="planet_item">
                <span className="item_name">Diameter</span>
                <span>{planetItem.diameter}</span>
              </div>
            </div>
          </div>
        </>
    )
}