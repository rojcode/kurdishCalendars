

/**
 * Creates an alias for the document object.
 * @type {Document}
 */
let $ = document;

/**
 * Selects and returns the first element with the specified class name.
 * @param {string} selector - The class name of the desired element.
 * @returns {Element | null} - The first element found with the specified class name.
 */
const _class = (selector) => {
    const element =  $.querySelector('.'+ selector);
    if(!element){
        throw new Error(`No element found with class ${selector}`);
    }
    return element;
}

/**
 * Selects and returns the element with the specified ID.
 * @param {string} selector - The ID of the desired element.
 * @returns {Element | null} - The element found with the specified ID.
 */
const _id = (selector) => {
    const element = $.querySelector('#'+ selector);
    if(!element){
        throw new Error(`No element found with id ${selector}`)
    }
    return element;
}

/**
 * Creates a new DOM element with the specified name.
 * @param {string} name - The name of the element to be created (e.g., 'div', 'span', etc.).
 * @returns {Element} - The created DOM element.
 * @throws {Error} - Throws an error if the provided name is not valid.
 */
const _create = (name) => {
    let element;

    if (name !== '') {
        element = $.createElement(name);
    } else {
        throw new Error('Element name is not valid');
    }

    return element;
}

/**
 * Logs the provided value to the console.
 * @param {*} value - The value to be logged.
 */
const _log = (value)=>{
    if(typeof value == 'undefined'){
        console.log('-------------')
    }else{
        console.log(value);
    }   
}





const getSelect = ()=>{
    let selectLa = _id('dateSelector');
    return selectLa.value;
}


const updateElement = (day,date,monthName,year)=>{
    const getDay = _id('day');
    const getDate = _id('date');
    const getMonth = _id('month');
    const getYear = _id('year');

    getDay.innerHTML = day;
    getDate.innerHTML = date;
    getMonth.innerHTML = monthName;
    getYear.innerHTML = year;
}


const updateDate = ()=>{
    const getChangeButton = _id('changeDateButton');
    getChangeButton.addEventListener('click',()=>{
        const value = getSelect();
        if(value=='sorani'){
            let sorani = soraniCalendar();
            updateElement(sorani.dayName,sorani.day,sorani.monthName,sorani.year)
        }else if(value=='kurmanci'){
            let kurmanci = kurmanciCalendar();
            updateElement(kurmanci.dayName,kurmanci.day,kurmanci.monthName,kurmanci.year)
        }else if(value == 'kellhurri'){
            let kellhurri = kelhuriCalendar();
            updateElement(kellhurri.dayName,kellhurri.day,kellhurri.monthName,kellhurri.year)
        }else if(value=='leki'){
            let leki = lakiCalendar();
            updateElement(leki.dayName,leki.day,leki.monthName,leki.year)
        }else if(value == 'hewrami'){
            let hewrami = hewramiCalendar();
            updateElement(hewrami.dayName,hewrami.day,hewrami.monthName,hewrami.year)
        }else if(value == 'zazaki'){
            let zazaki = zazakiCalendar();
            updateElement(zazaki.dayName,zazaki.day,zazaki.monthName,zazaki.year)
        }
    })
}


let sorani = soraniCalendar();
console.log(sorani);
updateElement(
    sorani.dayName,sorani.day,sorani.monthName,sorani.year
);


const getButtonInfo = _class('btn-info');
getButtonInfo.addEventListener('click',()=>{
    const getModal = _class('modal');
    getModal.style.display = 'inline';

    const closeButton = getModal.querySelector('.close');
    closeButton.addEventListener('click',()=>{
        getModal.style.display = 'none';
    })

    const closeButtonBottom = getModal.querySelector('button#closeModalBtn');
    closeButtonBottom.addEventListener('click',()=>{
        getModal.style.display = 'none';
    })

})



updateDate();