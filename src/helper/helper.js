import {inventory, bestSellingTv} from "../constants/inventory.js";

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
