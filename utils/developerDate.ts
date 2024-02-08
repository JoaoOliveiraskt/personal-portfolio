interface Props {
    startDate?: Date;
    endDate?: Date;
  }
  
  const defaultStartDate = new Date("2022-11-10");
  const defaultEndDate = new Date();

  export default function getMonthDifference({ startDate = defaultStartDate, endDate = defaultEndDate }: Props = {})  {

    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
    
  };
  