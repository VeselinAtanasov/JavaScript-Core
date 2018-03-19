class PaymentManager {
    constructor(title) {
        this.title = title;
        this.element = this.createBasicTable();
    }

    createBasicTable() {
        let holder = $('<table>');
        let caption = $(`<caption>${this.title} Payment Manager</caption>`);
        let thead = $('<thead>');
        let tr = $('<tr>')
            .append(`<th class="name">Name</th>`)
            .append(`<th class="category">Category</th>`)
            .append(`<th class="price">Price</th>`)
            .append(`<th>Actions</th>`);
        thead.append(tr);
        let tbody = $('<tbody>').addClass('payments');  //TODO...
        let tfoot = $('<tfoot>').addClass('input-data');
        let tr2 = $('<tr>');
        let td1 = $('<td>');
        td1.append(`<input name="name" type="text">`);
        let td2 = $('<td>');
        td2.append(`<input name="category" type="text">`);
        let td3 = $('<td>');
        td3.append(`<input name="price" type="number">`);
        let td4 = $('<td>');
        td4.append($('<button>Add</button>').on('click', this.add.bind(this)));
        tr2.append(td1).append(td2).append(td3).append(td4);
        tfoot.append(tr2);
        holder.append(caption).append(thead).append(tbody).append(tfoot);

        return holder;
    }

    add() {
        let nameInput = $(this.element).find(".input-data input[name=name]");
        let categoryInput = $(this.element).find(".input-data input[name=category]");
        let priceInput = $(this.element).find(".input-data input[name=price]");
        if (nameInput.val() !== '' && categoryInput.val() !== '' && priceInput.val() !== '') {
            let container = $('<tr>');
            container
                .append(`<td>${nameInput.val()}</td>`)
                .append(`<td>${categoryInput.val()}</td>`)
                .append(`<td>${Number(priceInput.val())}</td>`);

            let tdBtn = $('<td>');
            tdBtn.append($('<button>Delete</button>').on('click', () => {
                container.remove();
            }));
            container.append(tdBtn);
            $(this.element).find('.payments').append(container);

            nameInput.val("");
            categoryInput.val("");
            priceInput.val("");
        }
    }

    render(id) {
        $('#' + id).append(this.element);
    }
}