import { SET_FILTER } from "./filter-types";

//*  Payload (нагрузка) в Redux относится к значению данных, которые передаются в экшен (action) вместе с типом действия (action type).
//*  В контексте Redux, экшен является простым объектом, который описывает изменение состояния приложения.Он содержит тип действия и данные(payload),
//*  необходимые для выполнения изменений.После того, как экшен создан, он отправляется в Redux store,
//*  который обрабатывает действие и обновляет состояние приложения в соответствии с переданными данными.Payload в Redux может быть любого типа данных,
//*  включая строки, числа, объекты или массивы.Он может содержать одно значение или несколько значений, в зависимости от необходимости.


export const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};
