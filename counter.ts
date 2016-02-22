class Counter {
    private alphabet: string[] = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    static get ALPHABET_SIZE(): number {
        return 26;
    }

    convertRegular(number: number): string {
        var result = "";

        if (number <= 0) {
            return result;
        }

        while (true) {
            if (number <= Counter.ALPHABET_SIZE) {
                result += this.alphabet[number - 1];
                break;
            }

            var q = Math.round(number / Counter.ALPHABET_SIZE);
            if (q <= Counter.ALPHABET_SIZE) {
                result += this.alphabet[q - 1];
                number = number - (q * Counter.ALPHABET_SIZE);
            } else {
                var x = Math.floor(number / (Counter.ALPHABET_SIZE * Counter.ALPHABET_SIZE));

                result += this.alphabet[x - 1];
                number = number - ((Counter.ALPHABET_SIZE * Counter.ALPHABET_SIZE) * x);
            }
        }

        return result;
    }
    
    convertRecursion(number: number): string {
        return this.convert2(number, "");
    }

    private convert2(number: number, value: string): string {
        if (number <= 0) {
            return "";
        }

        if (number <= Counter.ALPHABET_SIZE) {
            return value + this.alphabet[number - 1];
        }

        var q = Math.round(number / Counter.ALPHABET_SIZE);
        if (q <= Counter.ALPHABET_SIZE) {
            return this.convert2(number - (q * Counter.ALPHABET_SIZE), value + this.alphabet[q - 1]);
        } else {
            var x = Math.floor(number / (Counter.ALPHABET_SIZE * Counter.ALPHABET_SIZE));
            return this.convert2(number - ((Counter.ALPHABET_SIZE * Counter.ALPHABET_SIZE) * x), value + this.alphabet[x - 1]);
        }
    }
}

export = Counter;