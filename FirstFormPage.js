import React from 'react';

const rawHTML = `
<!DOCTYPE html>
<html lang="en">   
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Health Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body class="bg-gray-100 text-lg">
    <div class="w-full max-w-2xl mx-auto mt-10">
        <!-- Progress Steps and Title -->
        <div class="mb-6">
            <div class="flex items-center mb-4">
                <div class="flex-1">
                    <div class="w-full bg-gray-300 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full" style="width: 25%;"></div>
                    </div>
                </div>
            </div>
            <h2 class="text-xl font-semibold text-gray-700">Tell us about yourself & your household.</h2>
        </div>
        <!-- Form Card -->
        <div class="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <div class="bg-blue-800 p-6 flex justify-between items-center">
                <h2 class="text-white font-semibold text-2xl">You</h2>
                <i class="fas fa-check-circle text-white text-2xl"></i>
            </div>
            <form class="p-6 border-b-8 border-blue-800">
                <!-- Form Content -->
                <div class="flex space-x-6 mb-6">
                    <div class="flex-1">
                        <label class="block text-gray-700 text-base font-bold mb-2" for="age">
                            Your Date of Birth
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="age" type="date" pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/(19[5-9][7-9]|200[0-4])" title="Please enter your actual birthdate"  placeholder="Your Age">
                    </div>
                    <div class="flex-1">
                        <label class="block text-gray-700 text-base font-bold mb-2" for="zipcode">
                            Zip Code
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="zipcode" type="text" placeholder="Zip Code">
                    </div>
                    <div class="flex-1">
                        <label class="block text-gray-700 text-base font-bold mb-2" for="year">
                            Select Year
                        </label>
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="year">
                            <option>2024</option>
                        </select>
                    </div>
                </div>
                <div class="flex space-x-6 mb-6">
                    <div class="flex-1">
                        <label class="block text-gray-700 text-base font-bold mb-2" for="fname">
                            First Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="fname" type="text" placeholder="First Name">
                    </div>
                    <div class="flex-1">
                        <label class="block text-gray-700 text-base font-bold mb-2" for="lname">
                            Last Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="lname" type="text" placeholder="Last Name">
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-500 text-base mb-2" for="checkbox1">
                        <input type="checkbox" id="checkbox1" name="checkbox1" value="Option1"> Eligible for coverage through a job, Medicaid, Medicare, or CHIP
                    </label>
                </div>
                <div class="mb-6 flex items-baseline">
                    <input type="checkbox" id="checkbox2" name="checkbox2" value="Option2" class="mr-2">
                    <label class="block text-gray-500 text-base mb-2" for="checkbox2">
                        Used tobacco products four (4) or more times per week on average during the past six (6) months (not including ceremonial uses)
                    </label>
                </div>
            </form>
            </div>
        </div>
        <!-- Form Buttons -->
        <!-- Main Form Section -->
        <div class="w-full max-w-2xl mx-auto mt-10">
            <div class="bg-white border border-gray-300 rounded-lg overflow-hidden">
                <!-- Form -->
            </div>
            <!-- Form Buttons -->
            <div class="flex justify-around mt-4 space-x-4">
                <button type="button" id="spouseButton" class="w-1/2 py-4 px-6 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="showSpouseForm()">
                    SPOUSE
                </button>
                <button type="button" id="dependentButton" class="w-1/2 py-4 px-6 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    DEPENDENT
                </button>
            </div>
        </div>
        <!-- Add this at the end of the first form page -->
        <div class="w-full max-w-2xl mx-auto mt-10">
            <div class="flex justify-between space-x-4 mt-4">
                <a href="#" class="w-1/2 flex items-center justify-center py-4 px-6 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    BACK
                </a>
                <a href="SecondFormPage.html" class="w-1/2 flex items-center justify-center py-4 px-6 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    CONTINUE
                </a>
            </div>
            <!-- Spouse Form Section (Hidden Initially) -->
            <div class="hidden p-4 bg-white border border-gray-300 rounded-lg mt-4" id="spouseForm">
                <div class="bg-blue-800 p-6 flex justify-between items-center">
                    <h2 class="text-white font-semibold text-2xl">Spouse</h2>
                    <i class="fas fa-check-circle text-white text-2xl"></i>
                </div>
                <form class="p-6 border-b-8 border-blue-800">
                    <div class="flex space-x-6 mb-6">
                        <div class="flex-1">
                            <label class="block text-gray-700 text-base font-bold mb-2" for="spouseAge">
                                Spouse Date of Birth
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="spouseAge" type="date" placeholder="Spouse Age">
                        </div>
                        <!-- Add more fields as needed -->
                    </div>
                    <div class="flex space-x-6 mb-6">
                        <div class="flex-1">
                            <label class="block text-gray-700 text-base font-bold mb-2" for="fname">
                                First Name
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="fname" type="text" placeholder="First Name">
                        </div>
                        <div class="flex-1">
                            <label class="block text-gray-700 text-base font-bold mb-2" for="lname">
                                Last Name
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="lname" type="text" placeholder="Last Name">
                        </div>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-500 text-base mb-2" for="spouseCheckbox1">
                            <input type="checkbox" id="spouseCheckbox1" name="spouseCheckbox1" value="Option1"> Eligible for coverage through a job, Medicaid, Medicare, or CHIP
                        </label>
                    </div>
                    <!-- Add more checkboxes as needed -->
                    <div class="mb-6 flex items-baseline">
                        <input type="checkbox" id="checkbox2" name="checkbox2" value="Option2" class="mr-2">
                        <label class="block text-gray-500 text-base mb-2" for="checkbox2">
                            Used tobacco products four (4) or more times per week on average during the past six (6) months (not including ceremonial uses)
                        </label>
                    </div>
                </form>
            </div>
        </div>
        <script>
            var spouseButton = document.getElementById('spouseButton');
            var dependentButton = document.getElementById('dependentButton');
            var buttonContainer = document.querySelector('.flex.justify-around.mt-4.space-x-4');
            var dependentCount = 0;

            spouseButton.addEventListener('click', function() {
                // Clone spouse form and remove hidden class
                var spouseForm = document.getElementById('spouseForm');
                var newCard = spouseForm.cloneNode(true);
                newCard.classList.remove('hidden');

                // Insert new spouse card into DOM
                buttonContainer.parentNode.insertBefore(newCard, buttonContainer);

                // Disable spouse button
                this.disabled = true;
                this.classList.add('opacity-50', 'cursor-not-allowed');
            });

            dependentButton.addEventListener('click', function() {
                if (dependentCount < 15) {
                    // Clone spouse form and remove hidden class
                    var spouseForm = document.getElementById('spouseForm');
                    var newCard = spouseForm.cloneNode(true);
                    newCard.classList.remove('hidden');

                    // Change name to "DEPENDANT"
                    var h2 = newCard.querySelector('h2');
                    h2.textContent = 'DEPENDANT';

                    // Insert new dependent card into DOM
                    buttonContainer.parentNode.insertBefore(newCard, buttonContainer);

                    dependentCount++;
                }

                // Disable dependent button if count is 15
                if (dependentCount === 15) {
                    this.disabled = true;
                    this.classList.add('opacity-50', 'cursor-not-allowed');
                }
            });
        </script>
    </div>
    <script>
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault(); // prevent the form from being submitted normally
        
            var fname = document.getElementById('fname').value;
            var lname = document.getElementById('lname').value;
        
            localStorage.setItem('fname', fname);
            localStorage.setItem('lname', lname);
        });
    </script>
</body>
</html>
`;

const HtmlFormContainer = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
    );
};

export default HtmlFormContainer;