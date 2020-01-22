class SepPair {
    constructor(index1, char1) {
        this.index = index1;
        this.char = char1;
    }
    isSpecial() {
        if (this.char == "{" || this.char == "}" || this.char == ";" || this.char == "\"" || this.char == "=")
            return true;
        else
            return false;
    }
}
function getPrevValue(script, stack, nextIndex) {
    let result = "";
    if (stack.length > 0 && !stack[stack.length - 1].isSpecial()) {
        // ավարտվել է նախորդ տեքստային դաշտը
        let prev = stack.pop();
        if (stack.length > 0 && stack[stack.length - 1].char == "=") {
            // it is a value
            let value = script.substring(prev.index, nextIndex);
            if (!isNaN(+value)) {
                // found numeric value
                if (value.indexOf(".") < 0) {
                    result = "<span class='mi'>" + value + "</span>";
                }
                else {
                    result = "<span class='mf'>" + value + "</span>";
                }
            }
            else {
                result = "<span class='p'>" + value + "</span>";
            }
            stack.pop(); //հանել "=" նշանը
        }
        else {
            // it is a tag name
            result = "<span class='nt'>" + script.substring(prev.index, nextIndex) + "</span>";
        }
    }
    return result;
}
function beautifyAS4X(script) {
    let stack = [];
    let resultHTML = "";
    let prevIndex = -1;
    while (prevIndex < script.length - 1) {
        let next = new SepPair(prevIndex + 1, script[prevIndex + 1]);
        switch (next.char) {
            case "\"":
                let iEndQuote = script.indexOf("\"", next.index + 1);
                resultHTML += "<span class='s'>" + script.substring(next.index, iEndQuote + 1) + "</span>";
                if (stack.length > 0 && stack[stack.length - 1].char == "=")
                    stack.pop();
                prevIndex = iEndQuote;
                break;
            case " ":
            case "\n":
            case "\t":
                resultHTML += getPrevValue(script, stack, next.index);
                resultHTML += next.char;
                prevIndex = next.index;
                break;
            case "=":
            case "{":
                resultHTML += getPrevValue(script, stack, next.index);
                stack.push(next);
                resultHTML += "<span class='p'>" + next.char + "</span>";
                prevIndex = next.index;
                break;
            case "}":
                stack.pop();
                resultHTML += "<span class='p'>" + next.char + "</span>";
                prevIndex = next.index;
                break;
            case ";":
                resultHTML += getPrevValue(script, stack, next.index); // 10000-ը հետևյալ օրինակում " WIDTH = 10000; ", կդարձնի <span...>10000</span>
                resultHTML += "<span class='p'>" + next.char + "</span>";
                prevIndex = next.index;
                break;
            case "'":
                let iEndLine = script.indexOf("\n", next.index + 1);
                let s1 = script.substring(next.index, iEndLine + 1);
                resultHTML += "<span class='c'>" + s1 + "</span>";
                prevIndex = iEndLine;
                break;
            default:
                // սա կարդում է որևէ սիմվոլային հատված, դրա միայն առաջին սիմվոլը կավելացնենք ստեկում
                // Օրինակ՝ C-ն (CONTEXT) և/կամ A-ն (ASBANK) հետևյալի մեջից   " CONTEXT = ASBANK ; "
                if (stack.length == 0 || stack[stack.length - 1].isSpecial()) {
                    stack.push(next);
                }
                prevIndex = next.index;
                break;
        }
    }
    return resultHTML;
}
function highlightAllAS4X() {
    const codes = document.querySelectorAll("code.language-as4x");
    for (let i = 0; i < codes.length; i++) {
        const codeTag = codes[i];
        const preTag = codeTag.parentElement;
        if (preTag && preTag.tagName == "PRE") {
            codeTag.classList.remove("language-as4x");
            preTag.classList.add("highlight");
            const div1 = document.createElement("div");
            div1.classList.add("language-as4x");
            div1.classList.add("highlighter-rouge");
            const div2 = document.createElement("div");
            div2.classList.add("highlight");
            div1.appendChild(div2);
            preTag.parentElement.insertBefore(div1, preTag);
            div2.appendChild(preTag);
            codeTag.innerHTML = beautifyAS4X(codeTag.innerHTML);
        }
    }
}
highlightAllAS4X();
//# sourceMappingURL=beautifyAS4X_2.js.map