function handleFormSubmit(event){
    event.preventDefault()
    const new_username = document.getElementById('username')
    const new_email = document.getElementById('email')
    const new_phone = document.querySelector('select')
    const my_obj ={ name: new_username.value, email:new_email.value, phone: new_phone}
    const my_obj1 = JSON.stringify(my_obj)
    localStorage.setItem(my_obj.email,my_obj1)
    const my_obj2 = JSON.parse(localStorage.getItem(my_obj.new_email))
    const parent_element = document.getElementById("list_of_items")
 
    const child_elem = document.createElement('li')
    child_elem.textContent = new_username.value+ '-' + new_email.value+ '-'+ new_phone.value
    // a.appendChild(new_element)
    parent_element.appendChild(child_elem)
    const delete_button = document.createElement('input')
    delete_button.type='button'
    delete_button.value = 'Delete'
    delete_button.onclick=()=>{
        localStorage.removeItem(my_obj.email)
        parent_element.removeChild(child_elem)
        parent_element.removeChild(delete_button)
        parent_element.removeChild(edit_button)

    }
    parent_element.appendChild(delete_button)
    const edit_button = document.createElement('input')
    edit_button.type='button'
    edit_button.value = 'Edit'
    edit_button.onclick=()=>{
        new_username.value=my_obj.name
        new_email.value=my_obj.email
        new_phone.value=my_obj.phone
        localStorage.removeItem(my_obj.email)
        parent_element.removeChild(child_elem)
        parent_element.removeChild(edit_button)
        parent_element.removeChild(delete_button)


    }
    parent_element.appendChild(edit_button)
    console.log(my_obj)
    //done twice





}