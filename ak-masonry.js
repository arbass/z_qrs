let ak__allGrid = document.querySelectorAll('.home-accelerating-careers_grid');
let ak__allFridItems_1 = ak__allGrid[0].querySelectorAll('.cl-i__home-accelerating-careers');

if (ak__allFridItems_1.length < 6) {
    document.querySelector('.home-accelerating-careers_button-wrapper').remove();
    document.querySelector('.button-more.is-testimonials').remove();
} 

ak__allGrid.forEach(ak__grid => {
    let ak__currentItems = ak__grid.querySelectorAll('.cl-i__home-accelerating-careers');
    let ak__currentItemsLength = ak__currentItems.length;
    let ak__currentAppendWaiter = ak__grid.querySelector('.home-accelerating-careers_grid-col.is-2nd');

    if(ak__currentItemsLength % 2 == 0) {
        ak__currentItemsLength = ak__currentItemsLength / 2;
        ak__currentItems.forEach((ak__items,ak__itemsId) => {
            if (ak__currentItemsLength == ak__itemsId) {
                ak__currentAppendWaiter.append(ak__items);
                console.log(ak__items);
                ak__currentItemsLength++;
            }
        });
    }

    else {
        ak__currentItemsLength = (ak__currentItemsLength / 2) + 0.5;
        ak__currentItems.forEach((ak__items,ak__itemsId) => {
            if (ak__currentItemsLength == ak__itemsId) {
                ak__currentAppendWaiter.append(ak__items);
                ak__currentItemsLength++;
            }
        });
    }
});
