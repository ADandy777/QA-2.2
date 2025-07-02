alert('Welcome to Private Aviation')

let table = `
    <div style="border: 2px solid #333; display: inline-block; padding: 10px; font-family: monospace; background-color:rgb(243, 5, 5);">
`;

for (let row = 1; row < 11; row++) {
    table += "<div>";

    for (let column = 1; column < 11; column++) {
        let res = row * column;
        if (res < 10)
            table += '0';
        table += res + "|";
    }

    table += "</div>"
}

table += "</div>"
document.write(table);

let odds = [1, 3, 5, 7];
        odds.push(9);
        for (var i = 0; i < odds.length; i++) {
            console.log(odds[i]);
        }

        odds.forEach(n => console.log(n));
        odds.forEach(n => {
            console.log("----------");
            console.log(n);
        });

        for (let n of odds) {
            console.log(n)
        }