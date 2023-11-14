import './App.css';
import {
    totalForSale, totalInventory, totalInventorySold, tvBrand, tvSizes, tvOptions,
    sourceImg, bestPrice
} from "./helper/helper.js";

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
                <h2>Best verkocht tv</h2>
                <div className="box-sell">
                    <div className="img-wrapper">
                        <img src={sourceImg} alt={sourceImg}/>
                    </div>
                    <div className="summary">
                        <h2>{tvBrand}</h2>
                        <p><strong>€{bestPrice}</strong></p>
                        <ul className="spec">
                            <li>
                                {tvSizes(0)}
                            </li>
                            <li>
                                {tvSizes(1)}
                            </li>
                            <li>
                                {tvSizes(2)}
                            </li>
                            <li>
                                {tvSizes(3)}
                            </li>
                        </ul>
                        <ul className="icons">
                            <div className="check">
                                <li>{tvOptions(0)}</li>
                            </div>
                            <div className="check">
                                <li>{tvOptions(1)}</li>
                            </div>
                            <div className="check">
                                <li>{tvOptions(2)}</li>
                            </div>
                            <div className="check">
                                <li>{tvOptions(3)}</li>
                            </div>
                            <div className="check">
                                <li>{tvOptions(4)}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}
export default App
