let ak__allGrid = document.querySelectorAll('.home-accelerating-careers_grid');
let ak__secondCol = document.querySelector('.home-accelerating-careers_grid-col.is-2nd');

ak__allGrid.forEach(ak__grid => {
    let ak__allGridItems = ak__grid.querySelectorAll('.home-accelerating-careers_grid-item');
    let ak__allGridItemsLength = ak__allGridItems.length;

    if(ak__allGridItemsLength % 2 == 0) {
        ak__allGridItemsLength = ak__allGridItemsLength / 2;
        ak__allGridItems.forEach((ak__gridItem, ak__gridItemId) => {
            if (ak__gridItemId == ak__allGridItemsLength) {
                ak__secondCol.append(ak__gridItem.parentElement);
                ak__allGridItemsLength++;
            }
        });
    }
    else {
        ak__allGridItemsLength = (ak__allGridItemsLength / 2) + 0.5;
        ak__allGridItems.forEach((ak__gridItem, ak__gridItemId) => {
            if (ak__gridItemId == ak__allGridItemsLength) {
                ak__secondCol.append(ak__gridItem.parentElement);
                ak__allGridItemsLength++;
            }
        });
    }
});