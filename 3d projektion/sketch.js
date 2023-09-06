function setup() 
{
  createCanvas(400, 400);
  px=0;
  py=0;
  pz=200;
  cs=300;
  zslider=createSlider(1,1500,100,10);
  xslider=createSlider(-150,150,0,5);
  yslider=createSlider(-150,150,0,5);
}

function draw() 
{
  pz=zslider.value();
  px=xslider.value();
  py=-yslider.value();
  background(220);
  
  a=dimmer(50+px,50+py,100+pz);
  b=dimmer(-50+px,50+py,100+pz);
  c=dimmer(50+px,-50+py,100+pz);
  d=dimmer(-50+px,-50+py,100+pz);

  e=dimmer(50+px,50+py,pz);
  f=dimmer(-50+px,50+py,pz);
  g=dimmer(-50+px,-50+py,pz);
  h=dimmer(50+px,-50+py,pz);

  function dimmer(px,py,pz) 
  {
    strokeWeight(5);
    xs=(px*cs)/pz;
    ys=(py*cs)/pz;
    point(xs+200,ys+200);
    return([xs+200,ys+200])
  }
  push();
  strokeWeight(1);
  line(a[0],a[1],b[0],b[1]);
  line(a[0],a[1],c[0],c[1]);
  line(c[0],c[1],d[0],d[1]);
  line(b[0],b[1],d[0],d[1]);

  line(f[0],f[1],e[0],e[1]);
  line(f[0],f[1],g[0],g[1]);
  line(h[0],h[1],e[0],e[1]);
  line(h[0],h[1],g[0],g[1]);

  line(a[0],a[1],e[0],e[1]);
  line(b[0],b[1],f[0],f[1]);
  line(d[0],d[1],g[0],g[1]);
  line(c[0],c[1],h[0],h[1]);

  pop();
}