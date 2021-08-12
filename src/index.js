module.exports = function toReadable(number) {
    const units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    const dozens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    const firstDozens = {
        0: 'eleven',
        1: 'twelve',
        2: 'thirteen',
        3: 'fourteen',
        4: 'fifteen',
        5: 'sixteen',
        6: 'seventeen',
        7: 'eighteen',
        8: 'nineteen'
    };
    const str = number.toString();
    const split = str.split('');
    const length = split.length;
    let res = '';
    switch (length) {
        case 1: return Object.entries(units).find((e, i) => i == number)[1];

        case 2: if (number > 10 && number < 20) {
            return res = Object.entries(firstDozens).find((e, i) => i == split[1] - 1)[1];
        } else if (number % 10 === 0) {
            return res = Object.entries(dozens).find((e, i) => i == split[0] - 1)[1];
        } else {
            return res = Object.entries(dozens).find((e, i) => i == split[0] - 1)[1] + ' ' + Object.entries(units).find((e, i) => i == split[1])[1];
        };

        case 3: if (+`${split[1]}${split[2]}` > 10 && +`${split[1]}${split[2]}` <= 19) {
            return res = Object.entries(units).find((e, i) => i == split[0])[1] + ' hundred ' + Object.entries(firstDozens).find((e, i) => i == split[2] - 1)[1];
        }

        else if (number % 100 === 0) {
            return res = Object.entries(units).find((e, i) => i == split[0])[1] + ' hundred';
        }

        else if (+`${split[0]}${split[1]}${split[2]}` > +`${split[0]}00` && +`${split[0]}${split[1]}${split[2]}` < +`${split[0]}10`) {
            return res = Object.entries(units).find((e, i) => i == split[0])[1] + ' hundred' + ' ' + Object.entries(units).find((e, i) => i == split[2])[1];
        }

        else if (+`${split[1]}${split[2]}` % 10 === 0) {
            return res = Object.entries(units).find((e, i) => i == split[0])[1] + ' hundred ' + Object.entries(dozens).find((e, i) => i == split[1] - 1)[1];
        }

        else {
            return res = Object.entries(units).find((e, i) => i == split[0])[1] + ' hundred ' + Object.entries(dozens).find((e, i) => i == split[1] - 1)[1] + ' ' + Object.entries(units).find((e, i) => i == split[2])[1];
        };
    }
}
