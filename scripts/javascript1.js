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