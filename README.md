# Procvičování funkcí - Lekce 7

Bonusový domácí úkol pro kurz JavaScript 1 od Czechitas.

## 1. Výplňořez

Napište funkci `fillcut`, která jako svůj první parametr `str` očekává řetězec a jako druhý parametr `len` kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.
- Pokud je vstupní řetězec delší než `len`, tak funkce odřízne jeho konec a vrátí výsledek.
- Pokud je vstupní řetězec kratší než `len`, tak jej doplní od začátku znakem tečky a vrátí výsledek.
- Pokud je vstupní řetězec dlouhý přesně `len`, funkce jej vrátí beze změny.

Příklad použití:
```javascript
> fillcut('petr', 8)
'....petr'
> fillcut('petr', 3)
'pet'
> fillcut('petr', 4)
'petr'
```


## 2. Přestupný rok jako funkce

Napište funkci `isLeapYear`, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí `true`, pokud je zadaný rok přestupný. V opačném případě vrátí `false`.