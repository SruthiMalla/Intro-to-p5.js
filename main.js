function preload()
{

}

function setup()
{
    canvas = createCanvas(800,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(100,100);
    video.hide();
}

function draw()
{
    image(video, 200, 200, 100, 100);

    fill("blue");

    circle(200, 200, 30);
    circle(300, 200, 30);
    circle(200, 300, 30);
    circle(300, 300, 30);
}

function take_snapshot()
{
    save("myfilter.png");
}