function smallStepLoop() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
function bigStepLoop() {
    for (let i = 100; i >= 0; i -= 10) {
        console.log(i);
    }
}
smallStepLoop();
bigStepLoop();
