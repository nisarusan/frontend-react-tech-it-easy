import {totalForSale, totalInventory, totalInventorySold} from "./helper/helper.jsx";


function SellDashBoard() {

    return (
        <>
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
        </>
    )
}


export default SellDashBoard;