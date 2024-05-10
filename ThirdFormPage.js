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
                        <div class="bg-blue-600 h-2 rounded-full" style="width: 75%;"></div>
                    </div>
                </div>
            </div>
            <h2 class="text-xl font-semibold text-gray-700">What is your contact information?</h2>
        </div>
        <!-- Form Card -->
        <div class="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <div class="bg-blue-800 p-6 flex justify-between items-center">
                <h2 class="text-white font-semibold text-2xl">Contact Info</h2>
                <i class="fas fa-check-circle text-white text-2xl"></i>
            </div>
            <form class="p-6 border-b-8 border-blue-800">
                <!-- Form Content -->
                <div class="mb-6">
                    <label class="block text-gray-700 text-base font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="email" type="email" placeholder="Email">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-base font-bold mb-2" for="phone">
                        Phone Number
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="phone" type="tel" placeholder="Phone Number">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-base font-bold mb-2" for="address">
                        Home Address
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="address" type="text" placeholder="Home Address">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-base font-bold mb-2" for="zipcode">
                        Zip Code
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md" id="zipcode" type="text" placeholder="Zip Code">
                </div>
            </form>
        </div>
        <!-- Add this at the end of the first form page -->
        <div class="flex justify-between space-x-4 mt-4">
            <a href="SecondFormPage.html" class="w-1/2 flex items-center justify-center py-4 px-6 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                BACK
            </a>
            <a href="FourthFormPage.html" class="w-1/2 flex items-center justify-center py-4 px-6 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                CONTINUE
            </a>
        </div>
    </div>
</body>
</html>
`;

const HtmlFormContainer = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
    );
};

export default HtmlFormContainer;
