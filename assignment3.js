const array = []

function theCount() {
    for (let i = 0; i < 11; i++) {
        if (i % 2 == 0) {
            array.push(i) 
            //= "Count " + i + " is even. " 
            //document.getElementById("count").innerHTML = counteven
            //console.log(counteven)
            //array.forEach(e => console.log(e));

        } else {
            array.push(i)
            //countodd = "Count " + i + " is odd. " 
            //document.getElementById("count").innerHTML = countodd
            //console.log(countodd)
        }
    }
    /*var elements = document.getElementsByTagName('div');
    for (let i = 0; i < array.length; i++) {
       //str =  document.write
       elements.innerHTML = "<p>" + array[i] + "</p>"
    }*/
}


​