const cardList = [
    {
        title: "Arizona",
        image: "images/horseshoebend.jpg",
        link: "Horseshoe Bend",
        description: "Horseshoe Bend",
    },
    {
        title: "California",
        image: "images/elcapitan.jpg",
        link: "El Capitan Yosemite",
        description: "El Capitan Yosemite"
    }
];

const clickMe = () => {
    alert("Explore the marvelous rock formations around the world!");
};

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend);
    });
};

$(document).ready(function () {
    // Function to show the modal
    const showMyModal = () => {
        $('#modal1').modal('open');
    };

    // Click event for the "Click Me" button to show the modal
    $('#clickMeButton').click(() => {
        clickMe();
    });

    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    });
    addCards(cardList);
    $('.modal').modal();
});



