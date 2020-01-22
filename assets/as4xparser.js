class SepPair1 {
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
class XLexem {
    constructor(type1, content1 = null) {
        this.type = type1;
        this.content = content1;
        this.children = [];
        this.name = null;
    }
    toString() {
        if (this.type == "simple" || this.type == "complex") {
            return this.children.join("");
        }
        else {
            return this.content;
        }
    }
}
class XParser {
    parse(script) {
        let stack = [];
        let current;
        let prevIndex = -1;
        let value;
        let newValue;
        while (prevIndex < script.length - 1) {
            let next = new SepPair1(prevIndex + 1, script[prevIndex + 1]);
            switch (next.char) {
                case "\"":
                    let iEndQuote = script.indexOf("\"", next.index + 1);
                    current = stack[stack.length - 1]; // սա խնդրահարույց է, գուցե միայն "some string" ընդունելի է
                    value = script.substring(next.index, iEndQuote + 1);
                    current.children.push(new XLexem("value", value));
                    prevIndex = iEndQuote;
                    break;
                case " ":
                case "\n":
                case "\t":
                    //ստուգել
                    if (stack.length > 0) {
                        current = stack[stack.length - 1]; // սա խնդրահարույց է, գուցե միայն "some string" ընդունելի է
                        if (current.type == "whitespace") {
                            current.content += next.char;
                        }
                        else if (!this.isClosed(current)) {
                            if (current.children[current.children.length - 1].type == "whitespace") {
                                current.children[current.children.length - 1].content += next.char;
                            }
                            else {
                                current.children.push(new XLexem("whitespace", next.char));
                            }
                        }
                        else {
                            current = new XLexem("whitespace", next.char);
                            stack.push(current);
                        }
                    }
                    else {
                        current = new XLexem("whitespace", next.char);
                        stack.push(current);
                    }
                    prevIndex = next.index;
                    break;
                case "=":
                case "{":
                    current = stack[stack.length - 1]; // սա խնդրահարույց է, գուցե միայն "abc = "xyz";" ընդունելի է
                    if (current.type == "simple" || current.type == "complex") {
                        current.children.push(new XLexem("special", next.char));
                        newValue = this.reStackBiggerLexem(current.children);
                    }
                    else {
                        stack.push(new XLexem("special", next.char));
                        newValue = this.reStackBiggerLexem(stack);
                    }
                    stack.push(newValue);
                    prevIndex = next.index;
                    break;
                case "}":
                    stack[stack.length - 1].children.push(new XLexem("special", next.char));
                    prevIndex = next.index;
                    break;
                case ";":
                    stack[stack.length - 1].children.push(new XLexem("special", next.char));
                    stack.pop();
                    prevIndex = next.index;
                    break;
                case "'":
                    let iEndLine = script.indexOf("\n", next.index + 1);
                    let s1 = script.substring(next.index, iEndLine + 1);
                    if (stack.length > 0) {
                        stack[stack.length - 1].children.push(new XLexem("comment", s1));
                    }
                    else {
                        stack.push(new XLexem("comment", s1));
                    }
                    prevIndex = iEndLine;
                    break;
                default:
                    // սա կարդում է որևէ սիմվոլային հատված, դրա միայն առաջին սիմվոլը կավելացնենք ստեկում
                    // Օրինակ՝ C-ն (CONTEXT) և/կամ A-ն (ASBANK) հետևյալի մեջից   " CONTEXT = ASBANK ; "
                    newValue = new XLexem("value", "");
                    let temp = next.index;
                    while (temp < script.length) {
                        if (this.isSpecialChar(script[temp])) {
                            break;
                        }
                        else {
                            newValue.content += script[temp];
                            temp++;
                        }
                    }
                    if (stack.length == 0) {
                        stack.push(newValue);
                    }
                    else {
                        current = stack[stack.length - 1];
                        if (!this.isClosed(current)) {
                            current.children.push(newValue);
                        }
                        else {
                            stack.push(newValue);
                        }
                    }
                    prevIndex = temp - 1;
                    break;
            }
        }
        return stack;
    }
    isSpecialChar(char) {
        return (char == "{" || char == "}" || char == ";" || char == "\"" || char == "=" || char == " ");
    }
    /** Ստուգում է, որ "simple" կամ "complex" լքեսեմում ավելացվել է վեջին ";", թե ոչ։ */
    isClosed(lexem) {
        if (lexem.type == "simple" || lexem.type == "complex") {
            if (lexem.children.length > 0 && lexem.children[lexem.children.length - 1].content == ";") {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    /**
     * Լեքսեմների ցուցակի միջից վերի տարրերը հանում է և սարքում կուտակիչ լեքսեմ։
     * @param stack Լեքսեմների ցուցակ։
     * @example
     * Երբ ստեկում գրված է (..., "CONFIG", " ", "{")
     * վերջին երեքը դարձնում է "complex" լեքսեմ և դնում ստեկում (..., ("CONFIG", " ", "{"))
     *
     * Երբ ստեկում գրված է (..., "VALUE", " ", "=")
     * վերջին երեքը դարձնում է "simple" լեքսեմ և դնում ստեկում (..., ("VALUE", " ", "="))
     */
    reStackBiggerLexem(stack) {
        let current = stack.pop();
        let bigger;
        if (current.content == "{") {
            bigger = new XLexem("complex");
        }
        else if (current.content == "=") {
            bigger = new XLexem("simple");
        }
        if (stack.length >= 2 && stack[stack.length - 2].type == "value" && stack[stack.length - 1].type == "whitespace") {
            //" COLUMN {"
            let whitespace = stack.pop();
            let identifier = stack.pop();
            bigger.children.push(identifier);
            bigger.children.push(whitespace);
            bigger.children.push(current);
            identifier.type = "identifier";
            bigger.name = identifier.content;
        }
        else if (stack.length >= 1 && stack[stack.length - 1].type == "value") {
            //" COLUMN{"
            let identifier = stack.pop();
            bigger.children.push(identifier);
            bigger.children.push(current);
            identifier.type = "identifier";
            bigger.name = identifier.content;
        }
        else if (bigger.type == "simple") {
            //" ="value123" "
            bigger.children.push(current);
            bigger.name = "";
        }
        else {
            //"{"
            throw new Error("Identifier for Complex Lexem not found.");
        }
        stack.push(bigger);
        return bigger;
    }
}
class XLexemFormatter {
    format(lexems) {
        let result = "";
        for (let lexem of lexems) {
            result += this.formatLexem(lexem);
        }
        return result;
    }
    formatLexem(lexem) {
        let result;
        if (lexem.type == "whitespace") {
            result = lexem.content;
        }
        else if (lexem.type == "identifier") {
            result = "<span class='nt'>" + lexem.content + "</span>";
        }
        else if (lexem.type == "value") {
            let value = lexem.content;
            if (!isNaN(+value)) {
                // found numeric value
                if (value.indexOf(".") < 0) {
                    result = "<span class='mi'>" + value + "</span>";
                }
                else {
                    result = "<span class='mf'>" + value + "</span>";
                }
            }
            else if (lexem.content[0] == "\"") {
                result = "<span class='s'>" + value + "</span>";
            }
            else {
                result = "<span class='p'>" + value + "</span>";
            }
        }
        else if (lexem.type == "special") {
            result = "<span class='p'>" + lexem.content + "</span>";
        }
        else if (lexem.type == "comment") {
            result = "<span class='c'>" + lexem.content + "</span>";
        }
        else if (lexem.type == "simple" || lexem.type == "complex") {
            result = this.format(lexem.children);
        }
        return result;
    }
}
//COMMON {
//    DESCRIPTION = "Initialization";
//    CONFIG{ NAME="d_bank1";    };
//    PARAMVALUE {  ="ez" ; };
//};
//SCRIPED {
//    TFS ="http://tfserver:8080/tfs/Armsoft";
//};
let str = "COMMON {\n    DESCRIPTION = \"Initialization\";\n    CONFIG{ NAME=\"d_bank1\";    };\n    PARAMVALUE {  =\"ez\" ; };\n};"
    + "\n"
    + "SCRIPED {\n    TFS =\"http://tfserver:8080/tfs/Armsoft\";\n};";
console.log(str);
let parser1 = new XParser();
let lexems1 = parser1.parse(str);
console.log(lexems1);
console.log(lexems1.join(""));
let formatter = new XLexemFormatter();
console.log(formatter.format(lexems1));
function highlightAllAS4X_3() {
    const parser = new XParser();
    const formatter = new XLexemFormatter();
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
            const lexems = parser.parse(codeTag.innerHTML);
            codeTag.innerHTML = formatter.format(lexems);
        }
    }
}
highlightAllAS4X_3();
//# sourceMappingURL=as4xparser.js.map