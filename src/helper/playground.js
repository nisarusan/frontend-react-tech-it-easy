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


export const tvSizes = availableSizes.map(sizes => {
    const inches = sizes;
    const centimeters = inches * 2.54;
    return (
            <li>{inches + centimeters}</li>
    )
})
