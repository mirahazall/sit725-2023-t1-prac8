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

const addCards = (items) => {
    if (!Array.isArray(items)) {
        console.error('Invalid input. Expected an array.');
        return;
    }
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend);
    });
};

const submitForm = () => {
    let formData = {
        // Extract form data as needed
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        password: $('#password').val(),
        email: $('#email').val(),
    };

    // Send the form data to the server
    $.ajax({
        type: "POST",
        url: "/api/projects/submit-form",
        contentType: "application/json",
        data: JSON.stringify(formData),
        dataType: "json", 
        success: function (response) {
            console.log(response);
            // Handle success, if needed
        },
        error: function (error) {
            console.error(error);
            // Handle error, if needed
        }
    });
};


const getProjects = () => {
    $.get('/api/projects', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    });
};

$(document).ready(function () {
    const showMyModal = () => {
        $('#modal1').modal('open');
    };

    $('#clickMeButton').click(() => {
        showMyModal();
    });

    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    });

    getProjects();
    $('.modal').modal();
    addCards(cardList);
});
