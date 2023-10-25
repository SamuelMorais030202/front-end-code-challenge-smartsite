import useDataQuery from "../../hooks/useDataQuery";
import useSearchContext from "../../hooks/useSearchContext";
import { DataResponseType } from "../../types";
import Card from "../Card";
import styled from './cardList.module.css';

const CardList = () => {
  const { data } = useDataQuery();
  const { trainingPeriod, closed, setNumberOfUnits } = useSearchContext();

  if (!data) {
    return <p>Nenhuma academia encontrada.</p>;
  }

  const period = trainingPeriod.split(' ');
  const [startTreiningPeriod, endTreiningPeriod] = period;

  const list = data?.locations as DataResponseType[] || [];

  const isMatchTimeRange = (schedule: { hour: string }): boolean => {
    const [start,,end] = schedule.hour.split(' ');
    return startTreiningPeriod >= start && endTreiningPeriod <= end;
  };

  const filterList = trainingPeriod
    ? list.filter((item) => {
        const isOpen = item.opened === !closed;
        const hasMatchingSchedule = item.schedules?.some(isMatchTimeRange);
        return isOpen && hasMatchingSchedule;
      })
    : closed ? list.filter((item) => !item.opened) : list;

  setNumberOfUnits(filterList.length);

  return (
    <div className={styled.cardListContainer}>
      {
        filterList.length > 0
        ? filterList.map((item, index) => (
          <Card key={index} {...item} />
        ))
        : <p>Nenhuma academia encontarda</p>
      }
    </div>
  );
};

export default CardList;