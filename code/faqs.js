const faqsTitles = document.querySelectorAll('.faqs .question .title')
faqsTitles.forEach(title => {
  title.addEventListener('click', () => {
    title.parentNode.classList.toggle('active')
  })
})