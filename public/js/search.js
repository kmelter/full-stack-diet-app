const dietSearch = () => {
    console.log('hello');

    const selectedDietId = document.querySelector('#diet-search').value;
    console.log(selectedDietId);

    document.location.replace('/search/' + selectedDietId);
};

document.querySelector('#select-diet').addEventListener('click', dietSearch);