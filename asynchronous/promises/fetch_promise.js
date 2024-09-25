const url = 'https://text-translator2.p.rapidapi.com/translate';
let options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '52af9ce6b1msh6b20c18c3439862p11a651jsn51cbed85b1d5',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
};

async function translate() {
    options.body = new URLSearchParams({
        source_language: 'en',
        target_language: 'de',
        text: document.querySelector('#original').value
    });
    const response = await fetch(url, options);
    const data = await response.json();
    const {...fields} = data;
    const {translatedText} = fields;
    console.log(translatedText);
    document.querySelector('#translation').value = data.data.translatedText;
}

document.querySelector('#translate').addEventListener('click', () => translate());

