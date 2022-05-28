const inp = document.querySelector("input");
const result = document.querySelector(".result")
let operand = [];
let operator = [];
let str="";
// "1+1"
// + , * 
// 1+2
// 12+34
//addition
function add()
{
    // str="1"
    inp.value="";
    operand.push(str); //{1}
    operator.push("+"); // {+}
    str="";
    console.log(operator,operand);
}



//substraction
function sub()
{
     inp.value="";
     operand.push(str);
     operator.push("-");
     str = "";

}

//multiplication
function mul()
{
    inp.value="";
    operand.push(str);
    operator.push("*");
    str = "";

}

//division
function div()
{
    inp.value="";
    operand.push(str);
    operator.push("/");
    str = "";

}



//equals to
function equal()
{
    // result.innerHTML = arr[0];
    // console.log(arr[0]);
    // inp.value="";
    // operator ={+,-,*}
    // operand = {100,34,25,60}
    // 100+34-25*60
    operand.push(str);
    
    let res=Number(operand[0]);
    for(let i=0;i<operator.length;i++)
    {
        if (operator[i]==="+")
        {
            res=res+Number(operand[i+1]);
        }
        else if (operator[i] === "-") {
          res = res - Number(operand[i+1]);
        } else if (operator[i] === "/") {
          res = res / Number(operand[i+1]);
        } else {
          res = res * Number(operand[i+1]);
        }
    }



    result.innerHTML = res;
    inp.value="";

}





//for 1
function set1()
{
    str=str+"1";
    inp.value=str;
    
}

//for 2
function set2()
{
    str=str+"2";
    inp.value=str;
}



//for 3
function set3()
{
    str=str+"3";
    inp.value=str;
}



//for 4
function set4()
{
    str=str+"4";
    inp.value=str;
}



//for 5
function set5()
{
    str=str+"5";
    inp.value=str;
}



//for 6
function set6()
{
    str=str+"6";
    inp.value=str;
}



//for 7
function set7()
{
    str=str+"7";
    inp.value=str;
}



//for 8
function set8()
{
    str=str+"8";
    inp.value=str;
}



//for 9
function set9()
{
    str=str+"9";
    inp.value=str;
}


//for 0
function set0()
{
    str=str+"0";
    inp.value=str;
}
