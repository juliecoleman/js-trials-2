"use strict";


// 1. printIndices
function printIndices(items) {
  for (const idx in items) {
    console.log(`${items[idx] } ${idx}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (const idx in items) {
    if (idx % 2 === 0) {
      result.push(items[idx]);
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b);
  const newSortedItems = sortedItems.slice(0, n);
  newSortedItems.reverse();

  console.log(newSortedItems)
}
