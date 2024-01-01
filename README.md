# Use mask

A library with treatment for several masks.

# Installation
```bash
npm install util-mask --save
```

# Available functions
- [onlyNumberMask(number: string)](#only-number-mask)
- [onlyLetterMask(letter: string)](#only-letter-mask)
- [onlySpecialCharacterMask(char: string)](#only-special-character-mask)
- [cpfMask(cpf: string)](#cpf-mask)
- [unCpfMask(cpf: string)](#un-cpf-mask)
- [isValidCpfMask(cpf: string)](#is-valid-cpf-mask)
- [rgMask(rg: string)](#rg-mask)
- [unRgMask(rg: string)](#un-rg-mask)
- [cnpjMask(cnpj: string)](#cnpj-mask)
- [unCnpjMask(cnpj: string)](#un-cnpj-mask)
- [cpfCnpjMask(value: string)](#cpf-cnpj-mask)
- [phoneMask(phone: string)](#phone-mask)
- [unPhoneMask(phone: string)](#un-phone-mask)
- [cepMask(cep: string)](#cep-mask)
- [unCepMask(cep: string)](#un-cep-mask)
- [dateUsBrMask(date: string)](#date-us-br-mask)
- [dateBrUsMask(date: string)](#date-br-us-mask)
- [decimalNumberMask(number: string)](#decimal-number-mask)
- [capitalizeFirstLetterMask(text: string)](#capitalize-first-letter-mask)
- [currencyBRLMask(value: string)](#currency-brl-mask)
- [creditCardDateMask(value: string)](#credit-card-date-mask)

# Use
Import the necessary functions from the package:

```javascript
// Example
import { onlyNumber, onlyLetterMask } from 'util-mask';
```

Using the masks:
#### Only Number Mask
```javascript
console.log(onlyNumberMask('abc12345abc678909abc'));  // Output: 123456789
```

#### Only Letter Mask
```javascript
console.log(onlyLetterMask('abc123!@#'));  // Output: abc
```

#### Only Special Character Mask
```javascript
console.log(onlySpecialCharacterMask('123!@#abc'));  // Output: !@#
```

#### Cpf Mask
```javascript
console.log(cpfMask('12345678909'));  // Output: 123.456.789-09
```

#### Un Cpf Mask
```javascript
console.log(unCpfMask('123.456.789-09'));  // Output: 12345678909
```

#### Is Valid CPF Mask
```javascript
console.log(isValidCpfMask('123.456.789-09'));  // Output: true || false
```

#### Rg Mask
```javascript
console.log(rgMask('112223334'));  // Output: 11.222.333-4
```

#### Un Rg Mask
```javascript
console.log(unRgMask('11.222.333-4'));  // Output: 112223334
```
 
#### Cnpj Mask
```javascript
console.log(cnpjMask('11222333444455'));  // Output: 11.222.333/4444-55
```

#### Un Cnpj Mask
```javascript
console.log(unCnpjMask('11.222.333/4444-55'));  // Output: 11222333444455
```

#### Cpf Cnpj Mask
```javascript
console.log(cpfCnpjMask('11122233344'));  // Output: 111.222.333-44
```

#### Cpf Cnpj Mask
```javascript
console.log(cpfCnpjMask('11222333444455'));  // Output: 11.222.333/4444-55
```

#### Phone Mask
```javascript
console.log(phoneMask('11222223333'));  // Output: (11) 22222-3333
```

#### Un Phone Mask
```javascript
console.log(unPhoneMask('(11) 22222-3333'));  // Output: 11222223333
```

#### Cep Mask
```javascript
console.log(cepMask('11111222'));  // Output: 11111-222
```

#### Un Cep Mask
```javascript
console.log(unCepMask('11111-222'));  // Output: 11111222
```

#### Date Us Br Mask
```javascript
console.log(dateUsBrMask('1111-11-11'));  // Output: 11/11/2020
```

#### Date Br Us Mask
```javascript
console.log(dateBrUsMask('11/11/2020'));  // Output: 2020-11-11
```

#### Decimal Number Mask
```javascript
console.log(decimalNumberMask('1,1,1,1,1,1,1,'));  // Output: 1.1111.11
```

#### Capitalize First Letter Mask
```javascript
console.log(capitalizeFirstLetterMask('test test test'));  // Output: Test Test Test
```

#### Currency BRL Mask
```javascript
console.log(currencyBrlMask('111222'));  // Output: R$ 111.222,00
```

#### Credit Card Date Mask
```javascript
console.log(creditCardDateMask('1120'));  // Output: 11/20
```

