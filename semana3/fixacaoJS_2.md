```
function calculaPrecoTotal(quantidade) {
  let custoTotal
  
  if(quantidade < 12) {
    custoTotal = 1.30
    custoTotal = quantidade * 1.30
  } else {
    custoTotal = 1
    custoTotal = quantidade * 1
  }
  return custoTotal
}
```