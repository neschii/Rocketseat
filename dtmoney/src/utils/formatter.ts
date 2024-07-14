export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const priceFormatter = new Intl.NumberFormart('pt-BR', { 
    style: 'currency',
    currency: 'BRL'
});