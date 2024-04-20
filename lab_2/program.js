function Switch(data){
    if (data.task1.checked){
        let str = document.getElementById('str');
        let img = document.getElementById('img');
        str.innerHTML = '<p><label>a = <input type = "number" id = "input1"></label></p><p><label>h = <input type = "number" id = "input2"></label></p><p><label>g = <input type = "number" id = "input3"></label></p>';
        img.innerHTML = '<img src="paralel1.jpg">';
        let input1 = document.querySelector("#input1");

        input1.addEventListener("click", () => {
            input1.classList.remove("error");
        });

        let input2 = document.querySelector("#input2");

        input2.addEventListener("click", () => {
            input2.classList.remove("error");
        });

        let input3 = document.querySelector("#input3");

        input3.addEventListener("click", () => {
            input3.classList.remove("error");
        });
        return;
    }
    if (data.task2.checked){
        let str = document.getElementById('str');
        let img = document.getElementById('img');
        str.innerHTML = '<p><label>a = <input type = "number" id = "input1"></label></p><p><label>b = <input type = "number" id = "input2"></label></p><p><label>h = <input type = "number" id = "input3"></label></p>';
        img.innerHTML = '<img src="paralel2.jpg">';
        let input1 = document.querySelector("#input1");

        input1.addEventListener("click", () => {
            input1.classList.remove("error");
        });

        let input2 = document.querySelector("#input2");

        input2.addEventListener("click", () => {
            input2.classList.remove("error");
        });

        let input3 = document.querySelector("#input3");

        input3.addEventListener("click", () => {
            input3.classList.remove("error");
        });

        return;
    }
}

function calculate(data){
    let x = data.input1.value;
    let y = data.input2.value;
    let z = data.input3.value;

    let valid = true;

    if (Number(x) <= 0 || isNaN(x)){
        data.input1.classList.add("error");
        valid = false;
    }

    if (Number(y) <= 0 || isNaN(y)){
        data.input2.classList.add("error");
        valid = false;
    }

    if (Number(z) <= 0 || isNaN(z)){
        data.input3.classList.add("error");
        valid = false;
    }

     if (!data.task3.checked && !data.task4.checked && !data.task5.checked && !data.task6.checked) {

        let findText = document.getElementById('find');
        findText.style.color = 'red';

    } else if (!valid){

        let findText = document.getElementById('find');
        findText.style.color = 'black';
        let output = document.getElementById('output');
        output.innerHTML = "<p>Ошибка!!!</p>";

    } else {
        
        let findText = document.getElementById('find');
        findText.style.color = 'black';
        let output = document.getElementById('output');
        output.innerHTML = "<p>Результат:</p>";
        
        if (data.task1.checked){
            if(data.task3.checked){
                let h = (x * Math.sin((z*Math.PI)/180));

                let newElement1 = document.createElement('p');
                newElement1.innerHTML = "h = " + h.toFixed(3);
                output.appendChild(newElement1);
            }

            if(data.task4.checked){
                let b = (y/Math.sin((z*Math.PI)/180));
                let l1 = Math.sqrt(x**2 + b**2 + 2*x*b*Math.cos((z*Math.PI)/180));
                let l2 = Math.sqrt(x**2 + b**2 - 2*x*b*Math.cos((z*Math.PI)/180));
                let newElement2 = document.createElement('p');

                newElement2.innerHTML = "l1 = " + l1.toFixed(3) + " l2 = " + l2.toFixed(3);
                output.appendChild(newElement2);
            }

            if(data.task5.checked){
                let S = y * x;
                let newElement3 = document.createElement('p');

                newElement3.innerHTML = "S = " + S.toFixed(3);
                output.appendChild(newElement3);
            }

            if(data.task6.checked){
                let b = (y/Math.sin((z*Math.PI)/180));
                console.log(b);
                let l1 = Math.sqrt(x**2 + b**2 + 2*x*b*Math.cos((z*Math.PI)/180));
                let l2 = Math.sqrt(x**2 + b**2 - 2*x*b*Math.cos((z*Math.PI)/180));

                let G1 = ((b**2 - x**2)/(l1*l2)*180)/Math.PI;
                let G2 = (x**2 - b**2)/(l1*l2);

                let newElement4 = document.createElement('p');
                newElement4.innerHTML = "G1 = " + G1.toFixed(3) + ' G2 = ' + G2.toFixed(3);
                output.appendChild(newElement4);
            }
        }

        if (data.task2.checked){
            if(data.task3.checked){
                
                let S = z*y;

                let h = (S/x);

                let newElement1 = document.createElement('p');

                newElement1.innerHTML = "h = " + h.toFixed(3);
                output.appendChild(newElement1);

            }

            if(data.task4.checked){

                let l1 = Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2));
                let l2 = Math.sqrt(Math.pow(y, 2) + Math.pow(z, 2));
                let newElement2 = document.createElement('p');

                newElement2.innerHTML = "l1 = " + l1.toFixed(3) + " l2 = " + l2.toFixed(3);
                output.appendChild(newElement2);

            }

            if(data.task5.checked){
                
                let S = y * z;
                let newElement3 = document.createElement('p');

                newElement3.innerHTML = "S = " + S.toFixed(3);
                output.appendChild(newElement3);

            }

            if(data.task6.checked){
            
                let l1 = Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2));
                let l2 = Math.sqrt(Math.pow(y, 2) + Math.pow(z, 2));

                let ugol = Math.asin((2*z*y)/(l1*l2)) * (180/Math.PI);



                let newElement4 = document.createElement('p');
                newElement4.innerHTML = "G1 = " + ugol.toFixed(2) + ' G2 = ' + (180).toFixed(2);
                output.appendChild(newElement4);
            }
        }
    }
    return true;
}

document.getElementById("Clear").onclick = function(e) {
    e.preventDefault();
    document.getElementById(`input1`).value = "";
    document.getElementById(`input2`).value = "";
    document.getElementById(`input3`).value = "";
    document.getElementById('output').innerHTML = "";
}