import {inventory} from "./inventory.js";

//div inventory
const TVItem = ({ item }) => (
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
);

//normal inventory
export const inventoryMap = inventory.map((item) => (
    <TVItem key={item.type} item={item} />
))

// Sorting cheapest way
export const sortCheap = inventory.sort((a, b) => a.price - b.price).map((item) => (
    <TVItem key={item.type} item={item} />

));

//Sorting most sold way
export const sortSold = inventory.sort((a, b) => b.sold - a.sold).map((item) => (
    <TVItem key={item.type} item={item} />
));

//Sorting on sport way
export const sortSport = inventory.sort((a, b) => b.refreshRate - a.refreshRate).map((item) => (
    <TVItem key={item.type} item={item} />
))

// const [items, setItems] = useState('');
// const [sortOption, setSortOption] = useState('');

//
// const handleSortClick = (option) => {
//     let sortedItems;
//     if (option === 'cheapest') {
//         inventory.sort((a, b) => a.price - b.price).map((item) => (
//             <TVItem key={item.type} item={item} />
//         ))
//     } else if (option === 'bestseller') {
//         inventory.sort((a, b) => b.refreshRate - a.refreshRate).map((item) => (
//             <TVItem key={item.type} item={item} />
//         ))
//     } else if (option === 'sortSport') {
//         inventory.sort((a, b) => b.refreshRate - a.refreshRate).map((item) => (
//             <TVItem key={item.type} item={item} />
//         ))
//     } else {
//         inventory.map((item) => (
//             <TVItem key={item.type} item={item} />
//         ))
//     }
//     setItems(sortedItems);
//     setSortOption(option);
// }
//
// {sortOption}
// {items.map((item, index) => (
//     // Render each item here
//     <div key={index}>{item.name} - {item.price}</div>
// ))}
// Sort by price (cheapest first)