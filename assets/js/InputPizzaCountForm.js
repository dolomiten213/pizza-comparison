class InputPizzaCountForm {
    
    static #count = 0
    
    #form = null
    #value = 0

    constructor(className) {
        this.#form = document.querySelectorAll("." + className)[InputPizzaCountForm.#count++]
        this.#form.oninput = () => this.value = this.#form.value;
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
        } else {
            if (count > MAX_PIZZA_COUNT || count < MIN_PIZZA_COUNT) {
                this.#form.value = this.#value;
            } else {
                this.#value = count;
            }
        }
    }     
}