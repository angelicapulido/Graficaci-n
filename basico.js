function opcion(event) {
    if (document.getElementById('radio1').checked) {
      coordenadass(event);
    }else if (document.getElementById('radio2').checked) {
      coordenadasdda(event);
    }else if (document.getElementById('radio3').checked) {
      coordenadasbre(event);
    }
}
        let cont = 0;
        
        let rangox=0, rangoy=0;

        function coordenadass(event) {
            cont = cont + 1;
            //tima la primer coordenada
            if (cont == 1) {
              x1 = event.clientX -8;
              y1 = event.clientY -8;
              var coor = "X: " + x1 + ", Y: " + y1;

              console.log(coor);
             
            } else if (cont == 2) {
                //toma la segunda coordenada
                cont = 0;
                //se debe de restar -8 para que la posicion del canvas sea 0,0
              x2 = event.clientX - 8;
              y2 = event.clientY - 8;
              var coor2 = "X2: " + x2 + ", Y2: " + y2;

              console.log(coor2);
                //se obtiene delta de x y 
                rangox=Math.abs(x1-x2);
                rangoy=Math.abs(y1-y2);           
                console.log("rango x: " + rangox, 
                           "rango y: " + rangoy);
                let inicio = 0, fin = 0;
                
                //se realizan formulas m y b
                m = (y2 - y1) / (x2 - x1);
                b = y1 -(m * x1);
                console.log("m = " + m,
                            "b = " + b);

                //para buscar en y
                if (rangox > rangoy)
                {
                    if (x1 > x2)
                    {
                        inicio = x2;
                        fin = x1;
                    }
                    else
                    {
                        inicio = x1;
                        fin = x2;
                    }

                    //se define el canvas y color
                    var lienzo = document.querySelector("canvas");
                    var context = lienzo.getContext("2d");
                    context.fillStyle = "Black";
                
                    //se realiza calculos de la coordenadas
                    for(var i = inicio; i <= fin; i++)
                    {
                        Y = (m*i) + b;
                        redondeo = Math.round(Y);
                        context.fillRect(i, Y,1,1);
                        console.log("X"+ i + " " + "Y=" + redondeo);
                    }
                }
                else
                {
                    //para buscar en x
                    if (y1 > y2)
                    {
                        inicio = y2;
                        fin = y1;
                    }
                    else
                    {
                        inicio = y1;
                        fin = y2;
                    }
                    //se define canvas para colorear en el
                    var lienzo = document.querySelector("canvas");
                    var context = lienzo.getContext("2d");
                    context.fillStyle = "Black";
                    // se relaizan calculos de las coordenadas
                    for(var i = inicio; i <= fin; i++)
                    {
                        X= (i-b)/m;
                        redondeo = Math.round(X);
                        context.fillRect(X, i, 1, 1);
                        console.log("X= "+ redondeo + " " + "Y= " + i);
                    }

                }
            }

        }
      
       