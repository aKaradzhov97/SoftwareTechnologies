function printLines(args) {
    for (let i = 0; i <= args.length; i++) {
        let stopper = args[i];
        if (stopper === "Stop") {
            break;
        } else {
            console.log(stopper);
        }
    }
}