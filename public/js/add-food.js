const addFood = (event) => {
    event.preventDefault();

    const food_name = document.querySelector('#food-input').value;
    let dietSelect = document.querySelectorAll('input[name="diet"]:checked');
    let dietIds = [];
    dietSelect.forEach((checkbox) => {
        let parsedInt = parseInt(checkbox.value);
        dietIds.push(parsedInt);
    });
    
    const response = fetch(`/api/foods`, {
        method: 'POST',
        body: JSON.stringify({
            food_name,
            dietIds
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('Food added successfully!');
        window.alert("Food added successfully!");
    } else {
        console.log('Food added');
        window.alert("Food added successfully!");
    }
    
};

document.querySelector('#add-food').addEventListener('click', addFood);
