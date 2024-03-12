var a = prompt("Input your first number:");
var b = prompt("Input your second number:");
var c = prompt("Input your third number:");

a2 = isNaN(a);
b2 = isNaN(b);
c2 = isNaN(c);

if (a2 == false && b2 == false && c2 == false ) {
    function determineTriangle(a, b, c){
        if (a == b && a == c && c == b) {
            window.alert("The Trange is an EQUILATERAL.");
        } 
        else if (a == b && a != c && b != c) {
            window.alert("The Triangle is an ISOSCELES.");
        }
        else if (b == c && b != a && c != a) {
            window.alert("The Triangle is an ISOSCELES.");
        }
        else if (c == a && c != b && a != b) {
            window.alert("The Triangle is an ISOSCELES.");
        }    
        else {
            window.alert("The Triangle is SCALENE.");
        }
    } 
} 
else {
    window.alert("Enter numbers only.");
}





