// Bring from the DOM(doc obj model) classes you want to make functional
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') // Multi cirlces so its All because it All it will bring them as node array

let currentActive = 1 // An index that represent which ever is active, 1 by default, we created this so it can be manipulated by all after, the heart of the flow.

// The click on functionality of buttons next and prev
next.addEventListener('click', () => {
    currentActive++ // Whatever the current active is at the moment we add it by one

    // console.log(currentActive); // Here we can check if click adds the numbers

    // BUT we need to limit the numbers going up to certain lenght (4)
    if (currentActive > circles.lenght) { // We use methods because its a node array
        currentActive = circles.lenght // lenght is auto 4 because there are 4 circles
    } 
    update() // Calls the function that update the DOM
})

prev.addEventListener('click', () => {
    currentActive-- // Whatever the current active is at moment we remove it by one 

    // BUT we need to limit the numbers going up to certain lenght (1)
    if (currentActive < 1) {
        currentActive = 1 // No need for circles because we only set limit on 1
    }
    update()
})

// Function with purpose of detecting where is the active cirlce at 
function update() {
    circles.forEach((circle, idx) => { // Loop over circles with if condition

        // So we check in each of circles, is index of circle larger of current active one if it is we add an active class on it if not we remove it
       if (idx < currentActive) { 
            circle.classList.add('active') 
        } else {
            circle.classList.remove('active')
        }
    })
    // When clicked next 4 times, then active class is on all of them so we can select it
    const actives = document.querySelectorAll('.active')

    // Change class property form the CSS section directly in JS
    // Make the progress bar width(0%) when clicked more in line with circles progressing (adding and subtracking)
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%' // -1 is for lower percentage that we need, without it the percentage is way higher that and its not folowing the circles percentage wise and * 100 is to make it to actual procent wise(0.75 *100 = 75('%') its what the adding of the % is


    // Prev and next button disabled logic
    if (currentActive === 1) { // If one cant go bellow that
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true // Then only can go next
    } else {
        prev.disabled = false // Only after going next you can go prev and next again
        next.disabled = false
    }

}