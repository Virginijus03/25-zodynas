class Zodynas {
    constructor(IDselector) {
        this.IDselector = IDselector;

        this.DOM = null;
        this.init();
    }
    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.DOM = document.getElementById(this.IDselector)
        if (!this.DOM) {
            console.log(this.DOM)
            console.error('ERROR: NERASTA VIETA');
            return false;
        }
        this.DOM.classList.add('zodynas');

        this.render();
        this.addEvents();

    }
    isValidSelector() {
        if (typeof this.IDselector !== 'string' ||
            this.IDselector === '') {
            console.error('ERROR: nevalidus selector');
            return false;
        }
        return true;
    }
    generateAddForm() {
        return `<form class="zodziai">
                 <h1>Žodynas</h1>
                 <div class="kalba angliskai">
                     <label for="Anew_text">Anglų</label>
                     <input id="Anew_text" type="text">
                 </div>
                 <div class="kalba lietuviskai">
                     <label for="Lnew_text">Lietuvių</label>
                     <input id="Lnew_text" type="text">
                 </div>
                 <div class="buttons">
                   <button class="btn save" type="submit">Save</button>
                   <button class="btn reset" type="reset">Reset</button>
                 </div>
               </form>`;
    }
    generateList() {
        return `<div class="pildoma"></div>`;
    }

    renderTask(id, text) {
        if (typeof text !== 'string' ||
            text === '') {
            return '';
        }
        const HTML = ` <h2 class="save">Išsaugoti Žodžiai</h2>
                        <div id="task_${id}" class="task">
                           <div class="laukas english"></div>
                           <div class="laukas lithuanian"></div>
                             <div class="buttons">
                                <button class="fa fa-pencil"></button>
                                <button class="fa fa-trash"></button>
                             </div>
                        </div>`;
        this.listDOM.insertADjacentHTML('afterbegin', HTML);
        const taskDOM = this.listDOM.querySelector('.task');
    }
    render() {
        let HTML = '';
        HTML += this.generateAddForm();
        HTML += this.generateList();
        this.DOM.innerHTML = HTML;

        this.listDOM = this.DOM.querySelector('.pildoma');
        console.log(this.listDOM);
    }
    addEvents()

}










export { Zodynas }