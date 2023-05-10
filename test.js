import { HealthSystem } from "./health";

const HS = new HealthSystem()

let healthCounter = document.getElementById("health")
let armorCounter = document.getElementById("armor")
let addHealth = document.getElementById("addHealth")
let removeHealth = document.getElementById("removeHealth")
let addArmor = document.getElementById("addArmor")
let removeArmor = document.getElementById("removeArmor")
let damage = document.getElementById("damage")
let kill = document.getElementById("kill")

function updateCounter() {
    healthCounter.innerHTML = "Health:" + HS.Health
    armorCounter.innerHTML = "Armor:" + HS.Armor
}

addHealth.onclick = function() {
    HS.addHealth(5)
    updateCounter()
}

removeHealth.onclick = function() {
    HS.removeHealth(5)
    updateCounter()
}

addArmor.onclick = function() {
    HS.addArmor(5)
    updateCounter()
}

removeArmor.onclick = function() {
    HS.removeArmor(5)
    updateCounter()
}

damage.onclick = function() {
    HS.damage(50)
    updateCounter()
}

kill.onclick = function() {
    HS.kill()
    updateCounter()
}