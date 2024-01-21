function osszesOszto(szam) {
    if (szam <= 0 || !Number.isInteger(szam)) {
        console.error('A bemenetnek pozitiv egesz szamnak kell lennie.');
        return [];
    }
    const osztok = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}

function parosDarab(szamTomb) {
    const parosSzamokDarabja = szamTomb.filter(szam => szam % 2 === 0).length;
    return parosSzamokDarabja;
}

const inputTomb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const parosSzamokDarabszama = parosDarab(inputTomb);
console.log('A páros számok darabszáma a tömbben:', parosSzamokDarabszama);

function fuggvenyhivasPalindrom(eredmenySzoveg) {
    const eredmeny = eredmenySzoveg().toLowerCase().replace(/\s/g, '');
    const forditottEredmeny = eredmeny.split('').reverse().join('');
    return eredmeny === forditottEredmeny;
}

const palindromEredmeny = fuggvenyhivasPalindrom(() => "indul a gorog aludni");
console.log('A szoveg palindrom?', palindromEredmeny);
