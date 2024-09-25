const addBtn = document.getElementById('open-modal')
const modalClass = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const nameInput = document.getElementById('name-input')
const ageInput = document.getElementById('age-input')
const skillInput = document.getElementById('skill-input')
const submitBtn = document.getElementById('submit-btn')
const bodyCell = document.getElementById('body-cell')
// const nameCell = document.getElementById('name-cell')
// const ageCell = document.getElementById('age-cell')
// const skillCell = document.getElementById('skill-cell')


addBtn.addEventListener("click", function () {
    modalClass.classList.contains('hidden') ? modalClass.classList.remove('hidden') : modalClass.classList.add('hidden')
})

closeBtn.addEventListener ("click", function () {
    modalClass.classList.add('hidden')
})


submitBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (nameInput.value === '' || ageInput.value === '' || skillInput.value === '') {
         alert('Opps!! All input are required, please fill')
         e.preventDefault()
    } else {
        // nameCell.textContent = nameInput.value;
        // ageCell.textContent = ageInput.value;
        // skillCell.textContent = skillInput.value;

        // nameInput.value = '';
        // ageInput.value = '';
        // skillInput.value = '';

        // modalClass.classList.add('hidden');   for just one body at a time 

        const TrCell = document.createElement('tr')
        const nameCell = document.createElement('td')
        const ageCell = document.createElement('td')
        const skillCell = document.createElement('td')

        nameCell.textContent = nameInput.value;
        ageCell.textContent = ageInput.value;
        skillCell.textContent = skillInput.value;

        TrCell.appendChild(nameCell);
        TrCell.appendChild(ageCell);
        TrCell.appendChild(skillCell);


       bodyCell.appendChild(TrCell);

       saveData()
         nameInput.value = '';
        ageInput.value = '';
        skillInput.value = '';

        modalClass.classList.add('hidden')

    }


})
function saveData() {
    localStorage.setItem("data", bodyCell.innerHTML);
}
function showTable() {
    bodyCell.innerHTML = localStorage.getItem("data")
}

showTable()



