let cont1 = 0;
function coordenadasbre(event) {
  //se obtiene la primera coordenada
  cont1 = cont1 + 1;
  if (cont1 == 1) {
    x1 = event.clientX -8;
    y1 = event.clientY -8;
    var coor = "X: " + x1 + ", Y: " + y1;

    console.log(coor);
  } else if (cont1 == 2) {
    //se obtiene la segunda coordenada
    cont1 = 0;
    x2 = event.clientX -8;
    y2 = event.clientY -8;
    var coor2 = "X2: " + x2 + ", Y2: " + y2;

    console.log(coor2);

    //se obtiene delta x y con signo
    var dx = x2 - x1;
    var dy = y2 - y1;
    //se verifica cual es mayor y se le suma uno
    var incx = dx >= 0 ? +1 : -1;
    var incy = dy >= 0 ? +1 : -1;
    //se verifica cual es menor y se le resta 1
    dx = dx < 0 ? -dx : dx;
    dy = dy < 0 ? -dy : dy;
    //se define propiedades del canvas
    var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "orange";

    //se ve cual es mayor y en base a eso empezar a marcar la linea
    if (dx >= dy) {
      //se declaran formulas y utilizan formulas
      var d = 2 * dy - dx;
      var deltaA = 2 * dy;
      var deltaB = 2 * dy - 2 * dx;

      var x = 0;
      var y = 0;
      //se va coloreando al linea
      for (i = 0; i <= dx; i++) {
        context.fillRect(x + x1, y + y1, 1, 1);
        //dependiendo el resultado se incrementan las variables
        if (d > 0) {
          d += deltaB;
          x += incx;
          y += incy;
        } else {
          d += deltaA;
          x += incx;
        }
      }
    } else {
       //se declaran formulas y utilizan formulas
      var d = 2 * dx - dy;
      var deltaA = 2 * dx;
      var deltaB = 2 * dx - 2 * dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= dy; i++) {
       //se va coloreando al linea
        context.fillRect(x + x1, y + y1, 1, 1);
        //dependiendo el resultado se incrementan las variables
        if (d > 0) {
          d += deltaB;
          x += incx;
          y += incy;
        } else {
          d += deltaA;
          y += incy;
        }
      }
    }
  } 
}
