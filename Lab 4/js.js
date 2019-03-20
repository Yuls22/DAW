function tabla(){
    
    var size = prompt("Ingresa el numero de ");

    document.write("<table>") ;
    
    for(let i = 1 ; i <= size ; i++){
        
        document.write("<tr>") ;
        document.write("<td>"+i+"</td>" + "<td>"+i*i+"</td>" +"<td>"+i*i*i+"</td>" ) ;
        document.write("</tr>") ;
    }
    document.write("</table>") ;
}

function suma(){
    let startTime = new Date() ;
    let numero1 = Math.floor(Math.random()*(100+1)) ;
    let numero2 = Math.floor(Math.random()*(100+1));
    let number = prompt ("Dame la suma de "+numero1+"+"+numero2) ;
    let numero3 = (+numero1) +(+numero2) ;
    if (number == numero3){
        let endingTime = new Date() ;
        let difTime = endingTime - startTime ; 
         difTime = difTime/1000 ;
        difTime = Math.round(difTime) ;
        
        document.write(difTime +" seconds"+"<br>") ;
        document.write("Correcto") ;
    }
    else{
        let endingTime = new Date() ;
        let difTime = endingTime - startTime ; 
        
        document.write(difTime +" seconds") ;
        document.write("Incorrect") ;
    }
    
}

function contador(){
    let size = prompt("Ingresa el tamano del arreglo") ;
    let array = [] ;
    let negativos = 0, ceros= 0, positivos=0, numeros ;
    for(let i=0 ; i<size; i++){
        
        numeros = prompt("Ingresa Valor") ;
        array.push(numeros) ;
        if(array[i]< 0){
            negativos ++ ;
        }
        else if(array[i] == 0){
            ceros++ ;
        }
        else{
            positivos++;
        }
    }
    
    document.write("Negativos= "+negativos+"<br> Ceros= "+ceros+"<br> Positivos= "+positivos) ;
}

function promedios(){
let size = prompt("Ingresa el tamano del arreglo") ;
    let array = [] ;
    let numeros ;
    let prom=0 ;
    for(let i=0 ; i<size; i++){
        
        numeros = prompt("Ingresa Valor") ;
        array.push(numeros) ;
        prom = (+array[i]) + (+prom) ;
    }
    
    prom = prom/(size) ;
    
    document.write("Promedio= "+prom) ;
    
}

function number (){
        let num = prompt("Dame un numero positivo ");
		let str = num.toString();
		let x = str.split("").reverse().join("");
		let result = Number(x);
		document.write("numero "+result);			

    
}

function libre(){
    document.write("Verificar que 3 lineas puedan formar un triangulo")
    let l1 = prompt("Ingresa el lado 1") ;
    let l2 = prompt("Ingresa el ladoT 2") ;
    let l3 = prompt("Ingresa el lado 3") ;
    
    class Triangulo{
        
        constructor(l1,l2,l3){
            this.l1 = l1;
            this.l2 = l2;
            this.l3 = l3;
        }
        
        evaluar(){
            if(l1 == l2 && l2==l3){
                document.write("Si se puede");
            }
            else if((+l1 + +l2>l3) && (+l2 + +l3>l1) && (+l1 + +l3>l2)){
                document.write("Si se puede") ;
            }
            else{
                document.write("No se puede") ;
            }
        }
    }
    
    let tri = new Triangulo(l1,l2,l3) ;
    tri.evaluar() ;
    
}