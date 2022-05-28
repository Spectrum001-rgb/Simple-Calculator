const inp = document.querySelector("input");
const result = document.querySelector(".result")
let total = 0;
let arr =[];
let currentOperation = ""

//addition

function showTotal(_total){

    result.innerHTML = _total
}

function add()
{
    let val = Number(inp.value);
    currentOperation = "+"
    total=total+val;

    arr.push(`+${val}`)
    
    inp.value="";
    console.log(arr)
    
    // showTotal(total)
}

//substraction

function sub()
{
    currentOperation = "-"
    let val = Number(inp.value);
    
    if(arr.length === 0){
        total += val
    } else {

        total=total-val;
    }

    arr.push(`-${val}`)
    inp.value="";

    console.log(arr)

    
    
}

//multiplication

function mul()
{

    if(Number(inp.value) && total===0)
    {
        total=Number(inp.value)
    }
    
    else
    {
        let val = Number(inp.value);
        total=total * val;
        inp.value="";
        
    }
    
}

//division

function div()
{

}

//eqaual to check

function equal()
{
    if(currentOperation === "-"){
        total -= +inp.value
    } else {
        total += +inp.value

    }
    showTotal(total)
    total = 0
arr =[]
}


//for 1
function set1()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "1";
        inp.value=Number(con);

    }

    else{

        inp.value=1;
    }
}

//for 2
function set2()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "2";
        inp.value=Number(con);

    }

    else{

        inp.value=2;
    }
}

//for 3
function set3()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "3";
        inp.value=Number(con);

    }

    else{

        inp.value=3;
    }
}

//for 4
function set4()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "4";
        inp.value=Number(con);

    }

    else{

        inp.value=4;
    }
}

//for 5
function set5()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "5";
        inp.value=Number(con);

    }

    else{

        inp.value=5;
    }
}

//for 6
function set6()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "6";
        inp.value=Number(con);

    }

    else{

        inp.value=6;
    }
}

//for 7
function set7()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "7";
        inp.value=Number(con);

    }

    else{

        inp.value=7;
    }
}

//for 8
function set8()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "8";
        inp.value=Number(con);

    }

    else{

        inp.value=8;
    }
}

//for 9
function set9()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "9";
        inp.value=Number(con);

    }

    else{

        inp.value=9;
    }
}

//for 0
function set0()
{
    if(inp.value.length)
    {
        let con = String(inp.value)+ "0";
        inp.value=Number(con);

    }

    else{

        inp.value=0;
    }
}