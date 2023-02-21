# The selected API to work with will be
## restcountries

### ALL
https://restcountries.com/v3.1/all

### NAME
Search by country name. It can be the native name or partial name

https://restcountries.com/v3.1/name/{name}
https://restcountries.com/v3.1/name/peru
https://restcountries.com/v3.1/name/united

### FULL NAME
Search by country full name

https://restcountries.com/v3.1/name/{name}?fullText=true
https://restcountries.com/v3.1/name/aruba?fullText=true

### CODE
Search by cca2, ccn3, cca3 or cioc country code (yes, any!)UPDATE: this will now return an array.

https://restcountries.com/v3.1/alpha/{code}
https://restcountries.com/v3.1/alpha/pe
https://restcountries.com/v3.1/alpha/per

### LIST OF CODES
Search by list of cca2, ccn3, cca3 or cioc country codes (yes, any!). The original project used ; as separator. In out case, the comma is used to separate values.

https://restcountries.com/v3.1/alpha?codes={code},{code},{code}
https://restcountries.com/v3.1/alpha?codes=col,pe,at

### CURRENCY
Search by currency name (new!) or code

https://restcountries.com/v3.1/currency/{currency}
https://restcountries.com/v3.1/currency/pen
https://restcountries.com/v3.1/currency/dollar

### LANGUAGE
Search by language name (new!) or iso639_2 code

https://restcountries.com/v3.1/lang/{lang}
https://restcountries.com/v3.1/lang/spa
https://restcountries.com/v3.1/lang/german

Translations (V3 only) - Now you can search by name in any available translation

https://restcountries.com/v3.1/translation/Peruánská

### CAPITAL CITY
Search by capital city.

https://restcountries.com/v3.1/capital/{capital}
https://restcountries.com/v3.1/capital/lima

### REGION
Search by Region:
  Africa, Americas, Asia, Europe, Oceania.
The search can be using the full region’s name or just part of it

https://restcountries.com/v3.1/region/{region}
https://restcountries.com/v3.1/region/europe
https://restcountries.com/v3.1/region/ame

### SUBREGION
Search by Subregion:
  South America, Southern Europe, Central America, Eastern Asia, etc.
The search can be using the full subregion’s name or just part of it

https://restcountries.com/v3.1/subregion/{region}
https://restcountries.com/v3.1/subregion/europe
https://restcountries.com/v3.1/subregion/south

### DEMONYM
Now you can search by how a citizen is called.

https://restcountries.com/v3.1/demonym/{demonym}
https://restcountries.com/v3.1/demonym/peruvian
