import './App.css';
import {bestSell, totalForSale, totalInventory, totalInventorySold, bestSellingTv, inventory} from "./helper/helper.js";


function App() {
    return (
        <>
            <main>
                <h1>Tech it easy dashboard</h1>
                <p>Verkoopoverzicht</p>
                <section className="dashboard">
                    <div className="box green">
                        <p>Aantal verkochten</p>
                        <p><strong>{totalInventorySold}</strong></p>
                    </div>
                    <div className="box blue">
                        <p>Aantal ingekochte producten</p>
                        <p>{totalInventory}</p>
                    </div>
                    <div className="box red">
                        <p>Aantal te verkopen producten</p>
                        <p>{totalForSale}</p>
                    </div>
                </section>
                <h2>Best verkochte tv</h2>
                <div className="box-sell">
                    <img src={bestSellingTv.sourceImg} alt={bestSellingTv.sourceImg}/>
                    <div className="summary">
                        <h2>{bestSellingTv.brand} {bestSellingTv.name} {bestSellingTv.type} - {bestSellingTv.screenQuality}</h2>
                        <p>€{bestSellingTv.price}</p>
                        <p>{bestSell}</p>
                        <ul className="spec">
                            <li>
                                {bestSellingTv.availableSizes[0]}
                            </li>
                        </ul>
                        <ul className="icons">
                            <li className="check">{bestSellingTv.options[0].name}</li>
                            <li className="neutral">{bestSellingTv.options[1].name}</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
