// Map
// Creating an empty Map
const map = new Map()
console.log(map)

// Creating an Map from array
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
map = new Map(countries)
console.log(map)
/**
 * Map(3) {
  'Finland' => 'Helsinki',
  'Sweden' => 'Stockholm',
  'Norway' => 'Oslo'}
 */
console.log(map.size) // 3

// Adding values to the Map
const countriesMap = new Map()

console.log(countriesMap.size) // 0

countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
/**
 * Map(3) {
  'Finland' => 'Helsinki',
  'Sweden' => 'Stockholm',
  'Norway' => 'Oslo'}
 */
console.log(countriesMap.size) // 3

// Getting a value from Map
console.log(countriesMap.get('Finland')) // Helsinki

// Checking key in Map
console.log(countriesMap.has('Finland')) // true

// Map Loop
// 1. for one variable
for (const country of countriesMap) {
  console.log(country)
}
/**
 * [ 'Finland', 'Helsinki' ]
 * [ 'Sweden', 'Stockholm' ]
 * [ 'Norway', 'Oslo' ]
 */

// 2. for two variable
for (const [country, city] of countriesMap) {
  console.log(country, city)
}
/**
 * Finland Helsinki
 * Sweden Stockholm
 * Norway Oslo
 */

// 3. forEach one variable (only value)
countriesMap.forEach(item => {
  console.log(item)
})
/**
 * Helsinki
 * Stockholm
 * Oslo
 */

// 4. forEach two variable (value and key)
countriesMap.forEach((value, key) => {
  console.log(key, value)
})
/**
 * Finland Helsinki
 * Sweden Stockholm
 * Norway Oslo
 */
