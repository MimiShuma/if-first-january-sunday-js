let years = [];
for (let year = 2014; year <= 2050; year++) {
    years.push(year);
}
// console.log(years);
let januaryDate = null;
let januaryWeekDay = null;
let txtNode = null;
let target = null;
let br = null;
for (let i = 0; i < years.length; i++) {
    januaryDate = new Date(years[i], 0, 1);
    januaryWeekDay = januaryDate.getDay();

    if (januaryWeekDay === 0) {
        txtNode = document.createTextNode(years[i]);
        br = document.createElement('BR')
        target = document.getElementById('year');
        target.appendChild(br);
        target.appendChild(txtNode);

    }
}


