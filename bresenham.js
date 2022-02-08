let clicks1 = 0;
function obtenerCoords3(event) {

  clicks1 = clicks1 + 1;
  if (clicks1 == 1) {
    x1 = event.clientX -8;
    y1 = event.clientY -8;
    var coor = "X: " + x1 + ", Y: " + y1;

    console.log(coor);
  } else if (clicks1 == 2) {
    clicks1 = 0;
    x2 = event.clientX -8;
    y2 = event.clientY -8;
    var coor2 = "X2: " + x2 + ", Y2: " + y2;

    console.log(coor2);

    var dx = x2 - x1;
    var dy = y2 - y1;

    var inc_x = dx >= 0 ? +1 : -1;
    var inc_y = dy >= 0 ? +1 : -1;

    dx = dx < 0 ? -dx : dx;
    dy = dy < 0 ? -dy : dy;

    var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "red";

    if (dx >= dy) {
      var d = 2 * dy - dx;
      var delta_A = 2 * dy;
      var delta_B = 2 * dy - 2 * dx;

      var x = 0;
      var y = 0;
      for (i = 0; i <= dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          x += inc_x;
        }
      }
    } else {
      var d = 2 * dx - dy;
      var delta_A = 2 * dx;
      var delta_B = 2 * dx - 2 * dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
      }
    }
  } /* else if (clicks == 3) {
    alert("Solo se necesitan dos puntos diferentes de coordenadas");
  } */
}