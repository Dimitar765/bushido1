import data from "../../src/data/treneri.json"


function Card() {
  return (
<>
<div className="flex justify-center">
    <div className="flex justify-between p-5 mt-20 mb-10 h-72 w-1/3 overflow-scroll hover:bg-slate-200 border border-gray-400">
    
    <img className="object-cover w-full rounded-t-lg h-fit md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="sale.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-3xl font-bold tracking-tight">{data.sensei[0].name}</h5>
        <p className="mb-3 font-normal text-xl text-balance">{data.sensei[0].bio}</p>
        <p className="mb-3 font-normal text-xl text-balance">{data.sensei[0].description}</p>

    </div>
</div>
</div>


<div className="flex justify-between mt-10 p-5 mx-7">
    {data.treneri.map((trener) => 
    {
        return (
            <div key={trener.id} className="w-1/5 h-64 overflow-scroll mb-40 hover:bg-slate-200 border-r border-b border-l border-t border-gray-400 p-3">
            <div className="flex gap-3 text-gray-900 font-bold mb-2">
                <img className="w-20 h-20 rounded-full object-fill" src={`${trener.img}`} alt="pic" />
                <h1 className="text-3xl">{trener.name}</h1>
            </div>
            <p className="text-gray-700 text-xl text-balance">{trener.bio}</p>
            {/* <p>{trener.description}</p> */}
            </div> 
        )
    }
)}
</div>

</>

)
}
export default Card