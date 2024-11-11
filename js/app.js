
const emails = document.querySelector('.emails')

for (let i = 0; i < 10; i++) {
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail') 
    .then((res) => {
        const mail = res.data.response
        emails.innerHTML += `<li>${mail}</li>`

        
    })
    .catch((err) => {
        console.log(err)
    })
}


 