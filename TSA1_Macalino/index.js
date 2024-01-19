const btn = document.getElementById('btn');
const colors=['violet', '#c6e2ff', '#7fffd4' , 'pink', 'yellow' , '#c39797'];
const textColors = ['#563b29', 'blue', '#ff8d00', '#41534a', '#212121']

btn.addEventListener('click', function onClick(event) {
    const box = document.getElementById('container');
  
    const colorIndex=parseInt(Math.random()*colors.length);
    const textColorIndex=parseInt(Math.random()*textColors.length);

    box.style.backgroundColor = colors[colorIndex];
    box.style.color = textColors[textColorIndex];

  });