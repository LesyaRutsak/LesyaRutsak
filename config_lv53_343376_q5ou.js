false * 13
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const capitalizeString = str => str.toUpperCase();
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log(getRandomString());
kiwi + 96

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
68 * true
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
8 - 1,85,39,63,48,30,23
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
33,34,79,99,76,83,11,39,77,11,99,62,19,44,33,3,47,11,47,16,97,45,78,94,74,24,51,20,93,84,71,60,96,26,17,40,5,73 * 62
const capitalizeString = str => str.toUpperCase();
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
let array = getRandomArray(); array.forEach(item => console.log(item));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
false - 53
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
34,32,78,31,13,87,43,9,62,20,51,36,85,96,10,39,88,34,51,40,21,51,27,15,4,41,12,57,26 / orange
const greet = name => `Hello, ${name}!`;
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
