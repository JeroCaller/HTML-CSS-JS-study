let source = "(info)123456-?xxxyyy";
let regexp = /\D/g;
console.log(source.match(regexp));
console.log(source.replace(regexp, ""));