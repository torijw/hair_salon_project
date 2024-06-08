function getSubservices(service) {
    const subservice = document.getElementById("subservice");
    let options = [];

    switch(service) {
        case "Haircut":
            options = ["Men", "Women", "Children (under 10)", "Elderly (over 60)"];
            break;
        case "Styling":
            options = ["Braids", "Blow Dry", "Blow Dry + Style", "Up-do"];
            break;
        case "Colouring":
            options = ["Solid Colour", "Re-touch", "Highlights", "Partial Highlights", "Colour Correction"];
            break;
        case "Extensions":
            options = ["Fusion", "Tape-in", "Clip-ins", "Removal"];
            break;
    }
    subservice.innerHTML = "";
    const parentOption = document.createElement("option");
    parentOption.textContent = "Select a service sub-type";
    parentOption.selected = true;
    parentOption.disabled = true;
    subservice.append(parentOption);

    options.forEach((opt) => {
        const option = document.createElement("option");
        option.value = opt;
        option.textContent = opt;
        subservice.appendChild(option);
    })
}

function sendInfo() {
    var obj = new Object();
	obj.stylist = document.querySelector('input[name="stylist"]:checked').value;
	obj.service = document.querySelector('input[name="service"]:checked').value;
	obj.subservice = document.getElementById("subservice").value;
	obj.servicedate = document.getElementById("date").value;
	obj.servicetime = document.getElementById("time").value;
	obj.name = document.getElementById("firstname").value + " " + document.getElementById("lastname").value;
	obj.email = document.getElementById("email").value;
	obj.phone = document.getElementById("phone").value;
	obj.comments = document.getElementById("comments").value;

	var jsonString= JSON.stringify(obj);
	sessionStorage.setItem("message", jsonString);
}

function getInfo() {
    var message = sessionStorage.getItem("message");
    var obj = JSON.parse(message);
    
    var service = obj.service;
    var subservice = obj.subservice;
    if (subservice != null && subservice != "Select a service sub-type") {
        service += (" - " + subservice);
    }
    document.getElementById("name").innerHTML = obj.name;
    document.getElementById("date").innerHTML = obj.servicedate;
    document.getElementById("time").innerHTML = formatTime(obj.servicetime);
    document.getElementById("stylist").innerHTML = obj.stylist;
    document.getElementById("service").innerHTML = service;
    document.getElementById("comments").innerHTML = obj.comments;
}

function formatTime(time) {
    const [hour, minute] = time.split(":");
    return (hour % 12 || 12) + ":" + minute + " " + (hour < 12 ? "AM" : "PM");
}