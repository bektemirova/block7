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
  priceRow.innerHTML = `
                        <div class="price__cell" data-title="Ремонтные услуги">
                                        <span>${ key[0] }</span>
                                        <span>${ title[0] }</span>
                           </div>
                         <div class="price__cell" data-title="Цена">
                              <span>${ key[1] }</span>
                               <span> ${ title[1] }</span>
                            </div>
                            <div class="price__cell" data-title="Срок">
                              <span>${ key[2] }</span>
                                  <div class="price__cell-btn">
                                    <span>${ title[2] }</span>
                                      <button
                                            type="button"
                                            class="price__btn"
                                            aria-label="Заказать"
                                        >
                                            Заказать
                                          </button>
                                   </div>
                           </div>
  `;
  return priceRow;
};

for (let el of data) {
  let item = createTable(keys, el);
  priceBox.appendChild(item);
}
