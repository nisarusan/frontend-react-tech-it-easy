import {inventory, bestSellingTv} from "../constants/inventory.js";
export const {type} = inventory;
export const {
    sourceImg,
    availableSizes,
    sold: bestSell,
    brand,
    name: nameBestTv,
    type: bestType,
    screenQuality,
    price: bestPrice,
    options
} = bestSellingTv;
// export {bestSellingTv, inventory};
//total inventory check
export let totalInventorySold = 0;
//forEach to check total inventory
inventory.forEach(item => totalInventorySold += item.sold);
export let totalInventory = 0;
for (let index in inventory) {
    totalInventory += inventory[index].originalStock;
}

// totalSold include inventory check
export let totalSold = totalInventorySold + bestSell;
//total available for sale
export let totalForSale = totalInventory - totalSold + bestSell;
// export default ProductSalesCalculator;

// Opdracht 2
//Productweergave tv
export let tvBrand = `${brand} ${nameBestTv} ${bestType} - ${screenQuality}`;
export const tvSizes = availableSizes.map(sizes => <li key={tvBrand}>{sizes} inch {sizes * 2.54} cm - </li>)
export const tvSorted = options.map(option => <div className={option.applicable ? "check" : "neutral"} key={option.name}> <li>{option.name}</li>
</div>);

//old method with only one check or else
// export const tvNeutral = options.map(option => !option.applicable ? <div className="check" key={option.name}><li>{option.name}</li></div> : null);




