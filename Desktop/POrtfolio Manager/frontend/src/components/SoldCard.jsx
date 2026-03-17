
const SoldCard = ({holding}) => {
  
  return (
    <div className="card-body bg-slate-50 rounded-lg shadow-md ">
      <h3 className="card-title text-base-content">{holding.name}</h3>
        <p className="text-base-content/70 ">{holding.type}</p>
        <p className="text-base-content/70 ">Bought At : {holding.BuyingAmount}</p>
        <p className="text-base-content/70 ">Sold At : {holding.SellingAmount} </p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {holding.updatedAt?._seconds ? new Date(holding.updatedAt._seconds * 1000).toLocaleDateString() : "error"}
          </span>        
        </div>
    </div>
  )
}

export default SoldCard
