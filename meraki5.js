let browserType = 'mozi lla';
console.log(browserType.length); // output 8



let browserType = 'mozilla';
console.log(browserType[0]); // output m

var browserType = 'mozilla';
console.log(browserType[browserType.length-1]);// output a

let browserType = 'mozilla is a company';
console.log(browserType.indexOf("company"));// output 13

let browserType = 'mozilla is a company';
console.log(browserType.indexOf('are')); //output -1

let radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());  // output ‘my name is mud’
console.log(radData.toUpperCase());  // output ‘MY NAME IS MUD’