function opcion(event) {
    if (document.getElementById('myradio_1').checked) {
      coordenadass(event);
    }else if (document.getElementById('myradio_2').checked) {
      obtenerCoords2(event);
    }else if (document.getElementById('myradio_3').checked) {
      obtenerCoords3(event);
    }
}
        let clicks = 0;
        //let x1 = 0, y1 = 0, x2 = 0, y2 = 0, m = 0, b = 0, Y = 0, X = 0;
        let rangox=0, rangoy=0;

        function coordenadass(event) {
            clicks = clicks + 1;
            if (clicks == 1) {
              x1 = event.clientX -8;
              y1 = event.clientY -8;
              var coor = "X: " + x1 + ", Y: " + y1;

              console.log(coor);
              //document.getElementById("x1y1").innerHTML = coor;
            } else if (clicks == 2) {
              clicks = 0;
              x2 = event.clientX - 8;
              y2 = event.clientY -8;
              var coor2 = "X2: " + x2 + ", Y2: " + y2;

              console.log(coor2);
            
                rangox=Math.abs(x1-x2);
                rangoy=Math.abs(y1-y2);           
                console.log("rango x: " + rangox, 
                           "rango y: " + rangoy);
                let inicio = 0, fin = 0;
                
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

                    var lienzo = document.querySelector("canvas");
                    var context = lienzo.getContext("2d");
                    context.fillStyle = "Black";
                
                    
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

                    var lienzo = document.querySelector("canvas");
                    var context = lienzo.getContext("2d");
                    context.fillStyle = "Black";
                
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
      
       