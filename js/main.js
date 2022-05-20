// 
const containerBoxHtml = document.querySelector(".row")




            // CREARE IL  CICLO  DI NUMERI DA 1  A  100
    for (let num= 1; num<=100; num++){
        // let item = num = num
        // console.log(item);

          // CREATA LA CONDIZIONE CHE SE  IL NUMERO E DIVISIBILE PER 3 STAMPA FIZZ
        if(((num % 5 == 0) && (num % 3 == 0))){
            containerBoxHtml.innerHTML += `<div class="col-2">
                                                <div class="fizz-buzz">
                                                    ${num}
                                                </div>
                                            </div>`



        // CREATA LA CONDIZIONE CHE SE  IL NUMERO E DIVISIBILE PER 5 STAMPA BUZZ
        }else if (num % 5 == 0){
            containerBoxHtml.innerHTML += `<div class="col-2">
                                                <div class="buzz">
                                                    ${num}
                                                </div>
                                            </div>`

        // CREATA LA CONDIZIONE IN CUI SE ENTRAMBE LE OPERAZIONI SONO VERE STAMPA FIZZBUZZ
        }else if(num % 3 == 0){
            containerBoxHtml.innerHTML += ` <div class="col-2">
                                                <div class="fizz">
                                                    ${num}
                                                </div>
                                            </div>`


        }
        containerBoxHtml.innerHTML += ` <div class="col-2">
                                                <div class="normal">
                                                    ${num}
                                                </div>
                                            </div>`

    
    }