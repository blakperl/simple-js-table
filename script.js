const addBtn = document.getElementById('add-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')


addBtn.addEventListener("click", function () {
    modal.classList.contains('hidden') ? modal.classList.remove('hidden') : modal.classList.add('hidden')
})