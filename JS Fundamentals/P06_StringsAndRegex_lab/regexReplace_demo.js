
pattern =/(.*?)/  // this means "."- match anything, "*" zero or more times "?" apply lazy Mach example:

let str = 'Visit <link>http://fb.com</link> or <link>http://softuni.bg</link>.';
str = str.replace(/<link>(.*?)<\/link>/g,'<a href="$1">Link</a>');   // (.*?) matching lazy i.e. till the first occurrence of <\/link>
console.log(str);
str = 'Visit <link>http://fb.com</link> or <link>http://softuni.bg</link>.';
str = str.replace(/<link>(.*)<\/link>/g,'<a href="$1">Link</a>');  //(.*) matching everything till the last <\/link> i.e greedy matching
console.log(str);
