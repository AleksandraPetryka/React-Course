# Notatki co do repo

## Niejasne elementy


## Wyjaśnienia Karola

### Co to są propsy?

Props to jest obiekt ze wszystkimi parametrami, jakie przyjmuje komponent.
Np. w tym przykładzie renderujemy komponent w JSXie i w czystym JSie

```js
 {NewExpenses({
    expenses: expenses,
    lolo: 123,
    bobobo: 1232321321,
    kokokoko: 321321312321,
})}
<NewExpenses expenses={expenses} lolo={123} bobobo={123321} kokoko={123312}/>
```

W tym przypadku, nasz obiekt props będzie mieć wartość:

```js
const props = {
    expenses: expenses,
    lolo: 123,
    bobobo: 1232321321,
    kokokoko: 321321312321,
}
```

Gdy stworzymy komponent **New Expenses**, robimy destrukturyzację od razu obiektu props:
```js
function Expenses({ expenses }) {
  ...
```
znaczy dokładnie to samo, co:
```js
function Expenses(props) {
  const { expenses } = props;
  ...
```