import data from "../data/lost-love-in-time.json" assert {type: 'json'};
import fs from "fs";

let newId = 0;

for (let chapter of data) {
    chapter.id = newId;
    console.log(chapter.id);
    newId++
}

fs.writeFile('../data/new-lost-love-in-time.json', JSON.stringify(data), () => { })