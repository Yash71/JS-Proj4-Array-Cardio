const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];  //last name, first name

  //array methods
//   list of inventors who lived in 1500
const fifteen=inventors.filter(inventor => inventor.year>=1500 && inventor.year <1600);
console.table(fifteen); //prints the result in table format

// array of full names of the inventors (first+last)
const fullnames=inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullnames);

// inventors from oldest to youngest
const order= inventors.sort((a,b)=> a.year>b.year ? 1:-1);
console.table(order);

// sum of all the years the inventors lived
const total= inventors.reduce((total, inventor)=> {
    return total + (inventor.passed - inventor.year);
},0);
console.log(total);

// sort inventors by year lived
const oldest=inventors.sort((a,b)=>{
    const last=a.passed-a.year;
    const next=b.passed-b.year;
    return last>next? -1:1;
});
console.table(oldest);

// sort the people'name alphabetically by last name
const alpha=people.sort((last,next)=>{
    const [Alast,Afirst]=last.split(', ');
    const [Blast,Bfirst]=next.split(', ');
   return Alast>Blast?1:-1;
});
console.log(alpha);

//sum up the occurance of the each object in the given array
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const instance=data.reduce((obj,item)=>{
    if(!obj[item]){
       obj[item]=0; 
    }
    obj[item]++;
    return obj;
},{})
console.log(instance);
