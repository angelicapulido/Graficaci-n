let x1 = 0, x2 = 0, y1 = 0, y2 = 0, m = 0, Dy = 0, Dx = 0, Y = 0, X = 0; aux = 0, cont = 0;

function coordenadasdda(event) {

    // se agarra la primer coordenada
    cont = cont + 1;
    if (cont == 1) {
      x1 = event.clientX -8;
      y1 = event.clientY -8;
      var coor = "X: " + x1 + ", Y: " + y1;

      console.log(coor);
    } else if (cont == 2) {
      //se agarra la segunda coordenada
      let i = 0;
      cont = 0;
      x2 = event.clientX -8;
      y2 = event.clientY -8;
      var coor2 = "X2: " + x2 + ", Y2: " + y2;

      console.log(coor2);

      //se compara cual es el absoluto mayor sy x o y
      if (Math.abs(x2-x1) >= Math.abs(y2-y1))
      {
        aux = Math.abs(x2 - x1);
        console.log("aux = " + aux);
      }
      else
      {
        aux = Math.abs(y2 - y1);
        console.log("aux = " + aux);
      }
      console.log("**");

      //se obriene delta x y delta y
      Dx = (x2 - x1) / aux;
      Dy = (y2 - y1) / aux;
      console.log("Dx = " + Dx);
      console.log("Dy = " + Dy);
      console.log("**");

      X = x1;
      Y = y1;

      //se define propiedades del canvas
      var lienzo = document.querySelector("canvas");
      var context = lienzo.getContext("2d");
      context.fillStyle = "Green";

      //se va calculando para formar la linea
      while(i <= aux)
      {
        RedondeoX = Math.round(X);
        RedondeoY = Math.round(Y);
        console.log("RedX = " + RedondeoX);
        console.log("RedY = " + RedondeoY);

        context.fillRect(RedondeoX, RedondeoY, 1, 1);
        console.log("X = " + X);
        console.log("Y = " + Y);

        X = X + Dx;
        Y = Y + Dy;
        i++;
      }

    }
}