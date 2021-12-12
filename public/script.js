const button = document.getElementById('submit-btn');
const editorElement = document.getElementById('editor');
const result = document.getElementById('result');

const status = {
    valid: 'valid',
    invalid: 'invalid',
}

let editor = ace.edit("editor", {
    theme: "ace/theme/one_dark",
    mode: "ace/mode/json",
    wrap: true,
    printMargin: false,
    maxLines: 30,
    minLines: 20
});

button.addEventListener('click', () => {
    editor.setValue(editor.getValue().replaceAll('\'', '\"').trim())

    try {
        JSON.parse(editor.getValue())
    } catch (error) {
        editorElement.classList.add('error')
        result.classList.add('result-bad')
        result.innerHTML = 'Invalid JSON'
        return
    }

    fetch('/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: editor.getValue()
        })
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then(responseJSON => {

            if (responseJSON.jsonStatus === status.invalid) {
                editorElement.classList.add('error')
                result.classList.add('result-bad')

                let messages = ''
                responseJSON.errors.map((error, idx) => {
                    messages += `${idx+1}- ${error.instancePath.replace('\/','') ? error.instancePath.replace('\/','')+": ":""} ${error.message}`
                    messages += '<br />'
                })
                result.innerHTML = messages
            } else if (responseJSON.jsonStatus === status.valid) {
                editorElement.classList.remove('error')
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

editorElement.addEventListener('input', async _ => {
    const text = editor.getValue().trim()
    const length = text.length
    if (text[0] !== '{' || text[length - 1] !== '}') {
        editorElement.classList.add('error')
        result.classList.add('result-bad')
        result.innerHTML = "Invalid JSON"
    } else {
        editorElement.classList.remove('error')
        result.classList.remove('result-bad')
        result.innerHTML = ""
    }
})

editor.commands.addCommand({
    name: 'submit',
    bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
    exec: function(editor) {
        let event = new Event('click', {
            bubbles: true,
            cancelable: true,
        });

        button.dispatchEvent(event);
    }
});