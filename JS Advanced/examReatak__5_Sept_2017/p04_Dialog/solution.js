class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this.inputs = [];
        this.element = null;
    }

    addInput(label, name, type) {
        this.inputs.push({label, name, type})
    }

    render() {
        this.element = $('<div>').addClass('overlay');
        let innerDiv = $('<div>').addClass('dialog');
        innerDiv
            .append($(`<p>${this.message}</p>`));
        for (let obj of this.inputs) {
            let labelRes = $(`<label>${obj['label']}</label>`);
            let inputRes = $(`<input name="${obj['name']}" type="${obj['type']}">`);
            innerDiv.append(labelRes).append(inputRes);
        }
        /**
         * The main problem here  - when attaching events on the buttons is that we are passing this._cancel/_ok functions,
         * But these functions do not have access to this of the button - so in the function if we try to remove this.element this will not work
         * Two possible solutions :
         * 1/Instead this_cancel to use arrow function :
         * () => {this.element.remove}
         * 2/ to use bind THIS means that this._cancel will bi binded to this (this functions cope)
         * And in _cancel this will mean point to the correct value;
         */
        innerDiv.append($('<button>OK</button>').on('click',  this._ok.bind(this)));
        innerDiv.append($('<button>Cancel</button>').on('click', this._cancel.bind(this)));
        //   innerDiv.append($('<button>Cancel</button>').on('click', () => this.element.remove()));

        this.element.append(innerDiv);
        $(document.body).append(this.element);
    }

    _cancel() {
        $(this.element).remove();
    }
    _ok(){
        let obj={};
        let results= $(this.element).find('input').toArray();
        results.forEach( i => obj[$(i).attr('name')] = $(i).val());
        //results.forEach( i => console.log(i));
        this.callback(obj);
        this._cancel();
    }
}