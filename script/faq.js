const faqRows = document.querySelectorAll(".accordion");

showRows = () => {
    faqRows.forEach((e) => {
        e.addEventListener('click', () => {
            e.classList.contains("active") ?
                e.classList.remove("active") :
                hideRows() & e.classList.add("active")
        })
    })
}

showRows()

hideRows = () => {
    faqRows.forEach((e) => {
        e.classList.remove("active")
    })
}