(() => {

    class Accordion {
        constructor(obj) {
            console.log('obj', obj.hookName);

            const $elem = document.querySelector(obj.hookName);
            const $triggar = $elem.getElementsByTagName(obj.tagName);
        
            const triggarLen = $triggar.length;
            let index = 0;
            while (index < triggarLen) {
                $triggar[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
            // this.printHello();
        }

        clickHandler(e) {
            e.preventDefault();
    
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
    
            // console.log($content.textContent);
            if ($content.style.display === 'block') {
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        }

        printHello() {
            console.log('hello');
        }
    }

    const accor1 = new Accordion({
        hookName: '#js-accordion', 
        tagName: 'a'
    });

    const accor2 = new Accordion({
        hookName: '#js-accordion', 
        tagName: 'p'
    });


    // console.log($elem);

})();