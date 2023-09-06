function setup() 
{
  createCanvas(400, 400);
  px=400;
  py=400;
  pz=200;
  cs=400;
}

function draw() 
{
  background(220);
  a=dimmer(400,400,200);
  b=dimmer(200,400,200);
  c=dimmer(200,200,200);
  d=dimmer(400,200,200);
}
function dimmer(px,py,pz) 
{
  xs=(px*cs)/pz;
  ys=(py*cs)/pz;
  point(xs,ys,);
  return xs&ys;
}
