import Countdown from "react-countdown-now";

export const SmallCountDown = (props: any) => {
  const timer = (date: any) => {
    return (
      <p>
	{date.days}d {date.hours}h {date.minutes}m {date.seconds}s     </p>
    );
  };
  return (
    <>
      <Countdown
        date={props.date}
        intervalDelay={1000}
        renderer={(date) => timer(date)}
      />
    </>
  );
};
