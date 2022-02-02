const pyramid = number => {
    let levels = "";
    const midpoint = Math.floor((2 * number - 1) / 2);

    for (let row = 0; row < number; row++) {
        let level = "";
        for (let column = 0; column < 2 * number - 1; column++)
            level += midpoint - row <= column && column <= midpoint + row ? "#" : " ";
        levels += level + "\n";
    }

    return levels;
};

console.log(pyramid(7))