class InputPizzaDiameterForm {
    
    static #count = 0
    
    #form = null
    #buttonLeft = null
    #buttonRight = null
    #measureForm = null

    #value = 0
    #measure = "sm"

    #MAX = MAX_PIZZA_DIAMETER_CM
    #MIN = MIN_PIZZA_DIAMETER_CM

    constructor(className) {
        this.#form = document.querySelectorAll("." + className)[InputPizzaDiameterForm.#count]
        this.#form.oninput = () => this.value = this.#form.value;

        this.#measureForm = document.querySelectorAll(".measure")[InputPizzaDiameterForm.#count]
        this.#measureForm.onclick = () => this.changeMeasure()
        
        /* this.#buttonLeft = document.querySelectorAll(".left")[InputPizzaDiameterForm.#count]
        this.#buttonLeft.onclick = () => this.changeMeasure() 
        
        this.#buttonRight = document.querySelectorAll(".right")[InputPizzaDiameterForm.#count]
        this.#buttonRight.onclick = () => this.changeMeasure() */

        InputPizzaDiameterForm.#count++;
    }

    changeMeasure() {
        window.resetWinner()
        if (this.#measure == "sm") {
            this.#measure = "inch"
            this.#measureForm.value = "inch"
            this.#MAX = MAX_PIZZA_DIAMETER_INCH
            this.#MIN = MIN_PIZZA_DIAMETER_INCH
        } else {
            this.#measure = "sm"
            this.#measureForm.value = "sm"
            this.#MAX = MAX_PIZZA_DIAMETER_CM
            this.#MIN = MIN_PIZZA_DIAMETER_CM
        }
    }

    get measure() {
        return this.#measure
    }

    get value() {
        return this.#value;
    }
    
    set value(count) {
        window.resetWinner()
        if (count < 1 && this.#value < 10) {
            this.#form.value = null;
            this.#value = 0;
            return;
        }
        if (count > this.#MAX || count < this.#MIN) {
            this.#form.value = this.#value;
        } else {
            this.#value = count;
        }
    }
}