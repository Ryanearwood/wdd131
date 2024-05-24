const currrentDate = new Date();
const yearTag = document.querySelector("#current_year");
const lastModifiedTag = document.querySelector("#last_Modified");
const lastModified = document.lastModified;

yearTag.innerHTML = currrentDate.getFullYear();
lastModifiedTag.innerHTML = `Last Modification: ${lastModified}`;



window.onload = function() {
    
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            avgRating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            avgRating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            avgRating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            avgRating: 5.0
        }
    ];
    
   
    if (document.title == "Product Review") {
        const select = document.getElementById("product_Name");

        products.forEach(product => {
            const option = document.createElement("option");
            option.setAttribute("value", product.id);
            option.textContent = product.name;
            select.appendChild(option);
        });
    }
}


if (document.title == "Product Review Submitted") {
   
    let reviews = localStorage.getItem("reviewCount");

    if (reviews === null) {
        reviews = 0;
    }

    reviews++;

    localStorage.setItem("reviewCount", reviews);

    document.getElementById("review_Count").textContent = reviews;
}
