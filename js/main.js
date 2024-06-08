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