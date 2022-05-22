const dietSearch = () => {
    const selectedDietId = document.querySelector('#diet-search').value;

    document.location.replace('/search/' + selectedDietId);
};

document.querySelector('#select-diet').addEventListener('click', dietSearch);