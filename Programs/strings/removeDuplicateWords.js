function removeDuplicateWords(s) {
    return [...new Set(s.split(' '))].join(' ');
}

console.log(removeDuplicateWords('Hi bye Hi x x x'));