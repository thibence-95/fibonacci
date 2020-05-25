document.getElementById("input").addEventListener("click", function fibonacci (result, len) {


    let input = document.getElementById("input");
    let output = document.getElementById("output");


        let num1 = result[0],
            num2 = result[1],
            next,
            cnt = 2;

        while (cnt < len) {
            next = num1 + num2;
            num1 = num2;
            num2 = next;
            result.push(next);
            cnt++;
        }






    let select = fibonacci(result).select((input.value));

    console.log(select);

    return result;
});


