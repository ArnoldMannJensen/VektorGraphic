x1=-10;
x2=10;
x3=10;
x4=-10;
y1=-10;
y2=-10;
y3=10;
y4=10;

skalar=1;
vektor=0;
vertical=0;
horizontal=0;

function setup() 
{
  createCanvas(400, 400);
  slider = createSlider(0,20,1,0,1);
  slider.position(200,400);
  
}

function draw() 
{
  skalar=slider.value();
  background(220);

  point(x1*skalar+horizontal,y1*skalar+vertical);
  point(x2*skalar+horizontal,y2*skalar+vertical);
  point(x3*skalar+horizontal,y3*skalar+vertical);
  point(x4*skalar+horizontal,y4*skalar+vertical);

  line(x1*skalar+horizontal,y1*skalar+vertical,x2*skalar+horizontal,y2*skalar+vertical);
  line(x2*skalar+horizontal,y2*skalar+vertical,x3*skalar+horizontal,y3*skalar+vertical);
  line(x3*skalar+horizontal,y3*skalar+vertical,x4*skalar+horizontal,y4*skalar+vertical);
  line(x4*skalar+horizontal,y4*skalar+vertical,x1*skalar+horizontal,y1*skalar+vertical);

  if(mouseIsPressed===true)
  {
    horizontal=mouseX;
    vertical=mouseY;
  }
}