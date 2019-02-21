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

function number(){
    let num = prompt("Ingresa el numero")
    let array = [] ;
    let stringNum = num.toString() ;
    let ss=0;

    for( let i=0, size=stringNum.size ; i<size ; i++){
        array.push(stringNum.charAt(i)) ;
         document.write(array) ;
    }

    for( let size=stringNum.size, i =(size-1) ; i!=0 ; i--){
        ss = array[i] ;
        document.write(ss)  ;
        
    }
    
}