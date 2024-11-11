
const emails = document.querySelector('.emails')
const generate = document.querySelector('.generate-btn')
console.log(generate)

function generateMails(mails, n = 10) {

    for (let i = 0; i < 10; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail') 
        .then((res) => {
            const mail = res.data.response
            mails.innerHTML += `<li class="list-group-item">${mail}</li>`
    
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
}

generateMails(emails)

generate.addEventListener('click', () => {
    emails.innerHTML += ''
    generateMails(emails)
})
 