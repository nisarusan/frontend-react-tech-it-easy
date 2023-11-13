import {inventory, bestSellingTv} from "../constants/inventory.js";
export const {type, name, price} = inventory;
export const {sourceImg} = bestSellingTv;

export {bestSellingTv, inventory};
//total inventory check
export let totalInventorySold = 0;
//total sold
export let bestSell = bestSellingTv.sold;
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
export let tvBrand = `${bestSellingTv.brand} ${bestSellingTv.name} ${bestSellingTv.type} - ${bestSellingTv.screenQuality}`;

//Tv inc cm weergave

export const tvSizes = (index) => {
    const inches = bestSellingTv.availableSizes[index];
    const centimeters = inches * 2.54;
    return `${inches} inch (${centimeters} cm) |`;
}

//Tv Options
export const tvOptions = (index) => {
    return bestSellingTv.options[index].name;
}


