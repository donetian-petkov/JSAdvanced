function arraysDemo (array){
   array = array.sort((a,b) => a.length - b.length || a.localeCompare(b)); //SortBy().ThenBy()

    console.log(array.join('\n'));
}

arraysDemo(['alpha', 'beta', 'gamma']);