function navSlide(){
    const nav = document.querySelector(".nav-bar");
    const menu = document.querySelector(".nav-links");
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', ()=>{
        menu.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}

navSlide();


const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq)=> {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


// biil amount 

document.getElementById('billForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    const tipRate = parseFloat(document.getElementById('tipRate').value);

    // Calculate tax, tip, and total amount
    const taxAmount = (taxRate / 100) * billAmount;
    const tipAmount = (tipRate / 100) * billAmount;
    const totalAmount = billAmount + taxAmount + tipAmount;

    // Display the total bill
    document.getElementById('totalBill').textContent = `Total Bill: $${totalAmount.toFixed(2)}`;
});