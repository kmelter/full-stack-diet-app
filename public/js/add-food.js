const addFood = (event) => {
    event.preventDefault();
    console.log('here');

    const food_name = document.querySelector('#food-input').value;
    // let food_name = foodInput.toString();
    let dietSelect = document.querySelectorAll('input[name="diet"]:checked');
    let output = [];
    dietSelect.forEach((checkbox) => {
        let parsedInt = parseInt(checkbox.value);
        output.push(parsedInt);
    });
    
    const response = fetch(`/api/foods`, {
        method: 'POST',
        body: JSON.stringify({
            food_name,
            output
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('Food added successfully!');
    } else {
        console.log('Food added');
    }
    
};

document.querySelector('#add-food').addEventListener('click', addFood);