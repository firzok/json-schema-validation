const button = document.getElementById('submit-btn');
const json = document.getElementById('json');
const result = document.getElementById('result');

const status = {
    valid: 'valid',
    invalid: 'invalid',
}

button.addEventListener('click', () => {
    json.value = json.value.replaceAll('\'', '\"').trim();

    try {
        JSON.parse(json.value)
    } catch (error) {
        json.classList.add('error')
        result.classList.add('result-bad')
        result.innerHTML = 'Invalid JSON'
        return
    }

    fetch('/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: json.value
        })
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then(responseJSON => {

            if (responseJSON.jsonStatus === status.invalid) {
                json.classList.add('error')
                result.classList.add('result-bad')

                let messages = ''
                responseJSON.errors.map(error => {
                    messages += `${error.instancePath.replace('\/','')}: ${error.message}`
                    messages += '<br />'
                })
                result.innerHTML = messages
            } else if (responseJSON.jsonStatus === status.valid) {
                json.classList.remove('error')
                result.classList.remove('result-bad')
                result.innerHTML = "No errors found. JSON validates against the schema."
            }



        })
        .catch((error) => {
            console.error(error)
            result.classList.add('result-bad')
            result.innerHTML = "Unable to handle call. Please check console for error."

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