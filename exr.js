let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;
let city2 = {
    name: "ГородM",
    population: 1e6
 
    }
function getName() { return this.name; }
    
function ExportStr() {
    return this.name + '\n' + 'population=' + this.npopulation + '\n';
    }
    
console.log(city1);
console.log(city2);
