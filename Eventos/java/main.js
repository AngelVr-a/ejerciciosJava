document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const height = parseFloat(document.getElementById('height').value) / 100; // Convertimos de cm a metros
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        console.log(bmi);
        displayResult(bmi);
    } else {
        displayResult('Por favor, introduce valores válidos.');
    }
});

function displayResult(bmi) {
    const resultDiv = document.getElementById('result');
    console.log(resultDiv);
    let message = '';

    if (isNaN(bmi)) {
        message = bmi;
    } else {
        if (bmi < 18.5) {
            message = `Tu IMC es ${bmi}. Estás en el rango de bajo peso.`;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            message = `Tu IMC es ${bmi}. Estás en el rango de peso normal.`;
        } else if (bmi >= 25 && bmi < 29.9) {
            message = `Tu IMC es ${bmi}. Estás en el rango de sobrepeso.`;
        } else {
            message = `Tu IMC es ${bmi}. Estás en el rango de obesidad.`;
        }
    }

    resultDiv.textContent = message;
}

const usdInput = document.getElementById('usdInput');
const mxmInput = document.getElementById('eurInput');

const usdToMxmRate = 19; // Tipo de cambio de USD a EUR (ejemplo)
const mxmToUsdRate = 0.052; // Tipo de cambio de EUR a USD

// Función para convertir de USD a EUR
function convertUsdToEur() {
    const usdValue = parseFloat(usdInput.value);
    if (!isNaN(usdValue)) {
        mxmInput.value = (usdValue * usdToMxmRate).toFixed(2);
    } else {
        mxmInput.value = '';
    }
}

// Función para convertir de EUR a USD
function convertEurToUsd() {
    const mxmValue = parseFloat(mxmInput.value);
    if (!isNaN(mxmValue)) {
        usdInput.value = (mxmValue * mxmToUsdRate).toFixed(2);
    } else {
        usdInput.value = '';
    }
}

// Añadir event listeners a los campos de entrada
usdInput.addEventListener('input', convertUsdToEur);
mxmInput.addEventListener('input', convertEurToUsd);
