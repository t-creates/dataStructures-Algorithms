/* Extract the domain name from a Url

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

// Solution #0
function domainName(url){
  url = url.replace('https://', '')
  url = url.replace('http://', '')
  url = url.replace('www.', '')
  return url.split('.')[0]
}

// Solution #1
function domainName1(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

// Solution #2
function domainName3(url){
  const regexPattern = /\w+:\/+|www\.|\.\w+/;
  const result = url.split(regexPattern).find(el => el);
  return result;
}

