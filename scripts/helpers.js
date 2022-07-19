// TODO => DOM SHORTERS
const _getById = (id) => document.getElementById(id)
const _sq = (selector) => document.querySelector(selector)
const _sqAll = (selector) => document.querySelectorAll(selector)
const _insertHtml = (element, location, template) => element.insertAdjacentHTML(location, template)
const _render = (element, content) => element.innerHTML = content
// TODO => Create Unique ID
const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);
