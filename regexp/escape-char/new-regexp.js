let source = "123";
console.log(source.match(new RegExp("\d", "g")));  // 1
console.log(source.match(new RegExp("\\d", "g")));  // 2