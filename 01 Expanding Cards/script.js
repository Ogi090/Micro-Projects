// Put the panels into a group with "querySelectorAll" and that becomes an array as a node, now an array of our panels, we can loop over it.
const panels = document.querySelectorAll('.panel')

// forEach method for looping, so we can select specific item in array
panels.forEach((panel) => { // We pass in what we want to loop over in this case its a panel
        
    panel.addEventListener('click', () => { // In this case a panel so we listen for a click

        removeActivePanel();
        panel.classList.add('active')
    })
});

// When click happens we add a desired outcome,so we create a class manipulation with "classList" because that's what gives us the list of classes that we have. BUT the important part is that we also have an option to add the method on it with "add" where we can add another now newly created class on it which is class active

// What's left is to remove the added active class on click, because click by click they all become active, and we want only one to be active at a time. We do this by creating a function with single purpose of removing a active class


function removeActivePanel () { 
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
