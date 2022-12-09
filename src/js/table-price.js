const priceBox = document.querySelector(".price");
export const data = [
  [" Тестирование с выдачей технического заключения", "1 000 ₽", "30-120 мин"],
  ["Диагностика", "Бесплатно ", "30 мин"],
  ["Замена дисплея", "1 000 ₽", "30-120 мин"],
  ["Замена полифонического динамика", "1 000 ₽", "30-120 мин"],
  ["Замена программного обеспечения", "1 000 ₽", "30-120 мин"],
];

export const keys = ["Ремонтные услуги", "Цена", "Срок"];

export const createTable = (key, title) => {
  let priceRow = document.createElement("div");
  priceRow.classList.add("swiper-slide");
  priceRow.classList.add("price__row");

  let priceCell = document.createElement("div")
  priceCell.classList.add("price__cell")
  let span1 = document.createElement("span")
  let span2 = document.createElement("span")
  span1.textContent = key[0]
  span2.textContent = title[0]
  priceCell.appendChild(span1)
  priceCell.appendChild(span2)

  let priceCell2 = document.createElement("div")
  priceCell2.classList.add("price__cell")
  let span3 = document.createElement("span")
  let span4 = document.createElement("span")
  span3.textContent = key[1]
  span4.textContent = title[1]
  priceCell2.appendChild(span3)
  priceCell2.appendChild(span4)

  let priceCell3 = document.createElement("div")
  priceCell3.classList.add("price__cell")
  let span5 = document.createElement("span")
  span5.textContent = key[2]
  let btnDiv = document.createElement("div")
  btnDiv.classList.add("price__cell-btn")
  let span6 = document.createElement("span")
  span6.textContent = title[2]
  btnDiv.appendChild(span6)
  let btn = document.createElement("button")
  btn.classList.add("price__btn")
  btn.textContent = "Заказать"
  btnDiv.appendChild(btn)
  priceCell3.appendChild(btnDiv)

  priceRow.appendChild(priceCell)
  priceRow.appendChild(priceCell2)
  priceRow.appendChild(priceCell3)

  return priceRow
};

for (let el of data) {
  let item = createTable(keys, el);
  priceBox.appendChild(item);
}


