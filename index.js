/** @type {HTMLButtonElement} */
const openDialogButtonElement = document.querySelector('#open-dialog')

/** @type {HTMLDialogElement} */
const dialogElement = document.querySelector('#dialog')
/** @type {HTMLInputElement} */
const hasPartsElement = document.querySelector('#has-parts')

/** @type {HTMLTableElement} */
const partsElement = document.querySelector('#parts')
/** @type {HTMLTemplateElement} */
const partTemplateElement = document.querySelector('#part-template')
/** @type {HTMLInputElement} */
const newPartNameElement = document.querySelector('#parts .name')
/** @type {HTMLInputElement} */
const newPartValue1Element = document.querySelector('#parts .value-1')
/** @type {HTMLInputElement} */
const newPartValue2Element = document.querySelector('#parts .value-2')
/** @type {HTMLButtonElement} */
const newPartAddButtonElement = document.querySelector('#parts .add-button')

openDialogButtonElement.addEventListener('click', () => {
  dialogElement.showModal()
})

dialogElement.addEventListener('close', e => {
  console.log(`dialog closed, returnValue: type ${typeof dialogElement.returnValue} value ${dialogElement.returnValue}`)
})

hasPartsElement.addEventListener('change', () => {
  if (hasPartsElement.checked) {
    partsElement.classList.remove('hide')
  } else {
    partsElement.classList.add('hide')
  }
})

newPartAddButtonElement.addEventListener('click', () => {
  const partElement = partTemplateElement.content.cloneNode(true)

  const nameElement = partElement.querySelector('.name')
  const value1Element = partElement.querySelector('.value-1')
  const value2Element = partElement.querySelector('.value-2')

  partsElement.querySelector('tbody').append(partElement)

  nameElement.value = partsElement.querySelector('.new-part .name').value
  value1Element.value = partsElement.querySelector('.new-part .value-1').value
  value2Element.value = partsElement.querySelector('.new-part .value-2').value
})
