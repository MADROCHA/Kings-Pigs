const collisionsLevel1 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]
const collisionsLevel2 = [
    292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 292, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 292, 292, 0, 0, 292, 292, 292, 292, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0
]
const collisionsLevel3 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0,
    0, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]
const collisionsLevel4 = [
    250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250,
    250, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 250,
    250, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 250,
    250, 250, 250, 127, 127, 127, 0, 0, 127, 77, 77, 127, 64, 64, 64, 250,
    250, 64, 127, 127, 0, 0, 0, 77, 0, 250, 250, 64, 64, 64, 64, 250,
    250, 64, 0, 77, 250, 77, 0, 250, 0, 195, 0, 0, 64, 250, 250, 250,
    250, 116, 64, 250, 250, 250, 0, 0, 0, 0, 0, 0, 64, 250, 0, 0,
    250, 250, 64, 64, 64, 64, 64, 64, 64, 64, 64, 250, 64, 250, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0
]
const collisionsLevel5 = [
    250, 250, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 250, 250,
    250, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 250,
    250, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 64, 250,
    250, 54, 54, 127, 250, 127, 250, 250, 127, 250, 250, 127, 64, 64, 64, 250,
    250, 64, 127, 250, 250, 250, 250, 250, 250, 195, 64, 64, 64, 64, 64, 250,
    250, 64, 0, 54, 54, 54, 0, 195, 0, 195, 0, 0, 64, 54, 54, 250,
    250, 54, 64, 0, 0, 0, 0, 0, 0, 0, 0, 250, 64, 54, 0, 250,
    250, 54, 64, 250, 64, 64, 250, 250, 250, 250, 64, 250, 64, 250, 0, 250,
    54, 54, 54, 250, 54, 54, 250, 250, 250, 250, 54, 54, 54, 54, 0, 0
]
