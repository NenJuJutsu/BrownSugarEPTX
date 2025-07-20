export async function loadPartial(selector, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.querySelector(selector).innerHTML += html;
}