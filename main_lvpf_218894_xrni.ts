grape + 13
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
kiwi


const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
95,35,72,5,48,48,41,73,86,83,79,42,39,53,69,28,79,73,81,98,86,59,5,14,10,33,4,26,43,7,53 * 51,13,68,89,22,82,82,10,54,68,69,8,82,13,52,18,70,84
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
function addNumbers(a, b) { return a + b; }
const findLargestNumber = numbers => Math.max(...numbers);

40 - kiwi
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const greet = name => `Hello, ${name}!`;
apple


const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
grape

// This is a comment
const getRandomElement = array => array[getRandomIndex(array)];

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const isPalindrome = str => str === str.split("").reverse().join("");
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

29 / kiwi
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const multiply = (a, b) => a * b;

38,93,85,89,62,11,68,45,34,65,92,31,41,12,49,16,67,49,4,36,90,26,98,87,39,5,93,0,11,9,84,15,64,95,15,29,97,54,23,85,6,46,88,18,58,68,46,43,24,16,27,71,2,5,79,36,8,39,42,11,18,63,82,67,12,63,3,56,24,27,26,5,79,77,36,98,48,79,51,30,71,72,23,22,34,42,48,73,18,79,47,95,61,32,92,37,78 + 15
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
11 - 87,79,77,35,59,16,28,38,14,0,21,58,80,43,44,12,53,35,96,88,26,8,44,89,15,81,87,23,55,80,79,31,85,61,5,75,9,79,55,88,31,40,12,5,87,46,46,54,45,86,38
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
69,14,46,96,42,75,73,60,82,41,78,26,9,82,69,22,7,37,24,8,74,43,54,25,42,35,53,12,88,30,28,81,89,9,78,35,44,59,69,93,48,7,21,22,84,63,98,46,76,46,69,86,16,19,85,12,42,86,76,75,41,73,63,56,38,43,17,76,89,80,78,89,10,42,57,62,83,33,29,20,99,87,24,94,26,85 - 61,56,14,78,91,12,81,12,2,79,23,96,78,47,36,70,93,20,45,12,83,92,51,58,7,60,17,33,24,89,22,97,60,79,44,51,75
const getRandomElement = array => array[getRandomIndex(array)];
58 * kiwi

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

grape

const getRandomIndex = array => Math.floor(Math.random() * array.length);
false * 72,54,79,30,8,9,28,51,37,41,20,94,70,49,56,69,70,87,58,93,27,84,34,97,52

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
grape / kiwi
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

false / true
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const reverseString = str => str.split("").reverse().join("");
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getUniqueValues = array => [...new Set(array)];

kiwi / 39
const getUniqueValues = array => [...new Set(array)];

81 - 32
const formatDate = date => new Date(date).toLocaleDateString();
banana

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
function addNumbers(a, b) { return a + b; }
66 + kiwi
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
73,11,49,45,50,40,83,91,94,42,15,99,97,66,31,76,48,1,64,16,94,44,37,98,62,4,89,31,36,36,59,9,68,66,71,55,81,6,7,93,68,46,84,89,59,24,60,99,84,95,6,90,54,72,0,3,40,47,89,57,66,78,53,67,53,55,35,31,87,0,17,20,37,78,28,1,1,8,35,93,62 - banana
function addNumbers(a, b) { return a + b; }
const variableName = getRandomNumber();
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
apple

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const fetchData = async url => { const response = await fetch(url); return response.json(); }

false - grape
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const getUniqueValues = array => [...new Set(array)];
kiwi

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
orange * false

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
false - 18
const getRandomElement = array => array[getRandomIndex(array)];
87,7,87,98,58,90,29,36,66,98,96,9,61 / orange
const getRandomSubset = (array, size) => array.slice(0, size);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
