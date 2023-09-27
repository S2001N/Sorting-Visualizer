const area = document.getElementById("d1");
// var bars = [];

function addBox()
{
	area.innerHTML = ""
	for(let i = 0; i < 60; i++)
    {
		const box = document.createElement("div");
		box.classList.add("box");
		let h = Math.floor(Math.random() * 440) + 40;

        const barText = document.createElement("label");
        barText.classList.add("barLable");
        barText.innerHTML = h;
		box.style.height = `${h}px`;

        box.appendChild(barText);
		area.appendChild(box);
        // bars.push(box);
	}
}

// Implementation of Selection Sort
async function SelectionSort()
{
    let minIndex = 0;
    let bars = document.querySelectorAll(".box");
    console.log(bars[0].childNodes[0].innerHTML)
    for(let i=0;i<bars.length;i++)
    {
        minIndex = i;
        for(let j=i+1;j<bars.length;j++)
        {
            let a = parseInt(bars[minIndex].childNodes[0].innerHTML);
            let b = parseInt(bars[j].childNodes[0].innerHTML);
            if(b < a)
            {
                minIndex = j;
            }
        }
        bars[minIndex].style.backgroundColor = "red";

        //To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
            setTimeout(() =>
            {
                resolve();
            }, 100)
        );

        //swap min bar with i'th bar
        let x = parseInt(bars[minIndex].childNodes[0].innerHTML);
        let y = parseInt(bars[i].childNodes[0].innerHTML);
        bars[minIndex].style.height = `${y}px`;
        bars[minIndex].childNodes[0].innerHTML = y;
        bars[i].style.height = `${x}px`;
        bars[i].childNodes[0].innerHTML = x;

        bars[minIndex].style.backgroundColor = "yellowgreen";
        bars[i].style.backgroundColor = "yellow";
    }

}

// Implementation of Bubble Sort
async function BubbleSort()
{
    let bars = document.querySelectorAll(".box");
    for(let i=0;i<bars.length - 1;i++)
    {
        for(let j=0;j<bars.length - i - 1;j++)
        {
            let a = parseInt(bars[j].childNodes[0].innerHTML);
            let b = parseInt(bars[j + 1].childNodes[0].innerHTML);
            bars[j].style.backgroundColor = "red";
            bars[j+1].style.backgroundColor = "purple";
            if(a > b)
            {
                bars[j].style.height = `${b}px`;
                bars[j].childNodes[0].innerHTML = b;
                bars[j+1].style.height = `${a}px`;
                bars[j+1].childNodes[0].innerHTML = a;
            }

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 10)
            );

            bars[j].style.backgroundColor = "yellowgreen";
            bars[j+1].style.backgroundColor = "yellowgreen";
        }
    }

}

// For Adding Scroll Effect
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});