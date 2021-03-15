module.exports = function check(str, bracketsConfig) {
    let holder = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' ||
            str[i] == '{' ||
            str[i] == '[' ||
            str[i] == '|' && holder[holder.length - 1] != '|' ||
            str[i] == '7' && holder[holder.length - 1] != '7' ||
            str[i] == '8' && holder[holder.length - 1] != '8' ||
            str[i] == '1' && holder[holder.length - 1] != '2' ||
            str[i] == '3' && holder[holder.length - 1] != '4' ||
            str[i] == '5' && holder[holder.length - 1] != '6') {
            holder.push(str[i]);
        } else {
            if (str[i] == ')' && holder[holder.length - 1] != '(' ||
                str[i] == '}' && holder[holder.length - 1] != '{' ||
                str[i] == '|' && holder[holder.length - 1] != '|') {
                return false;
            }
            holder.pop();
        }
    }

    return holder.length == 0;
}
