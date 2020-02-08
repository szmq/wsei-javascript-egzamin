window.addEventListener('DOMContentLoaded', () => {
    // 1
    const elements = document.querySelectorAll('.sample_class');

    function getTagsOfElements(elements) {
        const array = [];
        [...elements].forEach(element => array.push(element.tagName))

        return array;
    }
    
    console.log('1. ', getTagsOfElements(elements));

    // 2
    const sampleId = document.querySelector('#sample_id');

    function getClassesOfElement(element) {
        const array = [...element.classList];
        return array;
    }

    console.log('2. ', getClassesOfElement(sampleId));

    // 3
    const list = document.querySelectorAll('.sample_clas li');

    function getInnerTextsOfElements(elements) {
        const array = [];
        
        for (i = 0; i < elements.length; i++) {
            array.push(elements[i].textContent);
        }

        return array;
    }

    console.log('3. ', getInnerTextsOfElements(list));

    // 4
    let links = document.querySelectorAll('a');

    function getAddressesOfElements(elements) {
        const array = [];
        
        for (i = 0; i< elements.length; i++)
        {
            const attr = elements[i].getAttribute('href')
            if (attr) array.push(attr);
        }
        
        return array;
    }

    console.log('4. ', getAddressesOfElements(links));

    // 5
    const classes = document.querySelectorAll('.sample_class_3 *');
    console.log('5. ', getTagsOfElements(classes));
});