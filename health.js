import { Utilities } from "./JSEasyGraphs/utils";

export class HealthSystem {
    #utils = new Utilities()

    #max_armor = 100;
    #max_health = 100;
    #armor = 0;
    #health = 100;

    addHealth(amount) {
        let newAmount = this.#health + amount
        let clamped = this.#utils.clamp(newAmount, 0, this.#max_health)
        this.#health = clamped;
    }

    addArmor(amount) {
        let newAmount = this.#armor + amount
        let clamped = this.#utils.clamp(newAmount, 0, this.#max_armor)
        this.#armor = clamped;
    }

    removeHealth(amount) {
        let newAmount = this.#health - amount
        let clamped = this.#utils.clamp(newAmount, 0, this.#max_health)
        this.#health = clamped;
    }

    removeArmor(amount) {
        let newAmount = this.#armor - amount
        let clamped = this.#utils.clamp(newAmount, 0, this.#max_armor)
        this.#armor = clamped;
    }

    setHealth(amount) {
        let clamped = this.#utils.clamp(amount, 0, this.#max_health)
        this.#health = clamped;
    }

    setArmor(amount) {
        let clamped = this.#utils.clamp(amount, 0, this.#max_armor)
        this.#armor = clamped;
    }

    damage(amount) {
        let newArmor = this.#armor - amount;
        if (newArmor > 0) {
            this.#armor = 0;
            this.#health = this.#health + newArmor;
        }
    }

    kill() {
        this.#health = 0;
    }

    dead() {
        if (this.#health === 0) {
            return true
        } else {
            return false
        }
    }

    get Health() {
        return this.#health
    }

    get Armor() {
        return this.#armor
    }
}