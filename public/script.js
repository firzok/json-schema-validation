const button = document.getElementById('submit-btn');
const json = document.getElementById('json');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    fetch('/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: json.value
        }).then(response => {
            if (response.status === 400) {
                console.log('here')
                json.classList.add('error')
                result.classList.add('result-bad')
            } else if (response.status === 200) {
                json.classList.remove('error')
                result.classList.remove('result-bad')
                result.innerHTML = "No errors found. JSON validates against the schema"
            }
            return response.json()
        })
        .then(responseJSON => {
            console.log('Completed!', responseJSON);
            let messages = ''
            responseJSON.map(error => {
                messages += error.message
                messages += '<br />'
            })
            result.innerHTML = messages
        })
});

json.addEventListener('input', async _ => {
    const text = json.value.trim()
    const length = text.length
    if (text[0] !== '{' || text[length - 1] !== '}') {
        json.classList.add('error')
        result.classList.add('result-bad')
        result.innerHTML = "Invalid JSON"
    } else {
        json.classList.remove('error')
        result.classList.remove('result-bad')
        result.innerHTML = ""
    }
})