const faqsTitles = document.querySelectorAll('.faqs .question .title')
console.log({faqsTitles})
faqsTitles.forEach(title => {
  title.addEventListener('click', () => {
    title.parentNode.classList.toggle('active')
  })
})