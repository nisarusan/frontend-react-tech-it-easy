import './App.css';
import {
    totalForSale, totalInventory, totalInventorySold, tvBrand, tvSizes,
    sourceImg, bestPrice, tvSorted
} from "./helper/helper.jsx";

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
                            {tvSizes}
                        </ul>
                        <ul className="icons">
                            {tvSorted}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
