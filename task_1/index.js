// import {encoded, translations} from './data.js'

// console.log("Let's rock")
// console.log(encoded, translations)



// console.log(decoded)

import { encoded, translations } from './data.js';

const decodeFields = (data) => {
    return data.map(item => {
        const decodedItem = { groupId: item.groupId };
        for (const key in item) {
            if (key.endsWith('Id') && key !== 'groupId') {
                const id = item[key];
                const decodedValue = translations[id] || id;
                decodedItem[key] = decodedValue;
            } else {
                decodedItem[key] = item[key];
            }
        }
        return decodedItem;
    });
};

const uniqueIds = new Set();
encoded.forEach(item => {
    for (const key in item) {
        if (key.endsWith('Id')) {
            uniqueIds.add(item[key]);
        }
    }
});

const decoded = decodeFields(encoded);
console.log(decoded);
console.log(Array.from(uniqueIds));
