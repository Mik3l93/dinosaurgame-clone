import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"


const SPEED = 0.2
const groundElems = document.querySelectorAll ("[data-ground]")

export function setUpGround() {
    setCustomProperty(groundElems[0], "--left", 0)
    setCustomProperty(groundElems[1], "--left", 300)

    
}

/* looping the ground element */

export function updateGround(delta, speedScale) {
    groundElems.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)

        if (getCustomProperty(ground, "--left") <= -300 ) {
            incrementCustomProperty(ground, "--left", 600)
        }
    
    })
}