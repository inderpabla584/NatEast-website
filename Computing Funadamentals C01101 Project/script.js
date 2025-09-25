// Get the button:
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function calculate() {

  const loanAmount = parseFloat(document.getElementById('loan-amount').value);
  const mortgageTerm = parseFloat(document.getElementById('loan-term').value);
  const monthlyIncome = parseFloat(document.getElementById('monthly-income').value);
  

  if (isNaN(loanAmount) || isNaN(mortgageTerm) || isNaN(monthlyIncome)) {

      alert('Fill out all input fields!')

  } else {


      const interestRate = 0.045;

      // Calculate monthly payment
      const monthlyInterestRate = interestRate / 12;
      const numberOfPayments = mortgageTerm * 12;
      
      const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
      const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

      const monthlyPayment = numerator / denominator;
  
      if (monthlyIncome * 0.3 <= monthlyPayment) {
      
        alert('You are Not Eligible for a loan! Monthly payments exceed 30% of monthly.')
        clearMortgageForm()
    
      } else{

      // Display results
      document.getElementById('monthlyPayment').innerText = `£${monthlyPayment.toFixed(2)}`;

      
      const totalInterest = (monthlyPayment * numberOfPayments - loanAmount).toFixed(2);
      const totalAmount = (parseFloat(loanAmount) + parseFloat(totalInterest)).toFixed(2);
      const incomeAfterPaid = (monthlyIncome - monthlyPayment).toFixed(2)

      document.getElementById('totalLoan').innerText = `£${loanAmount}`;
      document.getElementById('totalInterest').innerText = `£${totalInterest}`;
      document.getElementById('totalAmount').innerText = `£${totalAmount}`;
      document.getElementById('incomeAfterPaid').innerText = `£${incomeAfterPaid}`;
  }
}
}

function clearMortgageForm() {
  document.getElementById('loan-amount').value = ''
  document.getElementById('loan-term').value = ''
  document.getElementById('monthly-income').value = ''
  document.getElementById('monthlyPayment').innerText = `£0`;
  document.getElementById('totalLoan').innerText = `£0`;
  document.getElementById('totalInterest').innerText = `£0`;
  document.getElementById('totalAmount').innerText = `£0`;
  document.getElementById('incomeAfterPaid').innerText = `£0`;
}


function contactValidation() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Name validation
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Valid email is required';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }

    // Subject validation
    if (subject === '') {
      document.getElementById('subjectError').textContent = 'Subject is required';
      document.getElementById('subjectError').style.display = 'block';
      isValid = false;
    }

    // Message validation
    if (message === '') {
      document.getElementById('messageError').textContent = 'Message is required';
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
    }

    // If form is valid
    if (isValid) {
      submitForm({
        name: name,
        email: email,
        subject: subject,
        message: message
      });
    }
  });
}

function submitForm(formData) {
  try {

    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you! Your message has been sent.');
    
    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  } catch (error) {
    console.error('Submission error:', error);
    alert('Failed to send message. Please try again.');
  }
}


document.addEventListener('DOMContentLoaded', contactValidation);


$(document).ready(function () {
  
  $('.slides img').hide();

  
  $('.slides img').each(function (index) {
    $(this).delay(index * 500).fadeIn(1500);
  });
});


$(document).ready(function () {
 
  $('.slides h2').hide();

 
  $('.slides h2').each(function (index) {
    $(this).delay(index * 500).fadeIn(1500);
  });
});
