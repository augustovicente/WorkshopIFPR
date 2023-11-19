import { FormEvent } from "react";

export const maskCPF = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;

    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
        e.currentTarget.value = value;
    }
    return e;
};

export const maskPhone = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 15;
    let value = e.currentTarget.value;

    if (!value.match(/^(\d{2}) (\d{4})-(\d{4})$/) && value.length <= 14) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
        e.currentTarget.value = value;
    } else if (!value.match(/^(\d{2}) (\d{5})-(\d{4})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        e.currentTarget.value = value;
    }
    return e;
};

export const maskCEP = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;

    if (!value.match(/^(\d{5})-(\d{3})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        e.currentTarget.value = value;
    }
    return e;
}


/**
 * Formata uma string para número de celular
 * @example
 * formatPhone('4399999999') => (43) 99999-9999
 */
export const phoneFormatter = (value: string) => {
    if (value.length === 13) {
        value = value.substring(2);
    }

    if (!value.match(/^(\d{2}) (\d{4})-(\d{4})$/) && value.length <= 10) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
    } else if (!value.match(/^(\d{2}) (\d{5})-(\d{4})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }
    return value;
};


/**
 * Formata uma string para CPF
 * @example
 * formatCpf('12345678901') => 123.456.789-01
 */
export const cpfFormatter = (value: string) => {
    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    }

    return value;
};

export const cepFormatter = (value: string) => {
    if (!value.match(/^(\d{5})-(\d{3})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }

    return value;
}
