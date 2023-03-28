const myForm = document.getElementById('frmExpence');

const expenceBtn = document.getElementById('btn-expence');
const msg = document.querySelector('.error');

expenceBtn.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const expenceAmt = document.getElementById('txt-expenceAmt').value;
    const decription = document.getElementById('drp-decription').value;
    const category = document.getElementById('drp-category').value;

    let myObj = {
        exAmt : expenceAmt,
        descr : decription,
        cat : category
    };

    let objSerialized = JSON.stringify(myObj);
    localStorage.setItem(decription, objSerialized);

    const listExpence = document.getElementById('expenceList');
    const listItem = document.createElement('li');

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.id = 'delBtn';
    deleteBtn.value = 'Delete Expence';
    deleteBtn.onclick = () => {
        localStorage.removeItem(myObj.descr)
        listExpence.removeChild(listItem)
    }

    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.id = 'editBtn';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        localStorage.removeItem(myObj.descr)
        listExpence.removeChild(listItem);
        document.getElementById('txt-expenceAmt').value = myObj.exAmt;
        document.getElementById('drp-decription').value = myObj.descr;
        document.getElementById('drp-category').value = myObj.cat;
    }
    
    listItem.textContent = myObj.exAmt+' : '+myObj.descr+' : '+myObj.cat;

    expenceList.appendChild(listItem);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);

    document.getElementById('txt-expenceAmt').value = "";
}

function editButton() {
    expenceList.removeItem(li);
 }