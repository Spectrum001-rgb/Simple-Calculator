const inp = document.querySelector("input");
const result = document.querySelector(".result")
let operand = [];
let operator = [];
let str="";
let disp="";
// "1+1"
// + , * 
// 1+2
// 12+34
//addition
function add()
{
    disp+='+';
    inp.value=disp;
    operand.push(str); //{1}
    operator.push("+"); // {+}
    str="";
    // console.log(operator);
    // console.log(operand);
}



//substraction
function sub()
{
    disp+='-';
    inp.value=disp;
     operand.push(str);
     operator.push("-");
     str = "";

}

//multiplication
function mul()
{
    disp+='*';
    inp.value=disp;
    operand.push(str);
    operator.push("*");
    str = "";

}

//division
function div()
{
    disp+='/';
    inp.value=disp;
    operand.push(str);
    operator.push("/");
    str = "";

}



//equals to
function equal()
{
    operand.push(str);
    
    let res=Number(operand[0]);
    console.log(operand.length);
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
    disp=res;
    while(operand.length > 0) {
        operand.pop();
    }
    while(operator.length > 0) {
        operator.pop();
    }
    str=String(res);
}





//for 1
function set1()
{
    str=str+"1";
    disp=disp+"1";
    inp.value=disp;
    
}

//for 2
function set2()
{
    str=str+"2";
    disp=disp+"2";
    inp.value=disp;
}



//for 3
function set3()
{
    str=str+"3";
    disp=disp+"3";
    inp.value=disp;
}



//for 4
function set4()
{
    str=str+"4";
      disp=disp+"4";
    inp.value=disp;
}



//for 5
function set5()
{
    str=str+"5";
       disp=disp+"5";
    inp.value=disp;
}



//for 6
function set6()
{
    str=str+"6";
     disp=disp+"6";
    inp.value=disp;
}



//for 7
function set7()
{
    str=str+"7";
     disp=disp+"7";
    inp.value=disp;
}



//for 8
function set8()
{
    str=str+"8";
       disp=disp+"8";
    inp.value=disp;
}



//for 9
function set9()
{
    str=str+"9";
      disp=disp+"9";
    inp.value=disp;
}


//for 0
function set0()
{
    str=str+"0";
       disp=disp+"0";
    inp.value=disp;
}
