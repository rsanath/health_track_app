export function log(string) {
    if (__DEV__) console.log(string)
}

/*
Disables the yellow warning boxes that hide the screen.
 */
export function hideWarnings() {
    console.disableYellowBox = true
}