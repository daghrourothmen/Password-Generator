const AlphabetTableUppercase=['A','B','C','D','E','F',
                     'G','H','I','J','K','L',
                     'M','N','O','P','Q','R',
                     'S','T','U','V','W','X',
                     'Y','Z'];

const AlphabetTableLowerCase=AlphabetTableUppercase.map((Upper)=>{
 return Upper.toLocaleLowerCase();
});

const NumbersTable=[0,1,2,3,4,5,6,7,8,9];

const SymbolTable=['.',',','?','§','!','<','>','=','*','/','-','+','|','^','(',')','_','%','°','{','}','&'];

const RandomTable=((Math.random())*10).toFixed(0);

let length=8;
let Password='';
let RandomPosition=((Math.random())*10).toFixed(0);
let tab=[RandomPosition];
function PasswordGenerator(){

    while(length >0)
    {

        Password=Password+SymbolTable[RandomPosition]+NumbersTable[RandomPosition]
                         +AlphabetTableLowerCase[RandomPosition]+AlphabetTableUppercase[RandomPosition];
        RandomPosition=((Math.random())*10).toFixed(0);
        length--;
       tab.push(RandomPosition);

    }

    return console.log(Password,' ',tab);

};

// console.log(AlphabetTableLowerCase);
// console.log(AlphabetTableUppercase);

console.log(PasswordGenerator());