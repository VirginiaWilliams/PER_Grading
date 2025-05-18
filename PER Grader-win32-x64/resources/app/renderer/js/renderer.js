import { PER17Reading } from "../questions/PER17Questions.js";

window.addEventListener("DOMContentLoaded", e => {

    // Event listeners
    document.querySelectorAll(".reading").forEach((element, i) => {
        element.addEventListener("input", () => {
            const inputs = document.querySelectorAll(".reading");
            let total = 0

            inputs.forEach(input => {
                total += Number(input.value);
            });

            document.querySelector("#reading-total-display").value = total;
        })
    });

    document.querySelectorAll(".language").forEach((element, i) => {
        element.addEventListener("input", () => {
            const inputs = document.querySelectorAll(".language");
            let total = 0

            inputs.forEach(input => {
                total += Number(input.value);
            });

            document.querySelector("#language-total-display").value = total;
        })
    });
    
    document.querySelectorAll(".math").forEach((element, i) => {
        element.addEventListener("input", () => {
            const inputs = document.querySelectorAll(".math");
            let total = 0

            inputs.forEach(input => {
                total += Number(input.value);
            });

            document.querySelector("#math-total-display").value = total;
        })
    });
})