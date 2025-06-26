// @ts-nocheck

export function onlyNumberMask(number) {
    if (!!number)
        return number.replace(/\D/g, '');
}

export function onlyLetterMask(letter) {
    if (!!letter)
        return letter.replace(/[^a-zA-Z]/g, '');
}

export function onlySpecialCharacterMask(char) {
    if (!!char)
        return char.replace(/[a-zA-Z0-9]/g, '');
}

export function cpfMask(cpf) {
    if (!!cpf)
        return cpf.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
}

export function unCpfMask(cpf) {
    if (!!cpf)
        return cpf.replace(/\D/g, '')
            .replace('.', '')
            .replace('.', '')
            .replace('-', '');
}

export function isValidCpfMask(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999"
    ) {
        return false
    }
    let soma = 0
    let resto
    for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto === 10) || (resto === 11)) resto = 0
    if (resto !== parseInt(cpf.substring(9, 10))) return false
    soma = 0
    for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto === 10) || (resto === 11)) resto = 0
    if (resto !== parseInt(cpf.substring(10, 11))) return false
    return true
}

export function rgMask(rg) {
    if (!!rg)
        return rg.replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
}

export function unRgMask(rg) {
    if (!!rg)
        return rg.replace(/\D/g, '')
            .replace('.', '')
            .replace('.', '')
            .replace('-', '');
}

export function cnpjMask(cnpj) {
    if (!!cnpj)
        return cnpj.replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2');
}

export function unCnpjMask(cnpj) {
    if (!!cnpj)
        return cnpj.replace(/\D/g, '')
            .replace('.', '')
            .replace('.', '')
            .replace('/', '')
            .replace('-', '');
}

export function cpfCnpjMask(value) {
    value = value.replace(/\D/g, "");

    if (!!value && value.length < 12)
        return cpfMask(value)
    else
        return cnpjMask(value)
}

export function phoneMask(phone) {
    if (!!phone) {
        return phone.replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1');
    }
}

export function unPhoneMask(phone) {
    if (!!phone)
        return phone.replace(/\D/g, '')
            .replace('(', '')
            .replace(')', '')
            .replace(' ', '')
            .replace('-', '');
}

export function cepMask(cep) {
    if (!!cep)
        return cep.replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2');
}

export function unCepMask(cep) {
    if (!!cep)
        return cep.replace(/\D/g, '')
            .replace('-', '');
}

export function dateBrMask(data) {
    data = data.replace(/\D/g, '');

    if (data.length <= 2) {
        return data;
    }

    if (data.length <= 4) {
        return `${data.substring(0, 2)}/${data.substring(2)}`;
    }

    if (data.length <= 8) {
        return `${data.substring(0, 2)}/${data.substring(2, 4)}/${data.substring(4)}`;
    }

    return `${data.substring(0, 2)}/${data.substring(2, 4)}/${data.substring(4, 8)}`;
}

export function dateUsBrMask(data) {
    data = data.replace(/\D/g, '');

    if (!!data && data.length == 8) {
        const dt = [];

        dt.push(data.substring(0, 4));
        dt.push(data.substring(4, 6));
        dt.push(data.substring(6, 8));

        return dt[2] + '/' + dt[1] + '/' + dt[0];
    }
}

export function dateBrUsMask(data) {
    data = data.replace(/\D/g, '');

    if (!!data && data.length == 8) {
        const dt = [];

        dt.push(data.substring(0, 2));
        dt.push(data.substring(2, 4));
        dt.push(data.substring(4, 8));

        return dt[2] + '-' + dt[1] + '-' + dt[0];
    }
}

export function decimalNumberMask(number) {
    if (!!number)
        number = number.replace(/[,|.]/g, "")
       return new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(number);

}

export function capitalizeFirstLetterMask(text) {
    if (!!text)
       return text.toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
}

export function currencyBrlMask(value) {
    if (!!value)
        return new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
}

export function creditCardNumberMask(number) {

    if (!!number)
        return number.replace(/\D/g, "")
            .replace(/(\d{4})(\d)/, '$1 $2')
            .replace(/(\d{4})(\d)/, '$1 $2')
            .replace(/(\d{4})(\d)/, '$1 $2')
            .replace(/(\d{4})(\d)/, '$1 $2')
}

export function creditCardDateMask(number) {
    if (!!number)
        return number.replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, '$1/$2')

}