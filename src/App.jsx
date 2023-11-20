import './App.css';
import {
    totalForSale, totalInventory, totalInventorySold, tvBrand, tvSizes,
    sourceImg, bestPrice, tvSorted, options
} from "./helper/helper.jsx";
import {inventory} from "./constants/inventory.js";

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
                <section className="all-tv">
                    <div className="buttons">
                        <button>Meest verkocht</button>
                        <button>Goedkoopste eerst</button>
                        <button>Meest geschikt voor sport eerst</button>
                    </div>
                    <article>
                        {inventory.map((item) => (
                            <div key={item.type}>
                                <div className="img-wrapper">
                                    <img src={item.sourceImg} alt={item.sourceImg}/>
                                </div>
                                <div className="summary">
                                    <h2>{item.brand} {item.type} - {item.screenQuality}</h2>
                                    <p><strong>€{item.price}</strong></p>
                                    <ul className="spec">
                                        {item.availableSizes.map((size) => (
                                            <li key={size}>{size} inches</li>
                                        ))}
                                    </ul>
                                    <ul className="icons">
                                        {/*{options.map(item => <div className={item.applicable ? "check" : "neutral"} key={item.name}> <li>{item.name}</li>}*/}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </article>
                </section>
            </main>

        </>
    )
}

export default App
