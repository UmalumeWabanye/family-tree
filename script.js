const treeCanvas = document.getElementById('treeCanvas');
const people = document.querySelectorAll('.person');
const tooltip = document.getElementById('tooltip');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalName = document.getElementById('modalName');
const modalBorn = document.getElementById('modalBorn');
const modalBio = document.getElementById('modalBio');
const modalPortrait = document.getElementById('portrait');

//Positioning nodes manually for demo
const positions = [
    { x: 450, y: 50 }, //root
    { x: 450, y: 50 }, //left child
    { x: 450, y: 50 }  //right child
];

people.forEach((person, i) => {
    const pos = positions[i];
    person.style.left = pos.x + 'px';
    person.style.top = pos.y + 'px';
    person.style.backgroundImage = `url(${person.dataset.img})`;

    //Tooltip events
    person.addEventListener('mouseover', (e) => {
        tooltip.textContent = person.dataset.name;
        tooltip.style.opacity = '1';
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
        tooltip.setAttribute('aria-hidden', 'false');
    });

    person.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
    });

    person.addEventListener('mouseout', (e) => {
        tooltip.style.opacity = '0';
        tooltip.setAttribute('aria-hidden', 'true');
    });

    //Modal events
    person.addEventListener('click', () => {
        modalName.textContent = person.dataset.name;
        modalBorn.textContent = 'Born: ' + person.dataset.born;
        modalBio.textContent = 'Bio: ' + person.dataset.bio;
        modalPortrait.src = person.dataset.img;
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
});

//Dark theme by time
(function setThemeByTime() {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})();