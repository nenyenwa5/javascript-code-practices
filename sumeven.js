function myFunc(num) {
    var sum = 0;
    for (var i = 2; i <= num;) {
        if (i % 2 == 0) {
            sum += i;
            
        }
        i++;
    }
    document.write("The sum of all even numbers in" + " " + num + " " + "is" + " " + "=" + " " + sum + "<br>");
}

myFunc(10);

