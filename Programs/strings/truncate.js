function truncate(str, num) {
    return str.length > num ? `${str.slice(0, num)}...` : str;
}
console.log(truncate('hi h', 4));