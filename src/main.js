// https://www.linkedin.com/in/urigross/
let x = Number(window.prompt(`Enter number:`));
let y = Number(window.prompt(`Enter Pow factor`));

// Way 1:
console.log(`Way #1: ${Math.pow(x,y)}`);

// Way 2:
function XPowY(x,y) {
    if(y===0){
        return 1;
    }
    else{
        let sum = -x;
        for(let i = 0; i >= -y; i--){
            for (let j = 0; j > -i; i--) {
                sum -= -sum;
                console.log(`sum: ${sum} i: ${i} j:${j}`);
            }

        }
    return x>0? (sum.toString()).substring(1) : sum;
    }
}
console.log(`Way #2: ${XPowY(x,y)}`);

