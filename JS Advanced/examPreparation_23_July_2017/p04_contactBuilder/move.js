// Using toggle()
// class Contact {
//     constructor(firstName, lastName, phone, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.phone = phone;
//         this.email = email;
//         this.contactBox = this.createBox();
//         this.online = false;
//
//     }
//
//     get online() {
//         return this._online;
//     }
//
//     set online(value) {
//         if(value){
//             this.contactBox.find('.title').addClass('online')
//         }else {
//             this.contactBox.find('.title').removeClass('online')
//         }
//         this._online = value;
//     }
//
//     createBox() {
//         let element = $('<article>');
//         let div = $('<div>').addClass('title').text(`${this.firstName} ${this.lastName}`);
//         let button = $(`<button>&#8505;</button>`).on('click', () => secondDiv.toggle());
//         div.append(button);
//         let secondDiv = $('<div>').addClass('info').css('display','none')
//             .append($(`<span>&phone; ${this.phone}</span>`))
//             .append($(`<span>&#9993;  ${this.email}</span>`));
//
//         element.append(div).append(secondDiv);
//         return element;
//
//     }
//
//
//     render(id) {
//        let container= $('#'+id);
//            container.append(this.contactBox);
//     }
// }
//
//
// let contacts = [
//     new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
//     new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
//     new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
// ];
// contacts.forEach(c => c.render('main'));
//
// // After 1 second, change the online status to true
// setTimeout(() => contacts[1].online = true, 2000);

//// Using css()
class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.contactBox = this.createBox();
        this.online = false;

    }

    get online() {
        return this._online;
    }

    set online(value) {
        if(value){
            this.contactBox.find('.title').addClass('online')
        }else {
            this.contactBox.find('.title').removeClass('online')
        }
        this._online = value;
    }

    createBox() {
        let element = $('<article>');
        let div = $('<div>').addClass('title').text(`${this.firstName} ${this.lastName}`);
        let button = $(`<button>&#8505;</button>`).on('click', () =>{
            if(secondDiv.css('display')==='none'){
                secondDiv.css('display','block')
            }else{
                secondDiv.css('display','none')
            }
        });
        div.append(button);
        let secondDiv = $('<div>').addClass('info').css('display','none')
            .append($(`<span>&phone; ${this.phone}</span>`))
            .append($(`<span>&#9993;  ${this.email}</span>`));

        element.append(div).append(secondDiv);
        return element;

    }


    render(id) {
        let container= $('#'+id);  // pay Attention for the '#' if not present and it before id
        container.append(this.contactBox);
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);


