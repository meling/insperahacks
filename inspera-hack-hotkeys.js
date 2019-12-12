(() => {
    const iframes = document.getElementsByTagName("iframe");
    for (const frame of iframes) {
        frame.addEventListener("keyup", (e) => {
            console.log("From iframe");
        })
    }
    document.onblur = () => {
        console.log("Blur");
        setTimeout(() => {
            document.body.focus();
        }, 1000);
    }
    document.onfocus = () => {
        console.log("Focus");
    }
    document.addEventListener("keyup", (e) => {
        let tryParse = parseInt(e.key);
        console.log(e);
        if (!isNaN(tryParse)) {
            console.log(`Is number ${tryParse}`);
            let grades = document.getElementsByClassName("grade-value");
            // console.log(grades);
            let clicked = false;
            for (const a of grades) {
                if (a.innerText == tryParse.toString()) {
                    console.log(`Clicking ${tryParse}`);
                    clicked = true;
                    a.click();
                    break;
                }
            }
            if (!clicked) {
                console.log(`Could not find grade with value: ${tryParse}`);
            }
        } else {
            switch (e.key) {
                case 'x':
                    console.log("Next Candidate");
                    let candSelectorRight = document.getElementsByClassName("ia-candidate-selector")[0];
                    let cnext = candSelectorRight.getElementsByClassName("fa-chevron-right")[0];
                    cnext.click();
                    cnext.tabIndex = 100;
                    cnext.onfocus = () => {
                        console.log("Focused");
                    }
                    setTimeout(() => {
                        cnext.focus();
                    }, 2000);
                    break;
                case 'z':
                    console.log("Prev Candidate");
                    let candSelectorLeft = document.getElementsByClassName("ia-candidate-selector")[0];
                    let cprev = candSelectorLeft.getElementsByClassName("fa-chevron-left")[0];
                    cprev.click();
                    cprev.tabIndex = 99;
                    cprev.onfocus = () => {
                        console.log("Focused");
                    }
                    setTimeout(() => {
                        cprev.focus();
                    }, 2000);
                    break;
                case 'm':
                    console.log("Next Assignment");
                    let selectorRight = document.getElementsByClassName("ia-question-selector")[0];
                    let next = selectorRight.getElementsByClassName("fa-chevron-right")[0];
                    next.click();
                    next.tabIndex = 100;
                    next.onfocus = () => {
                        console.log("Focused");
                    }
                    setTimeout(() => {
                        next.focus();
                    }, 1000);
                    break;
                case 'n':
                    console.log("Prev Assignment");
                    let selectorLeft = document.getElementsByClassName("ia-question-selector")[0];
                    let prev = selectorLeft.getElementsByClassName("fa-chevron-left")[0];
                    prev.click();
                    prev.tabIndex = 99;
                    prev.onfocus = () => {
                        console.log("Focused");
                    }
                    setTimeout(() => {
                        prev.focus();
                    }, 1000);
                    break;
            }
        }
    });
})();
