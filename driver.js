const API_ENDPOINT = `https://api.publicapis.org/entries`;
const commandArgs = process.argv.slice(2);


// Needs input validation
const selected_category = `${commandArgs[0]}`;
const limit = +commandArgs[1];




const res = await fetch(`${API_ENDPOINT}`);
const json = await res.json();

// Complete response may be needed later, however, this will mean less typing
// and therefore reduces chances of typo causing issues down the line
const entries = json['entries'];


// Reduce dataset size before alphabetically sorting - reduces computation needed
const category_filter = entries.filter((val) => { return val['Category'] === selected_category });

// Use localeCompare to sort data alphabetically
const alphabet_sort = category_filter.sort((a,b) => { a['API'].localeCompare(b['API'])});

// Limit remaining data - needs to be last
const limitedResults = alphabet_sort.filter((val, index) => { return index < limit });

const retVal = limitedResults.length < 1 ? "No results": limitedResults;

console.log(retVal);