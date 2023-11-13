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
                    <div className="img-wrapper">
                        <img src={bestSellingTv.sourceImg} alt={bestSellingTv.sourceImg}/>
                    </div>
                    <div className="summary">
                        <h2>{bestSellingTv.brand} {bestSellingTv.name} {bestSellingTv.type} - {bestSellingTv.screenQuality}</h2>
                        <p><strong>€{bestSellingTv.price}</strong></p>
                        <ul className="spec">
                            <li>
                                {bestSellingTv.availableSizes[0]} inch ({bestSellingTv.availableSizes[0] * 2.54}) |
                            </li>
                            <li>
                                {bestSellingTv.availableSizes[1]} inch ({bestSellingTv.availableSizes[1] * 2.54}) |
                            </li>
                            <li>
                                {bestSellingTv.availableSizes[2]} inch ({bestSellingTv.availableSizes[2] * 2.54}) |
                            </li>
                            <li>
                                {bestSellingTv.availableSizes[3]} inch ({bestSellingTv.availableSizes[3] * 2.54})
                            </li>
                        </ul>
                        <ul className="icons">
                            <div className="check">
                                <li>{bestSellingTv.options[0].name}</li>
                            </div>
                            <div className="check">
                                <li>{bestSellingTv.options[1].name}</li>
                            </div>
                            <div className="check">
                                <li>{bestSellingTv.options[2].name}</li>
                            </div>
                            <div className="check">
                                <li>{bestSellingTv.options[3].name}</li>
                            </div>
                            <div className="check">
                                <li>{bestSellingTv.options[4].name}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
